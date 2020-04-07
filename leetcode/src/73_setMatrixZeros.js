/*
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

const setZeroes = (matrix) => {

  // mark if the first row and column has 0;
  let firstRow = false,
      firstCol = false;

  for (let row = 0; row < matrix.length; row ++){
    if (matrix[row][0] == 0){
      firstCol = true;
    }    
  }

  if (matrix[0].includes(0)){
    firstRow = true;
  }    

  // go through values in the array, if find 0 => just mark 
  for (let row=0; row < matrix.length; row++){
    for (let col=0; col<matrix[row].length; col++){
      if(matrix[row][col] == 0){
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // go through values, if the value is zero -> make i row or j column 0;
  for (let row=1; row < matrix.length; row++){
    for (let col=1; col<matrix[0].length; col++){
      if (matrix[row][0] == 0 || matrix[0][col] == 0){
        matrix[row][col] = 0;
      }    
    }
  }

  if (firstRow){
    for (let col=0; col<matrix[0].length; col++){  
      matrix[0][col] = 0;
    }
  }    

  if (firstCol){
    for (let row=0; row < matrix.length; row ++){
        matrix[row][0] = 0;
    }    
  }

  return matrix
}
