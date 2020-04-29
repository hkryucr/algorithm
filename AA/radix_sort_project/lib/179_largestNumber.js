/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.
*/
/*

[111, 1, 11, 3, 30, 34, 5, 90, 99];

[99, 90, 5, 34, 3, 30, 111, 11, 1]; 

[20, 11]

maxDigit = 2 (10^2);
if(num's length is smaller than max digit)=> we should get the digit as its last digit
idx 0, 1, 2....
1st iteration
[[90, 30][111,11,1][3][34][5][][][][99, ][]]
=> [90, 30, 111, 11, 1, 3, 34, 5, 99]; idx = 0 
=> [900, 300, 111, 111, 111, 333, 344, 555, 999];

2nd iteration
[[90, 30][111,11,1][3][34][5][][][][99, ][]]
=> [90, 30, 111, 11, 1, 3, 34, 5, 99];
=> [900, 300, 111, 111, 111, 333, 344, 555, 999];

3rd iteration
[[][111,11,1][][30,3,34][][5][][][90, 99][]]
[111,11,1,30,3,34,5,90,99]
=> [99,90,5,34,3,30,1,11,111];

*/

// [20, 1]
// 

var largestNumber = function (nums) {
  let maxDigit = getMaxDigit(nums);

  for (let i = 0; i < maxDigit; i++) { // 2
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) { // 20, 1
      let curEl = nums[j];
      let curDigit = getDigitFrom(curEl, i, maxDigit-1);
    //   console.log(curEl, i, curDigit);
      buckets[curDigit].push(curEl);
    }
    nums = [].concat(...buckets);
  }
  return nums.reverse().join("");
};

function getDigitFrom(num, digit, maxDigit) { // 2 100 
    if(num === 0) return 0;
    while( num < (10 ** maxDigit)){
        let remainder = num % 10;
        num = num * 10 + remainder;
    }

    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function getMaxDigit(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, mydigit(nums[i]));
  }
  function mydigit(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
  }
  return max;
}

// console.log(largestNumber([10, 2]));
// console.log(largestNumber([20, 1]));
// console.log(largestNumber([3, 30, 34, 5, 9]));;
console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));