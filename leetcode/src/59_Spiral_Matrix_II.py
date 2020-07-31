'''
59. Spiral Matrix II

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
'''

class Solution(object):
    def generateMatrix(self, n):
        matrix = [[0] * n for _ in range(n)]
        value = 1
        dirs = [(0,1), (1,0), (0,-1), (-1,0)]
        dir_idx = 0
        x, y = 0, 0
        
        while value <= n*n:
            matrix[x][y] = value
            (dir_x, dir_y) = dirs[dir_idx]
            x, y = x + dir_x, y + dir_y
            value += 1
            
            if not (0 <= x+dir_x < n and 0 <= y+dir_y < n):
                dir_idx += 1
                dir_idx %= 4
            elif matrix[x+dir_x][y+dir_y] != 0:
                dir_idx += 1
                dir_idx %= 4

        return matrix

        
        
        
        