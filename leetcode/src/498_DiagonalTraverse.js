/*
498. Diagonal Traverse
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.
Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Explanation:
Note:

The total number of elements of the given matrix will not exceed 10,000.
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    let i = 0, j = 0;
    let goUp = true;
    let res = [];
    while (i < matrix.length && j < matrix[0].length) {
        res.push(matrix[i][j]);
        if (goUp) {
            if (j === matrix[0].length - 1) {
                i++;
                goUp = false;
            } else if (i === 0) {
                j++;
                goUp = false;
            } else {
                i--;
                j++;
            }
        } else {
            if (i === matrix.length - 1) {
                j++;
                goUp = true;
            } else if (j === 0) {
                i++;
                goUp = true;
            } else {
                i++;
                j--;
            }
        }
    }
    return res;
};