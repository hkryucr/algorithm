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

function canPartition(nums, k){

    let sum = nums.reduce((a,b) => a+b);
    if(sum % k !== 0) return false; 
    
    let side = sum / k
    let arr = new Array(k).fill(side);

    function dfs(arr, targetArr, k, idx) {
      // Goal is to make every el === 0;
      if (k === 1) return true;
      if (arr.length === idx) {
        if (targetArr.every((el) => el === 0)) return true;
        return false;
      }
      let el = arr[idx];
      for (let j = 0; j < targetArr.length; j++) {
        if (targetArr[j] >= el) {
          targetArr[j] -= el;
          if (targetArr[j] === 0) k--;
          if (dfs(arr, targetArr, k, idx+1)) {
            return true;
          }
          k++;
          targetArr[j] += el;
        }
      }
      return false;
    }

    return dfs(nums, arr, k, 0);
}

const nums1 = [4, 3, 2, 3, 5, 2, 1]
const k1 = 4

console.log(canPartition(nums1, k1));