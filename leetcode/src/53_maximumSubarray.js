/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

const maxSubArray = (nums) => {
    // find the maximum value at each index
    let maxVal = nums[0]

    for (let i = 1; i < nums.length; i++){
        const eachNum = nums[i];
        nums[i] = Math.max(eachNum, eachNum + nums[i-1]);
        maxVal = Math.max(nums[i], maxVal);
    }
    return maxVal;
}
