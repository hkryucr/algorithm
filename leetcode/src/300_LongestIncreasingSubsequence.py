'''
300. Longest Increasing Subsequence
Medium

4786

109

Add to List

Share
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
'''

class Solution(object):
    def lengthOfLIS(self, nums):
#         if len(nums) == 0:
#             return 0

#         dp = [1] * len(nums)
#         longestSS = 1
        
#         for i in range(len(nums)):
#             if i == 0:
#                 continue
#             j = i - 1
#             prevMax = 0
#             while j >= 0:
#                 if nums[i] > nums[j]:
#                     prevMax = max(prevMax, dp[j])                    
#                 j-=1
#             dp[i] = prevMax + 1
#             longestSS = max(longestSS, dp[i])             
#         return longestSS
    
        dp = [0] * len(nums)
        size = 0
        for num in nums:
            left = 0
            right = size
            
            while left != right:
                mid = (left + right) / 2
                if dp[mid] < num:
                    left = mid + 1
                else:
                    right = mid 
            dp[left] = num
            
            size = max(left + 1, size)
        return size