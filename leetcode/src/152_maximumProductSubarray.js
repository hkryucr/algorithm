/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxProduct = (nums) => {
    let res = -Number.MAX_VALUE,
        max = 1,
        min = 1;

    for (let i = 0; i < nums.length; i++){
        [max, min] = [
            Math.max(nums[i], nums[i] * min, nums[i] * max),
            Math.min(nums[i], nums[i] * min, nums[i] * max)
        ];
        res = Math.max(max, res);
    }
    return res;
};
