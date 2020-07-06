/**
 * 1088. Confusing Number II
 * 
 * We can rotate digits by 180 degrees to form new digits. 
 * When 0, 1, 6, 8, 9 are rotated 180 degrees, they become 0, 1, 9, 8, 6 respectively. 
 * When 2, 3, 4, 5 and 7 are rotated 180 degrees, they become invalid.

A confusing number is a number that when rotated 180 degrees becomes a different number with each digit valid.
(Note that the rotated number can be greater than the original number.)

Given a positive integer N, return the number of confusing numbers between 1 and N inclusive.

// 23457 => invavlid


Example 1:

Input: 20
Output: 6
Explanation: 
The confusing numbers are [6,9,10,16,18,19].
6 converts to 9.
9 converts to 6.
10 converts to 01 which is just 1.
16 converts to 91.
18 converts to 81.
19 converts to 61.

Input: 100
Output: 19
Explanation: 
The confusing numbers are [6,9,10,16,18,19,60,61,66,68,80,81,86,89,90,91,98,99,100].

 */

/**
 * @param {number} N
 * @return {number}
 */
var confusingNumberII = function (N) {
  // 1 -> N
  let dict = { 0: 0, 1: 1, 6: 9, 9: 6, 8: 8 };
  let possible = [0, 1, 6, 8, 9];
  let count = 0;

  for (let i = 1; i < possible.length; i++) {
    if (possible[i] <= N && isConfusing(possible[i])) count++;
    helper(possible[i], N);
  }

  function helper(curr, N) {
    for (let i = 0; i < possible.length; i++) {
      let nextCurr = curr * 10 + possible[i];
      if (nextCurr <= N && isConfusing(nextCurr)) {
        count++;
        helper(nextCurr, N);
      } else if (nextCurr > N) {
        break;
      }
    }
  }

  function isConfusing(inputNum) {
    let val = 0;
    let num = inputNum;
    //11 / 1
    while (num >= 1) {
      let modulo = num % 10;
      val = val * 10 + dict[modulo];
      num = Math.floor(num / 10);
    }
    return !(val === inputNum);
  }
  return count;
};

// console.log(confusingNumberII(20));//6
console.log(confusingNumberII(100)); //19
