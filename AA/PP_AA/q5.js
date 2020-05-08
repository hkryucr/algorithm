/*
Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty 
subsets whose sums are all equal.

Example 1:

Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

Integers - (negative or positive)
K - Integer

1) if nums is empty or less than K => return false;
2) order doesn't matter

nums = [4, 3, 2, 3, 5, 2, 1], k = 4 => true
[1, 2, 3, 4, 5], k = 4 => false
[100, -100, 0, 0, 0], k = 4 => true
[3,3,3,3,4,4,4,4,5,5,5,5] k = 3 

using backtracking

hash = 

[3,3,3,3 ,4,4,4,4,5,5,5,5]

DP = 3 
dp-> with smaller side,                             
*/                                                   

var canPartitionKSubsets = function (nums, k) {
  let sum = nums.reduce((a, b) => a + b);
  if (sum % k !== 0) return false;
  let used = new Array(nums.length).fill(false);
  // let len = nums.length;
  let oneSide = sum / k;
  let checkedIdx = 0
  function dfs(start, side) {
    if (checkedIdx === nums.length) return true;
    if (side === 0) return dfs(0, oneSide);

    for (let j = start; j < nums.length; j++) {
      if (nums[j] > oneSide) return false;
      if (used[j]) continue;
      if (nums[j] > side) continue;
      used[j] = true;
      checkedIdx++;
      if (dfs(j + 1, side - nums[j])) return true;
      used[j] = false;
      checkedIdx--;
    }
    return false;
  }

  return dfs(0, oneSide);
}

const nums1 = [4, 3, 2, 3, 5, 2, 1]
const k1 = 4

console.log(canPartition(nums1, k1));