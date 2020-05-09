/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = (board, word) => {

  // found value;
  let found = false;
  
  // loop through to find a value;
  for (let row = 0; row < board.length; row++){
    for (let col = 0; col < board[row].length; col++){
      if(board[row][col] == word[0]){
        dfs(row, col, 0);
      }
    }
  }

  // Create dfs function
  function dfs(row, col, count){
    // goal
    if(count == word.length){
      found = true;
      return;
    }
    
    // check edge cases
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[count] ||
      found
      ) {
        return;
      }

    let temp = board[row][col];
    board[row][col] = null;

    dfs (row+1, col, count+1)
    dfs (row-1, col, count+1)
    dfs (row, col+1, count+1)
    dfs (row, col-1, count+1)

    board[row][col] = temp;
    return
  }

  return found;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (DFS(board, i, j, word, 0)) return true;
    }
  }
  return false;
};

function DFS(board, i, j, word, idx) {
  if (idx === word.length - 1 && board[i][j] === word[idx]) return true;
  if (board[i][j] !== word[idx]) return false;

  const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  let cur = board[i][j];
  board[i][j] = "*";
  for (let k = 0; k < dirs.length; k++) {
    const [dirX, dirY] = dirs[k];
    const [curX, curY] = [dirX + i, dirY + j];
    if (curX < 0 || curY < 0 || curX >= board.length || curY >= board[0].length || board[curX][curY] === "*") continue;
    if (DFS(board, curX, curY, word, idx + 1)) return true;
  }
  board[i][j] = cur;
  return false;
}