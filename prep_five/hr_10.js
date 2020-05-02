// 1249. Minimum Remove to Make Valid Parentheses

// Given a string s of '(' , ')' and lowercase English characters. 

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) 
// so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 
// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
// Example 4:

// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)"

// Input: s = ")a)(b(" => "ab"
// Output: ""

// Constraints:

// 1 <= s.length <= 10^5
// s[i] is one of  '(' , ')' and lowercase English letters.

/*
1) "(", 
2) ")" i see closing parenthesis first  -> delete.
3) for each closing parenthesis  -> need to have the same number of opening parenthesis before it.

"lee(t(c)o)de)"= > lee(t(c)o)de
"a)b(c)d" =>  ab(c)d
"(" => "" if there's not enough closing parenthesis -> delete opening parenthesis
"()" => "()"
 "() (()"
 "() ()"
*/ 

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let opening = 0;
    let tempStr1 = ""
    for(let i = 0; i < s.length; i++){
        let curStr = s[i];
        if (curStr === "("){
            opening++;
        } else if (curStr === ")"){
            if(opening === 0) continue;
            opening--;
        }
        tempStr1 += curStr;
    }
    if(opening === 0) return tempStr1;

    let resStr = "";
    let closing = 0;
    for(let i = newStr.length-1; i >= 0; i--){
        let curStr = tempStr1[i];
        if(curStr === ")"){
            closing++;
        } else if(curStr === "(") {
            if(closing === 0) continue;
            closing--;
        }

        resStr = curStr + resStr;
    }
    return resStr;
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("())"));
console.log(minRemoveToMakeValid(")("));
console.log(minRemoveToMakeValid("a)b(c)d"));
