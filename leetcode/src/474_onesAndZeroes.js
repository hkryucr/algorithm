/*
474. Ones and Zeroes
Given an array, strs, with strings consisting of only 0s and 1s. Also two integers m and n.

Now your task is to find the maximum number of strings that you can form with given m 0s and n 1s. Each 0 and 1 can be used at most once.

Example 1:

Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: This are totally 4 strings can be formed by the using of 5 0s and 3 1s, which are "10","0001","1","0".
Example 2:

Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: You could form "10", but then you'd have nothing left. Better form "0" and "1".


Constraints:

1 <= strs.length <= 600
1 <= strs[i].length <= 100
strs[i] consists only of digits '0' and '1'.
1 <= m, n <= 100

*/

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let memo = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < strs.length; i++) {
        let ones = 0, zeros = 0;
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] === "0") zeros++;
            else ones++;
        }

        for (let k = m; k >= zeros; k--) {
            for (let l = n; l >= ones; l--) {
                memo[k][l] = Math.max(memo[k][l], memo[k - zeros][l - ones] + 1);
            }
        }
    }
    return memo[m][n];
}
