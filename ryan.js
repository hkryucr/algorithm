/*
Leetcode
127. Word Ladder

Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

Example 1:
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["dot","dog","lot","log","hot". "hat", "dit"]

hit -> hut -> cut -> cug -> cog
Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
//
while  => find 5 candidates in wordList?
->
-> GRAPH (BFS)
(A) -> [
        b, => [ght] => until you find the endword
        c, => [ko]
        d] => [lp]
queue = [ [], d, g, h,t, k, o]
queue = [ [b, 1], [c, 1], [d, 1], [g, 2], [h, 2], [t,2] ];
//
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = [beginWord, level]
    let level = 1
    let set = new Set;
    // one element at a time
    while(queue.length > 0) {
        let [cur, curLevel] = queue.shift()
        if(cur === endWord) return curLevel;
        // fidn candidates and push them into queue
        for(let i = 0; i < wordList.length; i++) {
            // dont want to include the cur
            // don't want to include any visited one
            let comp = workList[i];
            if(comp === cur || set.has(comp)) continue;
            if(dif(comp, cur)) {
                // if(comp[idx] === endWord[idx]) {
                //     beginWord[idx] = comp[idx]
                // }
                queue.push([comp, curLevel+1]);
            }
        }
    }
    return 0;
};

const dif = (str1, str2) => {
    let count = 0;
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) {
            count++
        }
    }
    return count === 1
    
}