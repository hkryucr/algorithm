/*
97. Interleaving String

Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length < s3.length) return false;
    
    let dp = Array.from({length: s1.length+1}, ()=>new Array(s2.length+1));
    dp[0][0] = true;
    for(let row = 0; row < dp.length-1; row++){
        dp[row+1][0] = (s3[row] === s1[row]) && dp[row][0];
    }
    for(let col = 0; col < dp[0].length-1; col++){
        dp[0][col+1] = (s3[col] === s2[col]) && dp[0][col];
    }
    
    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j < dp[0].length; j++){
            dp[i][j] = (dp[i-1][j] && s1[i-1] === s3[i+j-1]) || (dp[i][j-1] && s2[j-1] === s3[i+j-1])
        }
    }

    return dp[dp.length-1][dp[0].length-1];
};
