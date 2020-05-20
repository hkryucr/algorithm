/*
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
*/


/*
1) create 2d array => 3x3
2) move -> find the spot and fill in the player number
3) every time the user moves, need to check whether there's any winner
  - check row, col, diagnal -> if all has the same value -> return the player ;
  - otherwise return 0;

player 1 -> i, j -> +1;
player 2 -> i, j => -1;
checking arr
rowCheck = [];
colCheck = [];
diagnalCheck = [];
row 1 -> 0
row 2 -> 
row 3 -> 
col 1 -> 1
col 2 -> -1
col 3 ->
diag1 => 
diag2 => 

8 times 
*/
/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.board = Array.from({length: n}, ()=> new Array(n));
    this.rowCheck = new Array(3).fill(0);
    this.colCheck = new Array(3).fill(0);
    this.digCheck = new Array(2).fill(0);
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {

  if(this.board[row][col] !== undefined) return -1;
  this.board[row][col] = player;
  let curPlayerNum = (player === 2) ? -1 : player;
  this.rowCheck[row] += curPlayerNum;
  this.colCheck[col] += curPlayerNum;
  if(row === col) this.digCheck[0] += curPlayerNum;
  if(2 - row === col) this.digCheck[1] += curPlayerNum;
  
  let winner = 0;
  // this.rowCheck.forEach(el => {
  //   if(el === 3) winner = 1;
  //   if(el === -3) winner = 2;
  // })
  // this.colCheck.forEach((el) => {
  //   if (el === 3) winner = 1;
  //   if (el === -3) winner = 2;
  // });
  if (this.rowCheck[row] === 3) winner = 1;
  if (this.rowCheck[row] === -3) winner = 2
  if (this.colCheck[col] === 3) winner = 1;
  if (this.colCheck[col] === -3) winner = 2;
  this.digCheck.forEach((el) => {
    if (el === 3) winner = 1;
    if (el === -3) winner = 2;
  });
  // console.log(this.board);
  // console.log(this.digCheck, "digCheck");
  return winner;
};
var obj = new TicTacToe(3)
console.log(obj.move(0,0,1)) // 0
console.log(obj.move(0,1,2)) // 0
console.log(obj.move(1,1,1)) // 0
console.log(obj.move(0,2,2)) // 0
console.log(obj.move(2,2,1)) // 1

// console.log(obj.move(0,2,1)) // 0
// console.log(obj.move(0,0,2)) // 0
// console.log(obj.move(1,1,1)) // 0
// console.log(obj.move(0,1,2)) // 0
// console.log(obj.move(2,0,1)) // 1

row=1,col=1,player=1
[1, 2, 2]
[0, 1, 0]
[0, 0, 1]

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
