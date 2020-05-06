/*
392. Is Subsequence
Easy

1069

189

Add to List

Share
Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {

//     let i = 0, j = 0;

//     while( i < s.length && j < t.length){
//         if(s[i]===t[j]){
//             i++;
//             j++;
//         } else {
//             j++;   
//         }
//     }
//     // O(n+m) * 1b => bn + m || space

//     return i === s.length;
// };
var isSubsequence = function (s, t) {
    let hash = {};

    for (let i = t.length - 1; i >= 0; i--) {
        if (hash[t[i]] === undefined) hash[t[i]] = [];
        hash[t[i]].push(i);
    }
    let preIdx = -Infinity;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hash[char] === undefined) return false;
        if (hash[char].length === 0) return false;

        let curIdx = hash[char].pop();
        while (hash[char].length > 0 && preIdx >= curIdx) {
            curIdx = hash[char].pop();
        }
        if (preIdx >= curIdx) return false;
        preIdx = curIdx;
    }
    return true;
}
