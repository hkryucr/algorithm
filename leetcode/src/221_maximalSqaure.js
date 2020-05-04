/*
221. Maximal Square
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length === 0) return 0;

    let maxCount = 0;
    let dp = Array.from({ length: matrix.length }, () => new Array(matrix[0].length));
    let max = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let cur = matrix[i][j];
            if (cur === "0") {
                dp[i][j] = 0;
            } else {
                if (i > 0 && j > 0) {
                    let dpEl = Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
                    dp[i][j] = (dpEl === 0) ? 1 : dpEl + 1;
                    max = Math.max(max, dp[i][j]);
                } else {
                    dp[i][j] = +cur
                    max = Math.max(max, dp[i][j]);
                }
            }
        }
    }
    return max ** 2;
};
