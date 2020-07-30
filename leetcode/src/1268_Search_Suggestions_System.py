'''
1268. Search Suggestions System

Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.
Return list of lists of the suggested products after each character of searchWord is typed.  

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]
 

Constraints:

1 <= products.length <= 1000
There are no repeated elements in products.
1 <= Σ products[i].length <= 2 * 10^4
All characters of products[i] are lower-case English letters.
1 <= searchWord.length <= 1000
All characters of searchWord are lower-case English letters.

'''

class Solution(object):
    def __init__(self):
        self.trie = {}
        
    def suggestedProducts(self, products, searchWord):

        for product in products:
            self.insert(product)
        
        node = self.trie
        res = []
        
        for (char) in searchWord:
            if not char in node:
                res.append([])
                node ={}
            else:
                node = node[char]
                res.append(sorted(list(node["words"]))[:3])
            
        return res
        
    def insert(self, word):
        node = self.trie 
        
        for char in word:
            if not char in node:
                node[char] = {}
            node = node[char]
            if not "words" in node:
                node["words"] = set()
            node["words"].add(word)

class Solution(object):        
    def suggestedProducts(self, products, searchWord):
        
        products = sorted(products)
        chars = ""
        res = []

        for char in searchWord:
            chars += char
            index = self.bs(chars, products)
            cur_arr = []
            for i in range(index, 3 + index):
                if i >= len(products):
                    break
                el = products[i]
                if not el.startswith(chars, 0, len(chars)):
                    break
                cur_arr.append(el)

            res.append(cur_arr)    
        return res
        
    def bs(self, word, products):
        
        left = 0
        right = len(products) - 1
        
        while(left < right):
            mid = left + ((right - left) / 2)
            if products[mid] > word:
                right = mid
            elif products[mid] == word:
                return mid
            else:
                left = mid + 1
        return left
        
        
        
#             6 return 7
#               v  
#               v     m       
#         1 3 5 7 9 10 12
#         - - - - - - - -
#         0 1 2 3 4  5  6