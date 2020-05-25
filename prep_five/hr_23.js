// 254. Factor Combinations
// Numbers can be regarded as product of its factors. For example,

// 8 = 2 x 2 x 2;
//   = 2 x 4.
// Write a function that takes an integer n and return all possible combinations of its factors.

// Note:

// You may assume that n is always positive.
// Factors should be greater than 1 and less than n.
// Example 1:

// Input: 1
// Output: []

// Example 2:
// Input: 37
// Output:[]

// Example 3:
// Input: 12
// Output:
// [
//   [2, 6],
//   [2, 2, 3],
//   [3, 4]
// ]

// Example 4:
// Input: 32
// Output:
// [
//   [2, 16],
//   [2, 2, 8],
//   [2, 2, 2, 4],
//   [2, 2, 2, 2, 2],
//   [2, 4, 4],
//   [4, 8]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */

 /*

 2 => [[2]]
 3 => [[3]]
 4 => [[4], [2,2]]
 5 => [[5]]
 6 => [[2,3], [6]]
 7 => [[7]]
 8 => [[2]+ [[4], [2,2]]= > [2,4] , [2,2,2]
 9 => [3,3]
 10 => [2,5]
 11 => [11]
 12 => [[2] + [2,3] [6]] => [2,2,3], [2,6]
       []
 12 => 2 => DP(6) + ([[2,3], [6]] , [2]) => [2,2,3], [2,6]
3=> 3,4
 DP(2) = [[2]]
 DP(3) = [[3]]

 n = 112
primes = [2, 3, 5, 7]
sieve of eratosthenes
for each prime, combine prime with getFactors(n / prime)
2 + getFactors(56)
    [[a, b], [b, c, d]]
    [[2, a, b], [2, b, c, c]]
[]

12
[2, 3]

2 + getFactors(6)
empty list if n is prime

 */
var getFactors = function(n) {
    let output = [];

    function DP() {

    }

    DP(n);
};