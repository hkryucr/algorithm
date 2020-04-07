/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
  if(s.length < 1){
    return s;
  }
  
  for(let i=0; i<s.length; i++){
    for (let j=0; j<=i; j++){
      if (checkPalindromic(s.slice(j, s.length-i+j))){
        return s.slice(j, s.length-i+j);
      }  
    }
  }
}

const checkPalindromic = (string) => {
  for (let i=0; i<Math.round(string.length/2);i++){
    if (string[i] != string[string.length-1-i]){
      return false;
    }
  }
  return true;
}

console.log(longestPalindrome("babad"));
