/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // edge case
    if(nums.length == 0) return [];

    let var1 = null,
        var2 = null,
        var1counter = 0,
        var2counter = 0;
    
    for (let i = 0; i < nums.length; i++){
        if(var1 == nums[i]){
            var1counter++;
        } else if(var2 == nums[i]){
            var2counter++;
        } else if(var1 == null){
            var1 = nums[i];
            var1counter ++;
        } else if (var2 == null){
            var2 = nums[i];
            var2counter++;
        } else if(var1counter == 0){
            var1 = nums[i];
            var1counter++;
        } else if(var2counter == 0){
            var2 = nums[i];
            var2counter++;
        } else {
            var1counter--;
            var2counter--;
        }
    }

    let resArr = []
    var1counter = 0;
    var2counter = 0;
    for (let i=0; i<nums.length ;i++){
        if(nums[i] == var1){
            var1counter++;
        } else if(nums[i] == var2){
            var2counter++;
        }
    }
    if(var1counter > (nums.length/3)){
        resArr.push(var1)
    }
    if(var2counter > (nums.length / 3)){
        resArr.push(var2)
    }
    return resArr;
}
