/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // edge case
    
    let neg = false;
    if (x < 0){
        neg = true;
    }
    let answer = parseInt(x.toString().split('').reverse().join(''))
    if (neg == true){
        answer = -answer
    }
    
    if ((answer > Math.pow(2, 31) - 1) || (answer < -Math.pow(2, 31) )){
        return 0
    }
        
    return answer
};