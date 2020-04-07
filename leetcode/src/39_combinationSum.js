/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  //Create a result array;
  let result = [];
  
  function findElements(n, k){
    //if the sum of array n equal to k, push it to result.
    if(n.reduce(function(a,b){return a+b},0) == k){
      result.push(n);
    }
    if (n.reduce(function(a,b){return a+b},0) > k){
      return
    }

    // loop through all elements when el is greater than the previous value added to the array
    candidates.forEach((el)=>{
      if ((el >= n[n.length-1]) || (n.length ===0)){
        findElements(n.concat(el), k)
      }
    })
  }
  findElements([], target)

  return result
};
