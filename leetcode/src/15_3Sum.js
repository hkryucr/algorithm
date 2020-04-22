/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

var threeSum = (arr) => {
    let outputArray = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > 0) break;
        if (i - 1 >= 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = arr.length - 1
        while (left < right) {
            if (i < left - 1 && arr[left - 1] === arr[left]) {
                left++;
                continue;
            }

            if (right + 1 < arr.length && arr[right + 1] === arr[right]) {
                right--;
                continue;
            }
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                outputArray.push([arr[i], arr[left], arr[right]])
                left++
            } else if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            }
        }
    }

    return outputArray;
}