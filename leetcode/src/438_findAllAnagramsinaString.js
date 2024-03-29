/*
438. Find All Anagrams in a String
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
    let hash = {}
    for(let i = 0 ; i < p.length; i++){
        if(!hash[p[i]]) hash[p[i]] = 0;
        hash[p[i]]++;
    }
    
    let pLen = p.length;
    let res = [];

    for(let i = 0; i < s.length; i++){
        const char = s[i];
        
        if(i - p.length >= 0){
            const prevChar = s[i - p.length];
            hash[prevChar]++;
            if(hash[prevChar] > 0) pLen++;
        }

        if(hash[char] !== undefined){
            hash[char]--;
            if(hash[char] >= 0) pLen--;
        }

        if(pLen === 0) res.push(i - p.length + 1);
    }
    return res;
}