/*
63. Unique Paths II
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let dp = Array.from({length: obstacleGrid.length}, ()=>new Array(obstacleGrid[0].length).fill(0));
    
    for(let i = 0; i < obstacleGrid.length; i++){
        for(let j = 0; j < obstacleGrid[0].length; j++){
            if(obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
                continue;
            } 
            
            if(i === 0 && j === 0){
                dp[i][j] = 1;
            } else if (i === 0){
                dp[i][j] = dp[i][j-1];
            } else if (j === 0){
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];                
            }
        }
    }
    
    return dp[dp.length-1][dp[0].length-1]
};