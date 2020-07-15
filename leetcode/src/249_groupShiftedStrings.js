/**
 * Given a string, we can "shift" each of its letter to its successive letter, 
 * for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of non-empty strings which contains only lowercase alphas, group all strings that belong to the same shifting sequence.

Example:

Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output: 
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
 */
// 249. Group Shifted Strings   
// ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],

//  1) create set that holds chars
//  2) iterate through one char at a time
//     -> find all possible group members

//  012 => "bcd" 123 -> this operation 26 times
// "abc" -> "bcd"
//       -> "cde"
//       ...
// abc => "11"
// bcd => "11"
// abc => [bcd, def, xyx]
// [a] => [z]

// "11": ["abc", "bcd" ,m...];
// "0": ["a", "z"];

// a: 0
// z: 25
// 25 %= 26 = 0
// 0 - 25 = -25 %= 26 = 1;
// 1 - 0 = 1
// b = 1
// a = 0

// abcd -> 111
// zabc -> 111
// dcba -> "25-25-25"
// cbaz -> "25-25-25"

// formular
// -> if (alphas[curChar] - alphas[prevChar] < 0) curNum = alphas[curChar] - alphas[prevChar] + 26;

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphas = {};
  let i = 0;
  alphabets.split("").forEach((char) => {
    alphas[char] = i;
    i++;
  });

  let hash = {};

  for (const string of strings) {
    if (string.length === 1) {
      if (hash["0"] === undefined) hash["0"] = [];
      hash["0"].push(string);
      continue;
    }

    let curKey = "";
    for (let i = 1; i < string.length; i++) {
      let curChar = string[i];
      let prevChar = string[i - 1];
      let curNum = alphas[curChar] - alphas[prevChar]; // curChar - prevChar
      // console.log(string, string[i], curNum);
      if (curNum < 0) curNum += 26;
      curKey += curNum + "-";
    }
    // console.log(hash);
    if (hash[curKey] === undefined) hash[curKey] = [];
    hash[curKey].push(string);
  }

  return Object.values(hash);
};

console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
console.log(groupStrings(["ab", "ba"])); // [[ba][ab]]
