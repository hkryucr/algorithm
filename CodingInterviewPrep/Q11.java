/*
33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

st = 0;
en = n-1;
cal mid val


mid > start
    if(st <= target < mid)
    en = mid-1
    else
    st = mid+1
mid < en
    if(mid < target <= en)
    st = mid+1
    else
    en = mid-1

*/

class Solution {
    public int search(int[] nums, int target) {
        if(nums==null || nums.length==0)
            return -1;
        else return bs(nums, 0, nums.length, target);
        
    }
    
    private int bs(int[] nums, int st, int en, int target){
        
        while(st <= en){
            int mid = st + (en-st)/2;
            if(nums[mid]==target) return mid;
            if(nums[mid]>nums[st]){
                if(nums[st]<=target && target<nums[mid])
                    en = mid-1;
                else
                    st = mid+1;
            }
            else if(nums[mid]<nums[en]){
                if(nums[mid]<target && target<=nums[en])
                    st = mid+1;
                else
                    en = mid-1;
            }
        }
        return -1;
    }
}