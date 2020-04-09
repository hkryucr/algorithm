/*
20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/

var isValid = function (s) {
  let stack = [];
  const set = {'(':')', '[':']', '{':'}'};
  for ( let i = 0 ;  i < s.length ; i++) {
    if (set[s[i]]){
      stack.push(s[i]);
    } else {
      const currentTop =  stack.pop();
      if (set[currentTop] !== s[i]){
        return false;
      }
    }
  }
  return true
};
//I sent you a new zoom link