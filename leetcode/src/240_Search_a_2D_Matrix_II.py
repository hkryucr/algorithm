'''
240. Search a 2D Matrix II
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
'''

class Solution(object):
    def searchMatrix(self, matrix, target):
        if len(matrix) == 0 or len(matrix[0]) ==0:
            return False
        
        row = len(matrix)
        col = len(matrix[0])
        
        row_idx = 0
        col_idx = col - 1
        
        while row_idx < row and col_idx >= 0:
            if matrix[row_idx][col_idx] == target:
                return True
            elif matrix[row_idx][col_idx] < target:
                row_idx+=1
            else: 
                col_idx-=1
                
        return False
        