/*
81. Search in Rotated Sorted Array II

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?

*/

var search = function(nums, target) {
    
    let lo = 0
    let hi = nums.length - 1
    let mid = Math.abs((lo + hi) / 2)
    while (nums[lo] <= nums[hi]) {
        if (nums[mid] === target) {
            return true
        } else if (nums[lo] < nums[mid]) {
            if (target > nums[lo] && target < nums[mid]) {
                hi = mid - 1
            }
            else {
                lo = mid + 1

            }
        } else {
            if (target < nums[hi] && target > nums[mid]) {
                lo = mid + 1
            } else {
                hi = mid - 1
            }
        }
    }
    return false
}