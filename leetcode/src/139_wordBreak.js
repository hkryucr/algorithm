/*
139. Word Break
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// tabulation
var wordBreak = function (s, wordDict) {
    let table = new Array(s.length + 1).fill(false);
    table[0] = true;

    wordDict.sort((a, b) => b - a);
    let maxWordLength = wordDict[0].length;
    for (let i = 0; i < table.length; i++) {
        if (!table[i]) continue;

        for (j = i + 1; j < i + maxWordLength; j++) {
            // this is looking for the entire whatsoever
            let word = s.slice(i, j);
            if (wordDict.includes(word)) {
                table[j] = true;
            }
        }
    }

    return table[table.length - 1];
}


var wordBreak = function (s, wordDict, memo = {}) {
    // memoization solution => time limit
    if (s.length === 0) return true;
    for (let i = 0; i < wordDict.length; i++) {
        let curWord = wordDict[i];
        let sCurWord = s.slice(0, curWord.length);
        if (sCurWord === curWord) {
            let newWord = s.slice(curWord.length);
            if (memo[newWord] !== undefined) return memo[newWord];
            let check = wordBreak(newWord, wordDict, memo);
            if (check) return true;
            if (!check) memo[newWord] = false;
        }
    }
    return false
};