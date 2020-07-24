/*
451. Sort Characters By Frequency
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:
Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

*/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = {}
    for(let i = 0; i < s.length; i++){
        if(hash[s[i]] === undefined) hash[s[i]] = 0;
        hash[s[i]] ++;
    }
    let numHash = {};
    for(let key in hash){
        if(numHash[hash[key]] === undefined) numHash[hash[key]] = [];
        numHash[hash[key]].push(key);
    }
    let str = "";
    for(let key of Object.keys(numHash).sort((a,b)=>b-a)){
        let curArr = numHash[key];
        curArr.forEach(el => {
            for(let i = key; i > 0; i--){
                str += el;    
            }
        })
    }
    return str;    
};