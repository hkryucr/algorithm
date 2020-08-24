'''
1102. Path With Maximum Minimum Value

Given a matrix of integers A with R rows and C columns, find the maximum score of a path starting at [0,0] and ending at [R-1,C-1].

The score of a path is the minimum value in that path.  For example, the value of the path 8 →  4 →  5 →  9 is 4.

A path moves some number of times from one visited cell to any neighbouring unvisited cell in one of the 4 cardinal directions (north, east, west, south). 

Example 1:

Input: [[5,4,5],[1,2,6],[7,4,6]]
Output: 4
Explanation: 
The path with the maximum score is highlighted in yellow. 

Example 2:

Input: [[2,2,1,2,2,2],[1,2,2,2,1,2]]
Output: 2

Example 3:
Input: [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
Output: 3 

Note:

1 <= R, C <= 100
0 <= A[i][j] <= 10^9

'''

import heapq
from collections import deque

class Solution:
    def maximumMinimumPath(self, A: List[List[int]]) -> int:
        queue = [(-A[0][0],0,0)]
        visited = [[False] * len(A[0]) for _ in A]
        min_val = float("inf")
        
        while len(queue) > 0:
            (dist, x, y) = heapq.heappop(queue)
            min_val = min(-dist, min_val)
            if x == len(A)-1 and y == len(A[0])-1:
                break
                
            for dir_x, dir_y in [(0,1), (0,-1), (-1,0), (1,0)]:
                new_x, new_y = dir_x + x, dir_y + y
                if not (0 <= new_x < len(A) and 0 <= new_y < len(A[0])): continue
                if visited[new_x][new_y]: continue
                visited[new_x][new_y] = True
                
                heapq.heappush(queue, (-A[new_x][new_y], new_x, new_y))
        return min_val
        