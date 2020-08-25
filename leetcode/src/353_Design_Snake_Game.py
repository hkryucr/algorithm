'''
353. Design Snake Game

Design a Snake game that is played on a device with screen size = width x height. Play the game online if you are not familiar with the game.

The snake is initially positioned at the top left corner (0,0) with length = 1 unit.

You are given a list of food's positions in row-column order. When a snake eats the food, its length and the game's score both increase by 1.

Each food appears one by one on the screen. For example, the second food will not appear until the first food was eaten by the snake.

When a food does appear on the screen, it is guaranteed that it will not appear on a block occupied by the snake.

Example:

Given width = 3, height = 2, and food = [[1,2],[0,1]].

Snake snake = new Snake(width, height, food);

Initially the snake appears at position (0,0) and the food at (1,2).

|S| | |
| | |F|

snake.move("R"); -> Returns 0

| |S| |
| | |F|

snake.move("D"); -> Returns 0

| | | |
| |S|F|

snake.move("R"); -> Returns 1 (Snake eats the first food and right after that, the second food appears at (0,1) )

| |F| |
| |S|S|

snake.move("U"); -> Returns 1

| |F|S|
| | |S|

snake.move("L"); -> Returns 2 (Snake eats the second food)

| |S|S|
| | |S|

snake.move("U"); -> Returns -1 (Game over because snake collides with border)
'''

from collections import deque

class SnakeGame:
    def __init__(self, width: int, height: int, food: List[List[int]]):
        """
        Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
        """
        self.queue = deque([(0,0)])
        self.food = deque(food)
        self.num_food = 0
        self.occupied = set([(0,0)])
        self.width = width
        self.height = height
        self.directions = {"U": (-1,0), "D": (1,0), "L": (0, -1), "R": (0,1)}

    def move(self, direction: str) -> int:
        """
        Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body.
        """
        dir_x, dir_y = self.directions[direction]
        cur_x, cur_y = self.queue[-1]
        new_x, new_y = dir_x + cur_x, dir_y + cur_y

        if not (0 <= new_x < self.height and 0 <= new_y < self.width):
            return -1
        if (new_x, new_y) in self.occupied and not (new_x, new_y) == self.queue[0]:
            return -1
        
        if len(self.food) > 0 and new_x == self.food[0][0] and new_y == self.food[0][1]:
            self.food.popleft()
        else:
            self.occupied.remove(self.queue.popleft())        
            
        self.queue.append((new_x, new_y))
        self.occupied.add((new_x, new_y))
        
        return len(self.queue) - 1


# Your SnakeGame object will be instantiated and called as such:
# obj = SnakeGame(width, height, food)
# param_1 = obj.move(direction)