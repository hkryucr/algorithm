/*
959. Regions Cut By Slashes
Medium
In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, or blank space.  These characters divide the square into contiguous regions.

(Note that backslash characters are escaped, so a \ is represented as "\\".)

Return the number of regions.

Example 1:

Input:
[
  " /",
  "/ "
]
Output: 2
Explanation: The 2x2 grid is as follows:

Example 2:

Input:
[
  " /",
  "  "
]
Output: 1
Explanation: The 2x2 grid is as follows:

Example 3:

Input:
[
  "\\/",
  "/\\"
]
Output: 4
Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
The 2x2 grid is as follows:

Example 4:

Input:
[
  "/\\",
  "\\/"
]
Output: 5
Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
The 2x2 grid is as follows:

Example 5:

Input:
[
  "//",
  "/ "
]
Output: 3
Explanation: The 2x2 grid is as follows:
Note:

1 <= grid.length == grid[0].length <= 30
grid[i][j] is either '/', '\', or ' '.

*/


var regionsBySlashes = function (grid) {
  let n = grid.length;
  let board = Array.from({ length: n * 3 }, () => new Array(n * 3).fill(1));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "/") {
        board[i * 3 + 0][j * 3 + 2] = board[i * 3 + 1][j * 3 + 1] = board[
          i * 3 + 2
        ][j * 3] = 0;
      } else if (grid[i][j] === "\\") {
        board[i * 3 + 0][j * 3] = board[i * 3 + 1][j * 3 + 1] = board[
          i * 3 + 2
        ][j * 3 + 2] = 0;
      }
    }
  }
  let bLen = board.length;
  let count = 0;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (let i = 0; i < bLen; i++) {
    for (let j = 0; j < bLen; j++) {
      if (board[i][j] === 1) {
        dfs(i, j, board, dirs);
        count++;
      }
    }
  }
  return count;
};

function dfs(x, y, board, dirs) {
  if (board[x][y] === 0) return;
  board[x][y] = 0;
  for (const [dirX, dirY] of dirs) {
    const curX = dirX + x;
    const curY = dirY + y;
    if (curX < 0 || curY < 0 || curX >= board.length || curY >= board.length)
      continue;
    dfs(curX, curY, board, dirs);
  }
}