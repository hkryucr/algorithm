/*
Given an array which consists of non-negative integers and an integer m, 
you can split the array into m non-empty continuous subarrays. 
Write an algorithm to minimize the largest sum among these m subarrays.

Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
*/

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

var splitArray = function(nums, m) {
    // left and right to use bs
    // biggest element = left bound
    // sum = right bound;
    let sum = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        max = Math.max(max, nums[i]);
    }

    //BS to find the mid point
    let left = max;
    let right = sum;

    while(left < right){
        let mid = left + Math.floor((right - left)/2);
        let curSum = 0;
        let days = 1; 

        for(let i = 0; i < nums.length; i++){
            if(curSum + nums[i] > mid){
                curSum = nums[i];
                days++
            } else {
                curSum += nums[i];
            };
        }

        if(days > m){ 
            left = mid + 1;
        } else if(days <= m){
            right = mid;
        } 
    }
    return left;
};