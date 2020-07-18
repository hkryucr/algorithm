/*
673. Number of Longest Increasing Subsequence
Medium

1421

84

Add to List

Share
Given an unsorted array of integers, find the number of longest increasing subsequence.

Example 1:
Input: [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequence are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:
Input: [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.
Note: Length of the given array will be not exceed 2000 and the answer is guaranteed to be fit in 32-bit signed int.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    if (nums.length === 0 || nums.length === 1) return nums.length;

    let dp = Array.from({ length: nums.length }, () => []);
    dp[0] = [1, 1]

    let maxVal = 0;
    let maxCount = 0;

    for (let i = 1; i < nums.length; i++) {
        let prevMax = 0;
        let prevCount = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                let [num, count] = dp[j]
                if (num === prevMax) {
                    prevCount += count;
                } else if (num > prevMax) {
                    prevMax = num;
                    prevCount = count;
                }
            }
        }
        dp[i] = [prevMax + 1, prevCount];
        if (maxVal < prevMax + 1) {
            maxVal = prevMax + 1;
            maxCount = prevCount;
        }
    }
    let allCounts = 0;
    dp.forEach(el => {
        if (el[0] === maxVal) allCounts += el[1];
    })
    return allCounts;
};