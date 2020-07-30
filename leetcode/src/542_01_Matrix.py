'''
542. 01 Matrix

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1. 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.

'''

from collections import deque

class Solution(object):
    def updateMatrix(self, matrix):
        new_matrix = [[0] * len(matrix[0]) for _ in range(len(matrix))]
        queue = deque()
        for i, row in enumerate(matrix):
            for j, el in enumerate(row):                
                if matrix[i][j] == 0:
                    queue.append((0, i, j))
                    
        dirs = [(1,0), (-1,0), (0,1), (0,-1)]
   
        while(len(queue) > 0):
            (depth, x, y) = queue.popleft()
            for (dir_x, dir_y) in dirs:
                new_x, new_y = dir_x + x, dir_y + y
                if not (0 <= new_x < len(matrix) and 0 <= new_y < len(matrix[0])):
                    continue
                if matrix[new_x][new_y] == 0:
                    continue
                
                matrix[new_x][new_y] = 0
                new_matrix[new_x][new_y] = depth+1
                
                queue.append((depth+1, new_x, new_y))
                    
        return new_matrix
            


