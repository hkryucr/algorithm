/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

 const isPalindrome = (s) => {
  const string = s.replace(/[^0-9a-zA-Z]+/gmi,"").toLowerCase()
  
  if(string.length < 2){return true}

  for(let i=0; i<Math.round((string.length-1)/2); i++){
      if (string[i] != string[string.length-1-i]){
        return false;
      }
  }
  return true
};
