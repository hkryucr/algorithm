/**
 * 1048. Longest String Chain
 * /**
 * Given a list of words, each word consists of English lowercase letters.
 * 
 * Let's say word1 is a predecessor of word2 if and only if we can add exactly
 * one letter anywhere in word1 to make it equal to word2. For example, "abc" is
 * a predecessor of "abac".
 * 
 * A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >=
 * 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of
 * word_3, and so on.
 * 
 * Return the longest possible length of a word chain with words chosen from the
 * given list of words.
 * 
 * Example 1:
 * 
 * Input: ["a","b","ba","bca","bda","bdca"] Output: 4 Explanation: one of the
 * longest word chain is "a","ba","bda","bdca".
 * 
 * 
 * Note:
 * 
 * 1 <= words.length <= 1000 1 <= words[i].length <= 16 words[i] only consists
 * of English lowercase letters.

 /**
 * @param {string[]} words
 * @return {number}
 */
/** 
 * @param {string[]} words
 * @ret urn {number} 
 */

var longestStrChain = function (words) {
    if (words.length === 0) return 0;
    let sortHash = {};
    for (const word of words) {
        if (sortHash[word.length] === undefined) sortHash[word.length] = [];
        sortHash[word.length].push(word);
    }

    let countHash = {};
    let sortHashKeys = Object.keys(sortHash).map(el => parseInt(el));
    sortHashKeys.sort((a, b) => a - b);
    for (let i = 0; i < sortHashKeys.length - 1; i++) {
        let curNum = sortHashKeys[i];
        sortHash[curNum].forEach(el => {
            if (cou ntHash[el] === undefined) countHash[el] = 1
    });

    let nextNum = sortHashKeys[i + 1];
    if (nextNum !== curNum + 1) continue;
    for (let j = 0; j < sortHash[curNum].length; j++) {
        for (let k = 0; k < sortHash[curNum + 1].length; k++) {
            if (compareStr(sortHash[curNum][j], sortHash[curNum + 1][k])) {
                if (countHash[sortHash[curNum + 1][k]] === undefined) countHash[sortHash[curNum + 1][k]] = 1;
                countHash[sortHash[curNum + 1][k]] = Math.max(countHash[sortHash[curNum][j]] + 1, countHash[sortHash[curNum + 1][k]]);
            }
        }
    }
}
let maxCount = 
    for (let key in countHash) {
    maxCount = Math.max(countHash[key], maxCount);
}

return maxCount
};

function compareStr(str1, str2) {
    let str1Idx = 0, str2Idx = 0
    let oneDiff = false;
    while (str1Idx < str1.length && str2Idx < str2.length) {
        if (str1[str1Idx] !== str2[str2Idx]) {
            if (oneDiff) return false;
            str2Idx++;
            oneDiff = true;
        } else {
            str1Idx++;
            str2Idx++;
        }
    }
    return oneDiff || (!oneDiff && str2.length - str2Idx === 1);
}

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]))//4
console.log(longestStrChain(["aa", "bb", "ba", "baa", "bdaa", "bdcaa"]))//

// {
//     1: ["a", "b"]
//     2: ["ba"]
//     3: ["bca", "bda"]
//     4: ["bdca"]
// }
// countHash = 
// {
//     "a" : 1
//     "b" : 1
//     "ba" : 2,
//     "bca": 2+1,
//     "bdca": 4
// }

// traverse("1")
// iterate through 
// 1's -> ["a","b"]              +3
// 2's -> "ba"
// 3's -> "bca"
// 4's -> "bdca"
// save them as maximum length;


