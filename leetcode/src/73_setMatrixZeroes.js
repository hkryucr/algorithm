/*
73. Set Matrix Zeroes
Medium

2108

299

Add to List

Share
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function(matrix) {
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[0].length; j++){
//             if(matrix[i][j] === 0) makeZero(i, j, matrix);
//         }
//     }
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[0].length; j++){
//             if(matrix[i][j] === "r" || matrix[i][j] === "c") matrix[i][j] = 0;
//         }
//     }
// };

// function makeZero(x, y, matrix){
//     for(let i = 0; i < matrix.length; i++){
//         if(matrix[i][y] === "r") break;
//         matrix[i][y] = (matrix[i][y] === 0) ? 0 : "r";
//     }
//     for(let j = 0; j < matrix[0].length; j++){
//         if(matrix[x][j] === "c") break;
//         matrix[x][j] = (matrix[x][j] === 0) ? 0 : "c";
//     }
// }

var setZeroes = function(matrix) {
    let col0 = 1;
    let rowLen = matrix.length;
    let colLen = matrix[0].length;
    
    for(let i = 0; i < rowLen; i++){
        if(matrix[i][0] === 0) col0 = 0;
        for(let j = 1; j < colLen; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }  
        }
    }
    
    for(let i = rowLen-1; i >= 0; i--){
        for(let j = colLen-1; j >= 1; j--){
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if(col0 === 0) matrix[i][0] = 0;
    }   
}
