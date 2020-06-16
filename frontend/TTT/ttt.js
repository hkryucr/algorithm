let turn = "X";
let gameOver = false;

document.getElementsByClassName("reset-button")[0].addEventListener('click',(e)=>{
    e.preventDefault();
    const boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(box => box.innerHTML = "")
    document.getElementsByClassName("winner")[0].innerHTML = ""
    turn = "X";
    gameOver = false;
})

document.getElementById("board").addEventListener("click",(e)=>{
    e.preventDefault();
    const currBox = e.target;
    if (currBox.innerHTML === "X" || currBox.innerHTML === "O" || gameOver) return;
    currBox.innerHTML = turn;
    if(win(currBox.id)) {
        document.getElementsByClassName("winner")[0].innerHTML=`${turn} player WON!!`
    };
    turn = (turn === "O") ? "X" : "O";
})

function win(id){
    const boxes = document.getElementsByClassName("box");
    const originalBoard = Array.from(boxes).map(el=>el.innerHTML);
    const board = Array.from({length: 3}, ()=> new Array(3).fill(""));
    let idx = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++){
            board[i][j] = originalBoard[idx];
            idx++;
        }
    }
    const [x, y] = [+id[0], +id[1]]
    // check who won right
    if (checkRow(board, x, y) || checkCol(board, x, y) || checkDiagnal(board, x, y)){
        gameOver = true;
        return true;
    } 
}

function checkRow(board, x, y) { 
    for(let j = 0; j < board[0].length; j++){
        if(board[x][y] !== board[x][j]) return false;
    }
    return true;
}
function checkCol(board, x, y) {
    for (let i = 0; i < board.length; i++) {
        if (board[x][y] !== board[i][y]) return false;
    }
    return true;
}
function checkDiagnal(board, x, y) {
    if(!( x === y || 2 - x === y )) return false;
    let matched = true;
    for (let i = 0; i < board.length; i++) {
        if (board[x][y] !== board[i][i]) matched = false;
    } 
    if(matched) return true;
    matched = true;
    for (let i = 0; i < board.length; i++){
        if (board[x][y] !== board[2-i][i]) matched = false;
    }

    return matched;
}