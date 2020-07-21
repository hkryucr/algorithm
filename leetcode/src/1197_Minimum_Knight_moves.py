from collections import deque

# class Solution(object):
class Solution(object):
    def minKnightMoves(self, x, y):
        dirs = [[1,2],[-1,2], [1, -2], [1,2], [2,1], [-2,1], [2,-1], [2,1]]
        if x==1 and y==1:
            return 2
        queue = deque() 
        queue.append((0,0,0))
        visited = set()
        visited.add((0, 0))

        while len(queue) > 0:
            popped = queue.popleft()
            curX, curY, curCount = popped[0], popped[1], popped[2]
            if curX == abs(x) and curY == abs(y):
                return curCount
            for dirX, dirY in dirs:
                newX = curX + dirX
                newY = curY + dirY
                if(newX < 0 or newY < 0) or ((newX, newY) in visited) :
                    continue;
                visited.add((newX, newY))
                queue.append((newX, newY, curCount+1))
        return 0
