/*
34. Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let firstIdx = findFirstIdx(nums, target);
    let lastIdx = findLastIdx(nums, target);

    return [firstIdx, lastIdx];
};


function findFirstIdx(nums, target) {
    let left = 0, right = nums.length - 1;
    let minIdx = Infinity;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            minIdx = Math.min(minIdx, mid);
            right = mid - 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return minIdx === Infinity ? -1 : minIdx;
}

function findLastIdx(nums, target) {
    let left = 0, right = nums.length - 1;
    let maxIdx = -Infinity;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            maxIdx = Math.max(maxIdx, mid);
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return maxIdx === -Infinity ? -1 : maxIdx;
}

