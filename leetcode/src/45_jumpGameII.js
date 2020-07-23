// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
// Jump 1 step from index 0 to 1, then 3 steps to the last index.

// [2,3,0,1,1,4,]

// [0,1,1,2,2]

// 1) create dp table
//     - each position means the number of jums to get that index from 0 index
//     - dp[0] = 0;
//     - for 0 to 0 + Element / each position update its minimum jump
//         - dp[i] = Math.min(prevJump + 1, dp[i]);
//         -> until the end

// 2) return dp[dp.length-1];

const jump = function (numbers) {
  let dp = new Array(numbers.length).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < numbers.length; i++) {
    let end = i + numbers[i];
    let start = i + 1;
    while (start < numbers.length && start <= end) {
      dp[start] = Math.min(dp[start], dp[i] + 1);
      start++;
    }
  }
  return dp[dp.length - 1] === Infinity ? 0 : dp[dp.length - 1];
};

const jump = function (numbers) {
  let jump = 0;
  let curEnd = 0;
  let curFarthest = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    curFarthest = Math.min(curFarthest, numbers[i] + i);

    if (curEnd === i) {
      jump++;
      curEnd = curFarthest;
    }
  }
  return jump;
};

console.log(jump([2, 3, 0, 1, 1, 4]));
