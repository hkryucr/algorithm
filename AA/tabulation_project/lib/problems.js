// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// console.log(stepper([3, 1, 0, 5, 10]));           // => true, because we can step through elements 3 -> 5 -> 10
// console.log(stepper([3, 4, 1, 0, 10]));           // => true, because we can step through elements 3 -> 4 -> 10
// console.log(stepper([2, 3, 1, 1, 0, 4, 7, 8]))    // => false, there is no way to step to the end

function stepper(nums) {
    let table = new Array(nums.length+1).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
      const element = nums[i]
      if(!table[i]) return false;
      for (let j = 1; j <= element; j++) {
        table[i+j] = true;
      }
    }

    return table[table.length-1];
}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//                    2  7  11 10 15
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// console.log(maxNonAdjacentSum([1,102,99,1,6]))         // => 10, because 4 + 6 

// function maxNonAdjacentSum(nums) {
//     if(nums.length === 0) return 0;
//     if(nums.length === 1) return nums[0];

//     let table = new Array(nums.length);
//     for(let i = 0; i < nums.length; i++){
//         if(i === 0 || i === 1){
//             table[i] = nums[i];
//         } else {
//             if((i - 3) >= 0){
//                 table[i] = Math.max(table[i - 2], table[i - 3]) + nums[i];
//             } else if((i - 2) >= 0) {
//                 table[i] = table[i - 2] + nums[i];
//             }
//         }        
//     }
//     return Math.max(table[table.length - 2], table[table.length - 1]);
// }

function maxNonAdjacentSum(nums) {
  if (nums.length === 0) return 0;

  let table = new Array(nums.length).fill(0);
  table[0] = nums[0];

  for (let i = 1; i < table.length; i++) {
    let skipLeftNeighbor = table[i - 2] === undefined ? 0 : table[i - 2];
    let bestWithThisNum = nums[i] + skipLeftNeighbor;
    let bestWithoutThisNum = table[i - 1];
    table[i] = Math.max(bestWithThisNum, bestWithoutThisNum);
  }

  return table[table.length - 1];
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
console.log(minChange([1, 2, 5], 11))         // => 3, because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8))        // => 2, because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15))    // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100))   // => 4, because 25 + 25 + 25 + 25 = 100
// [1,1,1,2, ,1, , ,]
// [0,2,5]
function minChange(coins, amount) {
    // let table = new Array(amount+1).fill(Infinity);
    // table[0] = 0;
    // for (let j = 1; j <= amount; j++) {
    //     for (let i = 0; i < coins.length; i++) {
    //         const currentCoin = coins[i];
    //         if(j - currentCoin >= 0){
    //             table[j] = Math.min(1 + table[j - currentCoin], table[j]);
    //         }
    //     }        
    // }
    // return table[amount];

    let table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    for(let i = 0; i < table.length; i++){
        for(let j = 0; j < coins.length; j++){
            let currCoin = coins[j];
            let nextIdx = currCoin + i;
            if(nextIdx > amount) continue;
            table[nextIdx] = Math.min(table[nextIdx], table[i] + 1)
        }
    }
    // console.log(table)
    return table[amount]
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};