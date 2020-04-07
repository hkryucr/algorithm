/*
216. Combination Sum III

Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]

*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

const combinationSum3 = (k, n) => {
  // Create a result array
  let result = [];
  // Create resursive function
  function dfs (start, arr){
    // should have k numbers array.
    if(arr.length == k){
      // the sum of the elements should be equal to n
      if (arr.reduce(function(a,b){return a+b}, 0) == n){
        result.push(arr);
      }      
    };
    if(arr.length > k){
      return
    };
    // the value should between 1 to 9;
    for (let i = start; i <= 9; i++){
      dfs(i+1, arr.concat(i))
    }
  }
  dfs (1, [])
  return result;
};
