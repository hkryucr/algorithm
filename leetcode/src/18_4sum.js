/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let arr = [];
    nums.sort((a, b) => a - b);
    if (nums.length < 4) return arr;

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                let curSum = nums[i] + nums[j] + nums[left] + nums[right];
                let tempLeft = nums[left];
                let tempRight = nums[right];
                if (curSum === target) {
                    let candidate = [nums[i], nums[j], nums[left], nums[right]];
                    left++;
                    arr.push(candidate);

                    while (left < right && nums[left] === tempLeft)
                        left++;

                    while (left < right && nums[right] === tempRight)
                        right--;

                } else if (curSum - target < 0) {
                    left++;
                } else {
                    right--;
                }
            }
            while (j + 1 < nums.length && nums[j + 1] === nums[j]) ++j;
        }
        while (i + 1 < nums.length && nums[i + 1] === nums[i]) ++i;
    }
    return arr;
};

var fourSum = function (nums, target) {
    let arr = [];
    nums.sort((a, b) => a - b);
    if (nums.length < 4) return arr;
    let set = new Set;

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                let curSum = nums[i] + nums[j] + nums[left] + nums[right];
                if (curSum === target) {
                    let candidate = [nums[i], nums[j], nums[left], nums[right]];
                    left++;
                    if (set.has(candidate.toString())) continue;
                    set.add(candidate.toString());
                    arr.push(candidate);

                } else if (curSum - target < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return arr;
};
