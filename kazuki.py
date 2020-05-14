'''
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]

OBSERVATION
"aab"

["a","a","b"]
["a","a","c","c","a","b"]

  ["aa","c","c","a","b"]
  ["a","a","cc","a","b"]

T(n) = T(n-1) + T(n-1) + c = 2^n


recursive function -> list(s), result, index i and j

"aab"         0    1    2
palindromes: "a", "a", "b"
"aa", "a"
"aaa"
 0   1    2
"b" "aa" "b"
"aab"

result:
i=0
palin="aa"
temp="aa", "b"

"efe"
[["e","f","e"]]
[["e","f","e"],["efe"]]

efe but ef or fe are not


"efe"

-> [["e"]]
-<  
   [["e", "f"], ["ef"]]
    "ef" => "efe"
    "e" "f" => "e" "f" "e"
         e
     |              | 
     e,f            ef
|       |          |        |
e,f,e   e,fe       ef,e     

                   i is moving 
"aaaaaaaaaaaaa     aaaaaaaaa"

""
'''''

class Solution:
    def partition(self, s: str) -> List[List[str]]:
        result = []
        self.recursion(list(s), result)
        return result
    
    def recursion(self, palindromes, result):
        result.append(list(palindromes))
        for i in range(len(palindromes) - 1):
            palin = palindromes[i] + palindromes[i+1]
            if self.is_palindrome(palin):
                temp = palindromes[:i] + [palin] + palindromes[i+2:]
                self.recursion(temp, result)

    def is_palindrome(self, palin):
        i = 0
        j = len(palin) - 1

        while i < j:
            if palin[i] != palin[j]:
                return False
            i += 1
            j -= 1
        
        return True
