/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    
    if(nums.reduce((a,b)=> a+b, 0) < s){ return 0}
    // create two variables
    let subArr = [],
        sum = 0;
        resLen = nums.length;
    
    // for loop
    for (let i = 0; i < nums.length; i++){
        subArr.push(nums[i]);
        sum += nums[i];        
        
        if(sum >= s){
            let sum2 = sum;
            while(sum2 >= s){
                if (sum2 - subArr[0] < s){
                    sum2 -= subArr[0];
                } else {
                    let el = subArr.shift();
                    sum -= el;
                    sum2 -= el;
                }
            }
            resLen = Math.min(resLen, subArr.length);
        }
    }
    
    return resLen;       
};
