/*
472. Concatenated Words

Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Note:
The number of elements of the given array will not exceed 10,000
The length sum of elements in the given array will not exceed 600,000.
All the input string will only include lower case letters.
The returned elements order does not matter.

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = (array) => {
    let trie = new Trie();
    array.sort((a, b) => a.length - b.length);
    let res = [];
    for (const word of array) {
        if (isCombination(word, 0, trie.data, trie.data)) res.push(word);
        trie.insert(word)
    }
    return res;
}

function isCombination(word, leftIdx, trie, origTrie) {
    if (word.length <= leftIdx) return false;
    const curChar = word[leftIdx];
    if (trie[curChar] === undefined) return false;
    if (trie[curChar].terminal && isCombination(word, leftIdx + 1, origTrie, origTrie)) return true;
    if (trie[curChar].terminal && word.length - 1 === leftIdx) return true;
    if (isCombination(word, leftIdx + 1, trie[curChar], origTrie)) return true;
}

const Trie = function () {
    this.data = {};
}

Trie.prototype.insert = function (word) {
    let trie = this.data;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!(char in trie)) {
            trie[char] = {}
        }
        trie = trie[char];
    }
    trie["terminal"] = true;
}

// let findAllConcatenatedWordsInADict = (words) => {
//     const dict = new Set(words);
//     const isConcat = (word) => {
//         if(dict.has(word)) return true;
//         for(let i = 0; i < word.length; i++){
//             let prefix = word.slice(0,i+1);
//             if(dict.has(prefix)){
//                 let suffix = word.slice(i+1);
//                 let result = isConcat(suffix);
//                 if(result) return true;
//             }
//         }
//         return false;
//     }
//     const results = [];
//     for(const word of words){
//         dict.delete(word);
//         if(isConcat(word)) results.push(word);
//         dict.add(word);
//     }
//     return results;
// };
