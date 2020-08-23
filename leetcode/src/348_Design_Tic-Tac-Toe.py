'''
348. Design Tic-Tac-Toe
Design a Tic-tac-toe game that is played between two players on a n x n grid.

You may assume the following rules:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves is allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
Example:
Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
Follow up:
Could you do better than O(n2) per move() operation?
'''
'''
class TicTacToe:
    def __init__(self, n: int):
        self.grid = [[""]*n for _ in range(n)]
        self.gameover = False
        self.size = n

    def move(self, row: int, col: int, player: int) -> int:
        if self.gameover: return self.gameover
        if self.grid[row][col] != "": return False
        cur_player = "X" if player == 1 else "O"
        self.grid[row][col] = cur_player
        if self.check_winner(row, col, cur_player):
            return player
        return 0       
        
    def check_winner(self, row, col, player):
        # row
        row_win = True
        col_win = True
        dia1_win = True
        dia2_win = True
        
        for i in range(self.size):
            if self.grid[i][col] != player: row_win = False
            if self.grid[row][i] != player: col_win = False
            if self.grid[i][i] != player: dia1_win = False
            if self.grid[self.size-i-1][i] != player: dia2_win = False
        
        return row_win or col_win or dia1_win or dia2_win     
'''

# Your TicTacToe object will be instantiated and called as such:
# obj = TicTacToe(n)
# param_1 = obj.move(row,col,player)
class TicTacToe:
    def __init__(self, n):
        self.row, self.col, self.diag, self.anti_diag, self.n = [0] * n, [0] * n, 0, 0, n
        
    def move(self, row, col, player):
        offset = player * 2 - 3
        self.row[row] += offset
        self.col[col] += offset
        if row == col:
            self.diag += offset
        if row + col == self.n - 1:
            self.anti_diag += offset
        if self.n in [self.row[row], self.col[col], self.diag, self.anti_diag]:
            return 2
        if -self.n in [self.row[row], self.col[col], self.diag, self.anti_diag]:
            return 1
        return 0