/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // at each location of (i, j)
    if(grid.length == 0){
        return 0
    }

    const row = grid.length,
          col = grid[0].length;
    let counter = 0;
    
    // for loop to go through all elements in the array
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === "1"){
                counter++;
                helper(i, j);
            }
        }
    }
    
    // helper function -> change the elements into 0 if they are adjacent.
    function helper(i, j){
        if(i < 0 || i >= row || j < 0 || j >= col) return;
        if(grid[i][j] === "0"){
            return
        } else {
            grid[i][j] = "0"
        }        
        helper(i+1, j)
        helper(i-1, j)
        helper(i, j+1)
        helper(i, j-1)
    }
    
    return counter;
};
