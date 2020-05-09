/*
378. Kth Smallest Element in a Sorted Matrix

Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.


matrix = [
   [ 1,  5,  14],
   [10, 11, 15],
   [12, 13, 16]
],
k = 8,

Note:
You may assume k is always valid, 1 ≤ k ≤ n2.
*/
matrix = [
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
 ];
 // 1 5 9 10 11
 k = 8

var kthSmallest = function(matrix, k) {
    var result = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            result.push(matrix[i][j])
        }
    }
    result.sort((a, b) => a - b)
    return result[k - 1]
}

// LogMN * longMN:
// MN space
