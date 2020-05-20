// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Empty cells are indicated by the character '.'.


// A sudoku puzzle...


// ...and its solution numbers marked in red.

// Note:

// The given board contain only digits 1-9 and the character '.'.
// You may assume that the given Sudoku puzzle will have a single unique solution.
// The given board size is always 9x9.
// Accepted


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i][j] === '.'){
                let options = getCandidates(i, j, board);
                if(options.length === 0) return false;
                for(let k = 0; k < options.length; k++){
                    board[i][j] = options[k];
                    if(solveSudoku(board)) return board;
                    board[i][j] = '.'
                }
                return false;
            }
        }
    }
    return board;
};

const getCandidates = function(i, j, board){
    let possible = [];
    let check = new Set();
    for(let y = 0; y < board.length; y++){
        if(board[y][j] !== '.') check.add(board[y][j]);
        if(board[i][y] !== '.') check.add(board[i][y]);
    }
    let iStart = Math.floor(i / 3) * 3;
    let jStart = Math.floor(j / 3) * 3;
    for(let x = iStart; x < iStart + 3; x++){
        for(let y = jStart; y < jStart + 3; y++){
            if(board[x][y] === '.') continue;
            check.add(board[x][y]);
        }
    }
    for(let k = 1; k <= 9; k++){
        if(!check.has(k.toString())) possible.push(k.toString())
    }
    return possible;
}