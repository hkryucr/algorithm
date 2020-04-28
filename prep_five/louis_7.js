/*
695. Max Area of Island

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) 
connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.
*/

var maxAreaOfIsland = function (grid) {
    let currentLabel = 2;
    function exploreIsland(i, j, label) {
        grid[i][j] = label
        let totalLand = 1
        // look up
        if (i - 1 >= 0 && grid[i - 1][j] === 1) {
            totalLand += exploreIsland(i - 1, j, label)
        }
        // look right
        if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
            totalLand += exploreIsland(i, j + 1, label)
        }
        if (i + 1 < grid.length && grid[i + 1][j] === 1) {
            totalLand += exploreIsland(i + 1, j, label)

        }
        if (j - 1 >= 0 && grid[i][j - 1] === 1) {
            totalLand += exploreIsland(i, j - 1, label)
        }
        return totalLand
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let current = grid[row][col];
            if (current === 1) {
                let islandSize = exploreIsland(i, j, currentLabel)
                currentLabel++
                if (islandSize > maxIslandSize) {
                    maxIslandSize = islandSize
                }
            }
        }
    }
    return maxIslandSize
};