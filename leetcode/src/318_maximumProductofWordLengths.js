/*
318. Maximum Product of Word Lengths
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:

Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".
Example 3:

Input: ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.

*/

var maxProduct = function (words) {

    let bits = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            let bitWords = (words[i][j].charCodeAt(0) - 97);
            bits[i] |= 1 << bitWords
        }
    }

    let count = 0;
    for (let k = 0; k < words.length - 1; k++) {
        for (let n = k + 1; n < words.length; n++) {
            if ((bits[k] & bits[n]) === 0) {
                count = Math.max(count, words[k].length * words[n].length)
            }
        }
    }
    return count;
}

// console.log(0 | 1 << 2)
// console.log(2 | 1 << 2)
// console.log(13 & 5);
//  101
// 1101 //13
// console.log("a".charCodeAt(0) - 97)
// console.log("z".charCodeAt(0) - 97)
//  << numofCharCode
// [100000000000000000001, 010000000010000000001]
// if ((holder[i] & holder[j]) === 0) {

// 00010
// 00011
//    11