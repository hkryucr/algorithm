
'''
76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

'''

from collections import defaultdict

class Solution(object):
    def minWindow(self, s, t):
        t_dict = defaultdict(lambda: 0)
        count = len(t)
        for char in t:
            t_dict[char] += 1
        
        left = 0
        min_len = float("inf")
        min_left = 0
        min_right = 0
        
        for right, char in enumerate(s):
            if not char in t_dict: continue

            t_dict[char] -= 1

            if t_dict[char] >= 0: count -= 1

            while (not s[left] in t_dict) or (t_dict[s[left]] < 0):
                if s[left] in t_dict:
                    t_dict[s[left]] += 1
                left += 1

            if count == 0 and right-left+1 < min_len:
                min_len = right-left+1
                min_left = left
                min_right = right

        return s[min_left:min_right+1] if min_len != float("inf") else ""
    
    
    