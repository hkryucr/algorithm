// 1102. Path With Maximum Minimum Value

// Given a matrix of integers A with R rows and C columns, find the maximum score of a path starting at [0,0] and ending at [R-1,C-1].

// The score of a path is the minimum value in that path.  For example, the value of the path 8 →  4 →  5 →  9 is 4.

// A path moves some number of times from one visited cell to any neighbouring unvisited cell in one of the 4 cardinal directions (north, east, west, south).


// Example 1:

// Input: [[5,4,5],[1,2,6],[7,4,6]]
// Output: 4
// Explanation: 
// The path with the maximum score is highlighted in yellow. 
// Example 2:

// Input: [[2,2,1,2,2,2],[1,2,2,2,1,2]]
// Output: 2
// Example 3:

// Input: [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
// Output: 3

// [  -> -> -> -> ->
//   [3, 4, 6, 3, 4],|
//   [0, 2, 1, 1, 7],|
//   <-  <-
//  |[8, 8, 3, 2, 7],|
//            |  
//  |[3, 2, 4, 9, 8],|
//          <- <- <- 
//  |[4, 1, 2, 0, 0],
//  |[4, 6, 5, 4, 3],
// ]; -> -> > -> ->

// follow always biggest number among neighbors but return the smallest value at the end along the path.
// [
//   [5, 4, 5],
//   [5, 2, 6],
//   [7, 3, 6],
// ];

// greedy approach -> DFS find the smallest values along the path -> compare that with other DFS call

var maximumMinimumPath = function(A) {
    let max = -Infinity;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    function DFS(x, y, curMax, visited) {
        if(visited[x][y]) return;
        visited[x][y] = true;

        if(A[x][y] !== -Infinity && A[x][y] < max) return;
        if(x === A.length-1 && y ===A[0].length-1) {
            max = Math.max(curMax, max);
            return;
        }
        curMax = Math.min(A[x][y], curMax);
        for(let i = 0; i < dirs.length; i++){
            const [dirX, dirY] = dirs[i];
            const [curX, curY] = [dirX + x, dirY + y];
            if(curX < 0 || curY < 0 || curX >= A.length || curY >= A[0].length) continue;
            DFS(curX, curY, curMax, visited);
        }
    }

    DFS(0, 0, A[0][0], Array.from({length: A.length}, ()=>[]));
    return max;
};


