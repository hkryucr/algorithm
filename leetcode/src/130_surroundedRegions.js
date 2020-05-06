/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function(board) {
    if(board.length === 0) return [];
    let cantChanged = new Set;
    
    let rowLen = board.length;
    let colLen = board[0].length
    
    for(let i = 0; i < rowLen; i++){
        if(board[i][0] === "O") flip(board, i, 0, cantChanged);
        if(board[i][colLen-1] === "O") flip(board, i, colLen-1, cantChanged);
    }
    
    for(let j = 0; j < board[0].length; j++){
        if(board[0][j] === "O") flip(board, 0, j, cantChanged);
        if(board[rowLen-1][j] === "O") flip(board, rowLen-1, j, cantChanged);
    }

    for(let i = 1; i < rowLen-1; i++){
        for(let j = 1; j < colLen-1; j++){
            if(!cantChanged.has([i, j].toString())){
                if(board[i][j] === "O") board[i][j] = "X";                
            }
        }
    }
    return board;
};

function flip(board, i, j, cantChanged){
    if(cantChanged.has([i,j].toString())) return;
    cantChanged.add([i,j].toString());

    const dir = [[1,0] , [-1,0], [0, 1], [0, -1]];
    
    for(let k = 0; k < dir.length; k++){
        let [ dirX, dirY ] = dir[k];
        let [ curX, curY ] = [dirX + i, dirY + j];

        if(curX >= 0 && curY >= 0 && curX < board.length && curY < board[0].length){
            if(board[curX][curY] === "O") flip(board, curX, curY, cantChanged)            
        }
    }
}