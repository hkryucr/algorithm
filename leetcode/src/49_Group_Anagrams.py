'''
49. Group Anagrams
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

'''
from collections import defaultdict

class Solution(object):
    def groupAnagrams(self, strs):
        word_dict = defaultdict(lambda: [])
        for cur_str in strs:
            word_dict[str(sorted(cur_str))].append(cur_str)
        return [ word_dict[key] for key in word_dict]
                
