/*
22. Generate Parentheses
Medium

4521

245

Add to List

Share
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let res = []

    function helper(cur, open, close) {
        if (cur.length === n * 2) {
            res.push(cur);
            return;
        }
        if (open < n) helper(cur + "(", open + 1, close);
        if (close < open) helper(cur + ")", open, close + 1);
    }
    helper("", 0, 0);
    return res
}


var generateParenthesis = function (n) {

    //     function helper(current, opening){
    //         if (current.length === n * 2 && opening === 0){
    //             res.push(current);
    //         }
    //         if(current.length > n * 2 || opening > n || opening < 0){
    //             return;
    //         }

    //         if( opening > 0){
    //             helper(current + ")", opening-1)
    //         }

    //         if( opening <= n){
    //             helper(current + "(", opening+1)
    //         }
    //     }

    //     helper("", 0);

    //     return res;

};