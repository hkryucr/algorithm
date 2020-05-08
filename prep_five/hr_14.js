/*
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */

function letterCombinations(digits) {
    if(digits.length === 0) return [];
    let digitMap = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8 :"tuv", 9: "wxyz" }

    function dfs(digits, idx){
        if(digits.length === idx){
            return [];
        }
        let prevArr = dfs(digits, idx+1);
        let newArr = []
        const curDigitString = digitMap[digits[idx]];
        if(prevArr.length === 0) return curDigitString.split(""); // ["a","b","c"]
        for(let i = 0; i < curDigitString.length; i++){
            let curStr = curDigitString[i];
            for (let j = 0; j < prevArr.length; j++) {
                let prevStr = prevArr[j];
                let newStr = curStr + prevStr;
                newArr.push(newStr);
            }
        }
        return newArr;
    }

    return dfs(digits, 0);
}

console.log(letterCombinations("23"));