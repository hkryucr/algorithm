/* 
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if(n===1) return [["Q"]]
    let board = Array.from({length: n}, ()=>new Array(n).fill("."));
    let res = [];
    
    solve(n, board, 0, 0, 0);
    
    function solve(n, board, numOfQueens, x){
        if(numOfQueens === n){
            res.push(board.map(arr => arr.join("")).slice())
            return true;
        }
        for(let j = 0; j < n; j++){
            if(placeable(board, x, j)){
                board[x][j] = "Q";            
                solve(n, board, numOfQueens+1, x+1);
                board[x][j] = ".";                
            }
        }
    }

    return res;
};

function placeable(board, x, y){
    if(board[x][y] === "Q") return false;
    
    for(let row = 0; row < x; row++){
        if(board[row][y] === "Q") return false;
    }
    
    let curX = x-1, curY = y-1;
    while(curX >= 0 && curY >= 0){
        if(board[curX][curY] === "Q") return false;
        curX--;
        curY--;
    }
    curX = x-1, curY = y+1;
    while(curX >= 0 && curY < board.length){
        if(board[curX][curY] === "Q") return false;
        curX--;
        curY++;
    }
    
    return true;
}
