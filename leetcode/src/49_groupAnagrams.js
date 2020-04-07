/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  // create a set to store sorted words;
  let wordset = {};

  // for => find word => sort => put it to set;
  strs.forEach(el => {
    let string = el.split('').sort().join('');
    if (wordset[string]){
      wordset[string].push(el)
    } else {
      wordset[string] = [el]; 
    }
  })     
  
  return Object.values(wordset);    
};
