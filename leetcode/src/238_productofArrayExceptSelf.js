/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = (nums) => {
    if(nums.length < 1) return nums;
    if(nums.indexOf(0) !== nums.lastIndexOf(0)){return nums.map(n => 0)}
    let resArr = [],
        productOfArr = nums.reduce((a,b)=> a*b);
        
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i, 1);
            resArr.push(nums.reduce((a,b)=> a*b));
            nums.splice(i, 0, 0);            
        } else {
            resArr.push(productOfArr/nums[i]);
        }
    }
    return resArr;
};
