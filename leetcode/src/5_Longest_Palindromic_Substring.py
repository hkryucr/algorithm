'''
5. Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

'''

class Solution(object):
    def longestPalindrome(self, s):
        
        longest_left = 0
        longest_right = 0
        longest = 0
        
        for i, char in enumerate(s):
            left = i
            right = i
            while left >= 0 and right < len(s):
                if s[left] == s[right]:
                    if longest <= right - left :
                        longest = right - left
                        longest_left = left
                        longest_right = right
                    left -= 1
                    right += 1
                else:
                    break
                    
            left = i
            right = i+1
            while left >= 0 and right < len(s):
                if s[left] == s[right]:
                    if longest <= right - left :
                        longest = right - left 
                        longest_left = left
                        longest_right = right
                    left -= 1
                    right += 1
                else:
                    break

        return s[longest_left:longest_right+1]
