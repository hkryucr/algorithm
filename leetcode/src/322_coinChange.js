/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coinChange = (coins, amount) => {
  // edge check
  if(amount == 0){return 0};
  if(coins.length < 1){return -1};

  // target combination (fewest) = 11 - element(i) + rest amount;
  // rest amount (fewest) = restamount - element(i)
  // each amount has the fewest elements combination;
  let combSet = {};
  combSet[0] = 0;

  for (let i = 1; i <= amount; i++){
    combSet[i] = 0;
    
    for (let j = 0; j < coins.length; j++){
      if (i == coins[j]){
        combSet[i] = 1;
      } else if (combSet[i] == 0 && combSet[i-coins[j]]){
        combSet[i] = combSet[i-coins[j]] + 1
      } else if (combSet[i] != 0 && combSet[i-coins[j]]){
        combSet[i] = Math.min(combSet[i], (combSet[i-coins[j]] + 1));
      }
    }
  }

  if (combSet[amount] != 0){
    return combSet[amount]
  } else return -1
}
