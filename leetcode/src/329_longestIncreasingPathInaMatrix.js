/**
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
set
[
  [4,3,2]
  [1,4,1],
  [1,1,2]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

1) create memo 2d
2) iterate through input 2d array
    -> DFS() 
        - base cases of DFS  function is it doesn't have any place to move  || already visited
        => base case return 1;
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let memo = Array.from({ length: matrix.length }, () =>
    new Array(matrix[0].length).fill(0)
  );

  let maximumPath = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      maximumPath = Math.max(maximumPath, DFS(i, j, matrix, memo, dirs));
    }
  }

  return maximumPath;
};

function DFS(x, y, matrix, memo, dirs) {
  if (memo[x][y] != 0) return memo[x][y];
  let nextPath = 0;
  for (const dir of dirs) {
    const [curX, curY] = [dir[0] + x, dir[1] + y];
    if (
      curX < 0 ||
      curY < 0 ||
      curX >= matrix.length ||
      curY >= matrix[0].length
    )
      continue;
    if (matrix[x][y] >= matrix[curX][curY]) continue;
    nextPath = Math.max(nextPath, DFS(curX, curY, matrix, memo, dirs));
  }
  memo[x][y] = nextPath + 1;
  return memo[x][y];
}
