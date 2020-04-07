/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    const map = {};

    for (let i = 0; i < nums.length; i++){
        const gap = target - nums[i];

        if(gap in map){
            return [map[gap], i];
        }
        map[nums[i]] = i;
    }

    return null;
};

/*
// Second - better space, less spped performance
const twoSum = (nums, target) => {
    if (nums.length < 2) return null;
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};
*/