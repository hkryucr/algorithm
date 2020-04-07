/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const combine = (n, k) => {
  // Create a result array
  let result = [];
  // Function for recursion => both for loop and recursive function, pass through all possible combination;
  function dfs(current, start) {
    // If current array is k elements, push it into the result.
    if(current.length == k) {
        result.push(current);
        return;
    }
    // starts from 1, until n; pass a new array that is added 'i' number by using concat;
    for(let i = start; i <= n; i++) {
        dfs(current.concat(i), i + 1);
    }
  }
  // functino starts from [], 1;
  dfs([], 1);
  return result;
};
