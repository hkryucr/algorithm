/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const uniquePaths = (m, n) => {
  // Create a memo 
  let memo =[[]];

  if(m == 0 || n == 0) return null;
  if(m == 1 && n == 1) return 1;

  // Iteration + Memoization
  for (let i = 0; i < m; i++){
    memo.push([]);
    for (let j = 0; j < n; j++){
      // check the base
      if(i == 0 || j == 0){
        memo[i][j] = 1;
      } else {
        // path + path
        memo[i][j] = memo[i-1][j] + memo[i][j-1];
      }
    }
  }

  return memo[m-1][n-1]; 
};
