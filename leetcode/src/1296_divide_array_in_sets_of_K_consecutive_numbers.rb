# Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into sets of k consecutive numbers
# Return True if its possible otherwise return False.

 

# Example 1:

# Input: nums = [1,2,3,3,4,4,5,6], k = 4
# Output: true
# Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].
# Example 2:

# Input: nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
# Output: true
# Explanation: Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].
# Example 3:

# Input: nums = [3,3,2,2,1,1], k = 3
# Output: true
# Example 4:

# Input: nums = [1,2,3,4], k = 3
# Output: false
# Explanation: Each array should be divided in subarrays of size 3.
 

# Constraints:

# 1 <= nums.length <= 10^5
# 1 <= nums[i] <= 10^9
# 1 <= k <= nums.length
# Note: This question is the same as 846: https://leetcode.com/problems/hand-of-straights/

# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def is_possible_divide(nums, k)
    nums = nums.sort()
    counts = Hash.new(0)
    nums.each do |i|
        counts[i] += 1
    end
    nums.each do |n|
        count = counts[n]
        if count == 0
           next
        end
        0.upto(k-1) do |j|
            num = n + j
            if counts[num] >= count
                counts[num] -= count
            else
                return false
            end
        end
    end
    return true
end