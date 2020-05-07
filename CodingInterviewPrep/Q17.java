/*
289. Game of Life

According to the Wikipedia's article: "The Game of Life, also known simply as Life, 
is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). 
Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) 
using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Write a function to compute the next state (after one update) of the board given its current state. 
The next state is created by applying the above rules simultaneously to every cell in the current state, 
where births and deaths occur simultaneously.
Example: -1 -> 1 to 0
         -2 -> 0 to 1
[
  [0,-1,0],
  [0,0,1],
  [-2,1,1],
  [0,0,0]


Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]

Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]

/**
 * 
 * 
 */
// You should do this in-placel

class Solution {
    private int helper(int[][] board, int i , int j){
        int count = 0;
        int[][] dirs = {{1,1},{1,0},{1,-1}, {-1,1}, {-1,0}, {-1,-1}, {0,1}, {0,-1}};
        for(int k = 0; k < dirs.length; k++){
            int m = i + dirs[k][0];
            int n = j +dirs[k][1];
            if(m>=board.length||m<0||n>=board[0].length||n<0) continue;
            if(board[m][n]==1||board[m][n]==-1) count++;
        }
        return count;
    }

    public void gameOfLife(int[][] board) {
        if(board == null) return;
        int m = board.length;
        int n = board[0].length;

        for(int i = 0 ; i < m ;i++){
            for(int j = 0 ; j < n ; j++){
                int count=0;
                count = helper(board, i, j);
                if(board[i][j]==1){
                    if(count <2) board[i][j] = -1;
                    else if(count>3) board[i][j] = -1;
                }
                else{
                    if(count == 3) board[i][j]=-2;
                }
            }
        }

        for(int i = 0 ; i < m ;i++){
            for(int j = 0 ; j < n ; j++){
                if(board[i][j]==-2)
                    board[i][j]=1;
                if(board[i][j]==-1)
                    board[i][j]=0;
            }

        }
}
