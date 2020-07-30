'''
200. Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

'''

# class Solution(object):
#     def numIslands(self, grid):
#         num_of_islands = 0
#         dirs = [(0, 1),(0,-1),(1,0),(-1,0)]
#         for i, row in enumerate(grid):
#             for j, col in enumerate(row):
#                 if grid[i][j] == "1":
#                     self.DFS(i, j, grid, dirs)
#                     num_of_islands += 1
                    
#         return num_of_islands
                
#     def DFS(self, x, y, grid, dirs):
#         if grid[x][y] == "0":
#             return
#         grid[x][y] = "0"
        
#         for (dir_x, dir_y) in dirs:
#             new_x, new_y = dir_x + x, dir_y + y
#             if 0 <= new_x < len(grid) and 0 <= new_y < len(grid[0]):
#                 if grid[new_x][new_y] != "0":
#                     self.DFS(new_x, new_y, grid, dirs)
            
from collections import deque 

class Solution(object):
    def numIslands(self, grid):
        num_of_islands = 0
        dirs = [(0, 1),(0,-1),(1,0),(-1,0)]
        for i, row in enumerate(grid):
            for j, col in enumerate(row):
                if grid[i][j] == "1":
                    self.BFS(i, j, grid, dirs)
                    num_of_islands += 1
                    
        return num_of_islands
                  
    def BFS(self, x, y, grid, dirs):
        queue = deque() 
        queue.append((x,y))
        while len(queue) > 0:
            (cur_x, cur_y) = queue.popleft()
            if grid[cur_x][cur_y] == "0":
                continue
            grid[cur_x][cur_y] = "0"
            for (dir_x, dir_y) in dirs:
                new_x, new_y = cur_x+dir_x, cur_y + dir_y
                if 0 <= new_x < len(grid) and 0 <= new_y < len(grid[0]):
                    queue.append((new_x, new_y))
