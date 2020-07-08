/*
67. Add Binary
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let smaller = (a.length >= b.length) ? b : a;
    let larger = (a.length < b.length) ? b : a;
    let prev = 0;
    let newStr = "";
    for(let i = 0; i < larger.length; i++){
        let sChar = "0";
        if(i < smaller.length){
            let sLen = smaller.length;
            sChar = smaller[sLen-1-i];            
        }
        let lLen = larger.length;
        let lChar = larger[lLen-1-i];
        
        let nNum = prev + parseInt(lChar) + parseInt(sChar);
        prev = Math.floor(nNum / 2);
        nNum %= 2;
        newStr = nNum.toString() + newStr;
    }
    if(prev === 1) newStr = "1" + newStr;
    
    return newStr;
};