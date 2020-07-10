/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
  let arr = new Array(num1.length + num2.length).fill(0);
  if (num1 === "0" || num2 === "0") return "0";
  let revNum1 = num1.split("").reverse();
  let revNum2 = num2.split("").reverse();
  for (let i = 0; i < revNum1.length; i++) {
    for (let j = 0; j < revNum2.length; j++) {
      let curMultiplied = parseInt(revNum1[i]) * parseInt(revNum2[j]);
      arr[i + j] += curMultiplied;
    }
  }
  let curDigit = 0;
  while (curDigit < arr.length - 1) {
    let carry = Math.floor(arr[curDigit] / 10);
    arr[curDigit] %= 10;
    arr[curDigit + 1] += carry;
    curDigit = curDigit + 1;
  }
  if (arr[arr.length - 1] === 0) arr.pop();
  return arr.reverse().join("");
};


var multiply = function (num1, num2){
    let a=BigInt(num1);
    let b=BigInt(num2);
    return String(a*b);
}