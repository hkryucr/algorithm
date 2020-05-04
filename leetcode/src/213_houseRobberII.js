/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
Example 2:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     if(nums.length === 0) return 0;
//     let dp = new Array(nums.length);
//     let dp2 = new Array(nums.length);
//     // rob the current house or not

//     dp[0] = nums[0];
//     dp2[0] = 0;

//     let max = dp[0];
//     let max2 = 0;

//     for (let i = 1; i < nums.length-1; i++){
//         let rubCur = (i-2 >= 0) ? nums[i] + dp[i-2] : nums[i];
//         let noRubCur = dp[i-1];
//         let curMax = Math.max(rubCur, noRubCur);
//         dp[i] = curMax;

//         max = Math.max(curMax, max);        
//     }

//     for (let i = 1; i < nums.length; i++){
//         let rubCur = (i-2 >= 0) ? nums[i] + dp2[i-2] : nums[i];
//         let noRubCur = dp2[i-1];
//         let curMax = Math.max(rubCur, noRubCur);
//         dp2[i] = curMax;

//         max2 = Math.max(curMax, max2);        
//     }

//     return Math.max(max, max2);
// };


var rob = function (nums) {
    if (nums.length === 0) return 0;

    let includeMax = nums[0];
    let excludeMax = 0;
    let includePrev1 = nums[0];
    let includePrev2 = 0;
    let excludePrev1 = 0;
    let excludePrev2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (i !== 0 && i !== nums.length - 1) {
            let tmp = includePrev1;
            includePrev1 = Math.max(includePrev2 + num, includePrev1);
            includePrev2 = tmp;
        }

        if (i !== 0) {
            let tmp2 = excludePrev1;
            excludePrev1 = Math.max(excludePrev2 + num, excludePrev1);
            excludePrev2 = tmp2;
        }
    }


    return Math.max(includePrev1, excludePrev1);
};