'''
472. Concatenated Words
Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Note:
The number of elements of the given array will not exceed 10,000
The length sum of elements in the given array will not exceed 600,000.
All the input string will only include lower case letters.
The returned elements order does not matter.
'''

'''
1) brute force solution
-> create all cancatenated words
-> find common words between input words and cacatenated words
-> n! where n is the number of words

2) using set
-> result_arr = []
-> set(words)
-> sort by length of words
    -> for everyword -> do slicing [i..j]
        "cats dogcats"
        -> whether dogcats is cancatenated_word
DFS ->
    maximum length of word - k
    length of words = n
    
    n * k * k = nk^2

3) trie

'''

class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        d = set(words)
        not_ans = set()
        def dfs(word):
            if word in not_ans:
                return False
            for i in range(1, len(word)):
                prefix = word[:i]
                if prefix in d:
                    suffix = word[i:]
                    if suffix in d: return True
                    if dfs(suffix): return True
                    not_ans.add(suffix)
            not_ans.add(word)
            return False
        
        res = []
        for word in words:
            if dfs(word): res.append(word)
        
        return res
    
        
        