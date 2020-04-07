/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

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

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    // crate variables
    const row = grid.length,
          col = grid[0].length;
    let maxArea = 0,
        curArea = 0
    
    // for loop 
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(grid[i][j] == 1){
                curArea = 0;
                maxArea = Math.max(findMaxArea(i, j), maxArea)
            }            
        }
    }
    
    // findMaxArea
    function findMaxArea(i, j){
        if(i < 0 || i >= row || j < 0 || j >= col){
            return 
        }
        
        if(grid[i][j] == 0){
            return 
        } else {
            curArea++;
            grid[i][j] = 0
        }
        
        findMaxArea(i+1, j)
        findMaxArea(i-1, j)
        findMaxArea(i, j+1)
        findMaxArea(i, j-1)
        
        return curArea
    }
    return maxArea;
};