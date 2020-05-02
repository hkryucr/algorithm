/*
 205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

// idx  {p: "t", a: "i"} 
     {t: "p", i: "a"}
key value (s -> t)
key value (t -> s);
// return true; return false;
=>          v
s = "pater"
t = "title"

s = ab
t = aa
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
    let srcHash = {};
    let tgtHash = {};
    for (let i = 0; i < t.length; i++) {
        if (srcHash[s[i]] === undefined) {
            srcHash[s[i]] = t[i];
        } else {
            if (srcHash[s[i]] !== t[i]) return false;
        }
        if (tgtHash[t[i]] === undefined) {
            tgtHash[t[i]] = s[i];
        } else {
            if (tgtHash[t[i]] !== s[i]) return false;
        }
    }
    return true;
};



