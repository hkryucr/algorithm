/*
516. Longest Palindromic Subsequence
Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

Example 1:
Input:
"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".

Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
*/

function longestPalindromeSubseq(string) {
    if(string.length === 0) return 0;
    let maxCount = 1;
    // left right idx
    let visited = Array.from({length: string.length}, ()=>[]);

    for(let i = 0; i < string.length; i++){
        //even
        let left = i
        let right = i + 1
        if(right >= string.length) continue;
        let even = NLP(left, right, string, visited);
        
        // odd 
        left = i -1
        right = i + 1
        let odd = 0;
        if(left >= 0){
            odd = NLP(left, right, string, visited) + 1;
        }
        maxCount = Math.max(maxCount, Math.max(even, odd));
    }
    return maxCount;
}

// NLP returns count? condition is we started from mid -> increment by traversing strings
// where we started -> left = 2  right = 6 
// NLP(2,6,str);

function NLP(left, right, str, visited) {
  if (left < 0 || right >= str.length) return 0;

  if (visited[left][right] !== undefined) {
    return visited[left][right];
  }

  if (str[left] === str[right]) {
    let curVal = NLP(left - 1, right + 1, str, visited) + 2; // =NLP(2,6,str);
    visited[left][right] = curVal;  
    return curVal;
  } else {
    let curVal = Math.max(NLP(left - 1, right, str, visited), NLP(left, right + 1, str, visited));
    visited[left][right] = curVal;
    return curVal;
  }
}

const longestPalindromeSubseq = function (str) {
  if (str.length === 0 || str === null) return 0;
  const len = str.length,
    dp = Array(len)
      .fill(null)
      .map(() => Array(len).fill(0));
  return helper(0, len - 1);

  function helper(s, e) {
    if (s > e) return (dp[s][e] = 0);
    if (dp[s][e] != 0) return dp[s][e];
    if (s == e) return (dp[s][e] = 1);
    if (str[s] === str[e]) return (dp[s][e] = helper(s + 1, e - 1) + 2);
    else return (dp[s][e] = Math.max(helper(s + 1, e), helper(s, e - 1)));
  }
};

const input = "bbbab";
const input2 = "cbbd";
const input3 = "bbbabcbbccccccc";
console.log(longestPalindromeSubseq(input));
console.log(longestPalindromeSubseq(input2));
console.log(longestPalindromeSubseq(input3));

