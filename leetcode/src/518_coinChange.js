/*
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1


Note:

You can assume that

0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer

*/

var change = function (am, cs) {
    //  amount
    // co         
    // ins 
    //
    cs.sort((a, b) => a - b);

    let memo = new Array(cs.length + 1).fill(0);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(am + 1);
        memo[i][0] = 1;
    }

    for (let j = 0; j < memo[0].length; j++) {
        memo[0][j] = 0;
    }
    memo[0][0] = 1;

    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[0].length; j++) {
            let curCoin = cs[i - 1];
            if (j - curCoin >= 0) {
                memo[i][j] = memo[i][j - curCoin] + memo[i - 1][j];
            } else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }
    console.log(memo)
    return memo[cs.length][am];
}