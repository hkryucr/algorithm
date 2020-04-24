/*
74. Search a 2D Matrix
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

// var searchMatrix = function (matrix, target) {
//   if (matrix.length === 0) return false;
//   if (matrix[0].length === 0) return false;

//   for(let i = 0; i < matrix.length; i++){
//     let curRow = matrix[i];
//     if(curRow[0] <= target && curRow[curRow.length-1] >= target){
//       return bSearch(curRow, target);
//     }
//   }
//   return false;
// };

// function bSearch(arr, target){
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right){
//     let mid = Math.floor(( left + right )/2);
//     if(arr[mid] === target){
//       return true;
//     } else if(arr[mid] > target){ 
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return false;
// }

// function searchMatrix(matrix, target) {
//   if (!matrix.length || !matrix[0].length) return false;

//   let row = 0;
//   let col = matrix[0].length - 1;

//   while (col >= 0 && row <= matrix.length - 1) {
//     if (matrix[row][col] === target) return true;
//     else if (matrix[row][col] > target) col--;
//     else if (matrix[row][col] < target) row++;
//   }

//   return false;
// }

const searchMatrix = (arr, target) => {
    if (arr.length === 0) return false;
    if (arr[0].length === 0) return false;

    let left = 0;
    let right = (arr.length * arr[0].length) - 1;
    let colNum = arr[0].length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = arr[Math.floor(mid / colNum)][mid % colNum];
        if (midValue === target) {
            return true;
        } else if (midValue > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}