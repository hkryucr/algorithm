'''
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
'''

class Solution(object):
    def uniquePathsWithObstacles(self, obstacleGrid):
        dp = [0] * len(obstacleGrid[0])
        
        for i, row in enumerate(obstacleGrid):
            new_dp = [0] * len(row)
            for j, ele in enumerate(row):
                if ele == 1:
                    new_dp[j] = 0
                    continue                
                if(i == 0 and j == 0):
                    new_dp[j] = 1
                elif j == 0:
                    new_dp[j] = dp[j]
                else:
                    new_dp[j] = new_dp[j-1] + dp[j]
            dp = new_dp
                
        return dp[-1]
                
        