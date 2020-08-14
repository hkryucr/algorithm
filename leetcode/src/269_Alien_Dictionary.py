'''
269. Alien Dictionary
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. 
You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. 
Derive the order of letters in this language.

Example 1:
Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
Output: "wertf"

Example 2:
Input:
[
  "z",
  "x"
]
Output: "zx"

Example 3:
Input:
[
  "z",
  "x",
  "z"
] 
Output: "" 
Explanation: The order is invalid, so return "".
Note:
You may assume all letters are in lowercase.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
'''

from collections import defaultdict

class Solution(object):
    def alienOrder(self, words):
        graph = defaultdict(lambda: set())
        word_set = set()

        for i, word in enumerate(words):
            for char in word:
                word_set.add(char)
            if i == 0: continue
            small = words[i-1]
            big = words[i] 
            if self.build_order(small, big, graph) == False:
                return ""

        visited = set()
        res = []

        for word in word_set:
            if word in visited: continue
            if self.DFS(word, res, visited, graph, set()) == False:
                return ""

        return "".join((res))

    def DFS(self, word, res, visited, graph, visiting):
        if word in visited: return True
        if word in visiting: return False

        visiting.add(word)
        for next_word in graph[word]:
            if self.DFS(next_word, res, visited, graph, visiting) == False:
                return False

        visiting.remove(word)
        visited.add(word)
        res.append(word)
        return True

    def build_order(self, small, big, graph, idx = 0):
        if idx == len(big) and idx == len(small): return True
        if idx >= len(big) or idx >= len(small): return len(small) < len(big)
        if big[idx] == small[idx]:
            if self.build_order(small, big, graph, idx+1) == False:
                return False
        else:
            graph[big[idx]].add(small[idx])
        return True
    
            
Input1 = [ "wrt", "wrf", "er", "ett", "rftt" ]
# Output2 = "wertf"

Input2 = [ "z", "x"]
# Output: "zx"

Input3 = ["z","x","z"] 
# Output3: "" 

Input4 = ["abc", "ab"]
# output: ""

solution = Solution()
print(solution.alienOrder(Input1))
print(solution.alienOrder(Input2))
print(solution.alienOrder(Input3))
print(solution.alienOrder(Input4))
