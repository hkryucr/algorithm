// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

var _ = require('underscore');

/*
994. orange

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  
If this is impossible, return -1 instead.

Example 1:
Input: [[2,1,1],
        [1,1,0],
        [0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, 
because rotting only happens 4-directionally.

Example 3:
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

Note:
1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function (grid) {
    let count = 0;
    let rotted = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                count++;
            }
            if (grid[i][j] === 2) {
                rotted.push([i, j]);
            }
        }
    }

    let level = 0;
    while (count > 0) {
        let newRotted = [];
        for (let i = 0; i < rotted.length; i++) {
            let [x, y] = rotted[i];
            let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (let j = 0; j < dir.length; j++) {
                const [curX, curY] = [dir[j][0] + x, dir[j][1] + y];
                if (curX < 0 || curY < 0 || curX >= grid.length || curY >= grid[0].length) continue;
                console.log(grid[curX][curY])
                if (grid[curX][curY] === 1) {
                    count--;
                    grid[curX][curY] = 2;
                    newRotted.push([curX, curY]);
                }
            }
        }
        rotted = newRotted;

        level++;
    }
    return level;
}
let arr = [[2, 1, 1], [0, 1, 1], [1, 0, 1]];
console.log(orangesRotting(arr));


/*
1) count of 1 =
2) rotted =[ [1,2], [2,3]] (rotted organges) / updated every level
3) level ++; return at the end

- implementation
rotted = [[]] // holds all rotted one
while(count !== 0){
  for() -> iterate through rotted
          find neighbors
          let newArr = [];


          rotted = newArr;
}

*/












