'''
494. Target Sum
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:

Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
 

Constraints:

The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.

'''

class Solution(object):
    def findTargetSumWays(self, nums, S):
        
        sums_arr = [nums[0], -1*nums[0]]
        sum_nums = sum(nums)
        
        if sum_nums < S:
            return 0
        
        prev_arr = [0] * (2*sum_nums+1)
        prev_arr[sum_nums + nums[0]] += 1
        prev_arr[sum_nums - nums[0]] += 1
        
        for num in nums[1:]:
            new_arr = [0] * (2*sum(nums)+1)
            for i in range(len(prev_arr)):
                cur_sum = prev_arr[i]
                if(cur_sum == 0):
                    continue;
                
                new_sum_plus = i + num
                new_sum_minus = i - num
                
                new_arr[new_sum_plus] += cur_sum
                new_arr[new_sum_minus] += cur_sum
            prev_arr = new_arr
            
        return prev_arr[S + sum_nums]
    
    