/**
 * 647
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as 
different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

aaaa

ab  bx

    aaxaaaaxaa

    abcddcba
    iterate through i 0 => end
    
    1) char right and left that char -> keep building it by incrementing values -> find it
    2) char right side -> checking keep checking left right ...hit end or no val
    
Note:

The input string length won't exceed 1000.
 * 
 */
 /**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    if(s.length === 0) return -1;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        count++;
        // odd
        if (i > 0 && i + 1 < s.length && s[i-1] === s[i+1] ){
            let left = i - 1; 
            let right = i + 1;
            while(left >= 0 && right < s.length){
                if(s[left] === s[right]){
                    count++;
                    left--;
                    right++;
                } else {
                    break;
                }
            }
        }
        //even
        if ( i+1 < s.length && s[i] === s[i+1]){
            let left = i;
            let right = i + 1;
            while (left >= 0 && right < s.length) {
                if (s[left] === s[right]) {
                    count++;
                    left--;
                    right++;
                } else {
                    break;
                }
                
            }
        }
    }
    return count;
}
console.log(countSubstrings("cuuedxumdolqdytmcudgqmxcwelatcphpvmqqgahbgjklekehgsulsyuhdxaggumsqpktltsytkoo"));
// m a d a m ada madam

// var countSubstrings = function(s) {
//     let res = [];
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++){
//             if( isPalindrom(s, i, j)){
//                 res.push(s.slice(i, j+1));
//             }
//         }
//     }
//     return res;
// };

function isPalindrom(str, left, right){
    if( left === right) return true;
    while (left < right){
        if(str[left] !== str[right]) return false;
        left ++;
        right --;
    }
    return true;
}

// console.log(countSubstrings("abacddasdfvs"));