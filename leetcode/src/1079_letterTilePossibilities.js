/*
1079. Letter Tile Possibilities
You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.

Example 1:

Input: "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

Example 2:
Input: "AAABBC"
Output: 188
 
Note:

1 <= tiles.length <= 7
tiles consists of uppercase English letters
*/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let chars = {}; 
    for(let i = 0; i < tiles.length; i++){
        let tile = tiles[i];
        if(chars[tile]===undefined) chars[tile] = 0;
        chars[tile]++;
    }
    
    let count =0
    buildString(0);
    function buildString(level){
        if(level === tiles.length) return;
        count++;
        for(let key in chars){
            if(chars[key] === 0) continue;
            chars[key]--;
            buildString(level);
            chars[key]++;
        }
    }
    return count-1;
};