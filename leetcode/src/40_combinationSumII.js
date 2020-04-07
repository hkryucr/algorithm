/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum2 = (candidates, target) => {
  let result = [];
  candidates.sort(function(a, b){return a-b})
  function passEle (start, arr){
    if (arr.reduce(function(a,b){return a+b},0) == target){
      let include = 0;
      result.forEach((el) => {
        if (el.toString() == arr.toString()){include ++}
      });
      if (include == 0){result.push(arr)};
    }
    if (arr.reduce(function(a,b){return a+b},0) > target){
      result;
    }
    for (let i = start; i<candidates.length;i++){
      passEle(i+1,arr.concat(candidates[i]))
    }
  }
  passEle(0, []);
  return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
