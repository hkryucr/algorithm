'''
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

'''

class Solution(object):
    def searchMatrix(self, matrix, target):
        if len(matrix) == 0 or len(matrix[0]) == 0:
            return False
        
        left = 0
        row = len(matrix)
        col = len(matrix[0])
        right = row * col - 1
        
        while left <= right:
            mid = left + ((right - left)/2)
            cur_row = mid / col 
            cur_col = mid % col

            if(matrix[cur_row][cur_col] == target):
                return True
            elif (matrix[cur_row][cur_col] < target):
                left = mid + 1
            else:
                right = mid - 1
        return False