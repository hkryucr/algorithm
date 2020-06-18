/*
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
 

Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.

*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let wordDict = new Trie();
    words.forEach(word=> wordDict.insert(word));
    let result = new Set();
    const dirArr = [[0,1],[0,-1],[1,0],[-1,0]];
    for(let i = 0; i < board.length; i++){
        for(let j = 0 ; j < board[i].length;j++){
            dfs(i,j, result, board, wordDict.data, "", new Set(), dirArr)
        }
    }

    return Array.from(result);
};

function dfs(row, col, result, board, trie, str, visited, dirArr){
    let currChar = board[row][col];
    const curPos = `${row}-${col}`;
    if(visited.has(curPos)) return;
    if(trie[currChar]===undefined) return
    if(trie[currChar]["terminal"]) result.add(str+currChar)
    
    visited.add(curPos);
    dirArr.forEach(direction=>{
        let [currX,currY] = [row+direction[0], col+direction[1]];
        if(currX < 0 || currY < 0 || currX >= board.length || currY >=board[0].length) return;
        dfs(currX,currY,result, board, trie[currChar], str+currChar, visited, dirArr);
    })
    visited.delete(curPos);
}

const Trie = function(){
   this.data = {};
}
Trie.prototype.insert = function(word){
    let currTrie = this.data;
    for(let i =0 ; i < word.length; i++){
        if(currTrie[word[i]]===undefined){
            currTrie[word[i]]= {};
        }
        currTrie=currTrie[word[i]];
    }
    currTrie["terminal"]=true;
}
