/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
  // create result array
  let result = [];
  
  while(matrix.length > 0){
    // for each iteration, create an array that holds values 
    let outcome = [];

    // if matrix has only one row, just push them into the result arr;
    if (matrix.length == 1){
      matrix[0].forEach(el => {
        if(el){
          outcome.push(el)  
        }      
      })      
      result.push.apply(result, outcome)
      return result
    }

    // matrix length
    let matrixlength = matrix.length

    // push values from the last row, middle rows, to the first row.
    for(let i = matrixlength-1; i>=0; i--){
      
      // the last row
      if(i == matrixlength -1){
        let temparr = matrix.pop();
  
        for (let j=temparr.length-1; j>=0; j--){
          outcome.push(temparr[j])          
        }
      }
      
      // middle rows=> values from the first and last columns

      if((i < matrixlength -1) && (i>0)){
        if(matrix[i].length != 0){
        outcome.unshift(matrix[i].pop())
        }
        if(matrix[i].length != 0){
        outcome.push(matrix[i].shift())
        }
      }
      
      // the first row
      if(i == 0){
        let temparr = matrix.shift();    
        for (let j=temparr.length-1; j >= 0; j--){
          outcome.unshift(temparr[j]);          
        }
      }
    }
    result.push.apply(result, outcome)
  }  
  return result;
};
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]))