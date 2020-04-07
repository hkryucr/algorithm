/*
In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

If the task is impossible, return -1.

Examples:

input:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8
(The lines below represent this grid:)
1111
0001
1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
(The lines below represent this grid:)
1111
0001
1011
Constraints:

[time limit] 5000ms
[input] array.array.integer grid
1 ≤ arr.length = arr[i].length ≤ 10
[input] integer sr
[input] integer sc
[input] integer tr
[input] integer tc
All sr, sc, tr, tc are valid locations in the grid, grid[sr][sc] = grid[tr][tc] = 1, and (sr, sc) != (tr, tc).
[output] integer

*/

// function shortestCellPath(grid, sr, sc, tr, tc) {
// 	/**
// 	@param grid: integer[][]
// 	@param sr: integer
// 	@param sc: integer
// 	@param tr: integer
// 	@param tc: integer
// 	@return: integer
// 	*/

//   const row = grid.length;
//   const col = grid[0].length;
//   let resArr = [];
  
//   function helper (sr, sc, tr, tc, counter){
//     counter++
//     grid[sr][sc] = 0;
 
//     if(sr === tr && sc === tc){
//       resArr.push(counter);
//     }
    
//     if(sr < row-1){
//       if(grid[sr+1][sc] !== 0){
//         helper(sr+1, sc, tr, tc, counter)      
//       }
//     }
    
//     if(sr > 0){
//       if(grid[sr-1][sc] !== 0){
//         helper(sr-1, sc, tr, tc, counter)
//       }
//     }
    
//     if(sc < col - 1){
//       if(grid[sr][sc+1] !== 0){
//         helper(sr, sc+1, tr, tc, counter)
//       }
//     }
    
//     if(sc > 0){
//       if(grid[sr][sc-1] !== 0){
//         helper(sr, sc-1, tr, tc, counter)  
//       }
//     } 
//   }
  
//   helper(sr, sc, tr, tc, -1);
//   return resArr.length > 0 ? Math.min(resArr) : -1
// }

function shortestCellPath(grid, sr, sc, tr, tc){
    let queue = [];
    queue.push([sr, sc, 0])

    let seen = {};
    seen[[sr, sc]] = 1;

    const row = grid.length,
            col = grid[0].length;

    while (queue.length>0){
        let currentLoc = queue.pop();
        let r = currentLoc[0],
            c = currentLoc[1],
            counter = currentLoc[2];
        if(r == tr && c == tc){
            return counter;
        }
        [[r-1, c], [r+1, c], [r, c-1], [r, c+1]].forEach(el => {
            if ((el[0] >= 0 && el[0] < row) 
            && (el[1] >= 0 && el[1] < col)){
                if((grid[el[0]][el[1]] === 1) && (seen[[el[0], el[1]]] === undefined)){
                    queue.push([el[0], el[1], counter + 1]);
                    seen[[el[0], el[1]]] = 1
                }
            } 
        })
    }

    return -1
}

console.log(shortestCellPath([[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]], 0, 0, 2, 0))
