/*
44. Wildcard Matching

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input:
s = "acdcb"
p = "a*c?b"
Output: false

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let dp = Array.from({ length: s.length + 1 }, () => new Array(p.length + 1).fill(false));

    for (let row = 0; row <= s.length; row++) {
        for (let col = 0; col <= p.length; col++) {
            if (col === 0 && row === 0) {
                dp[row][col] = true;
                continue;
            } else if (row === 0 || col === 0) {
                dp[row][col] = (col >= 1 && p[col - 1] === "*" && dp[0][col - 1]) ? true : false;
                continue;
            }

            let curRow = row - 1;
            let curCol = col - 1;
            if (s[curRow] === p[curCol] || p[curCol] === "?") {
                dp[row][col] = dp[row - 1][col - 1];
            } else if (p[col - 1] === "*") {
                dp[row][col] = (dp[row - 1][col] || dp[row][col - 1])
            }
        }
    }

    return dp[s.length][p.length];
};
