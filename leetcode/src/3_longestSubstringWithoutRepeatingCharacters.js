/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Solution
Approach 3: Sliding Window Optimized
The above solution requires at most 2n steps. In fact, it could be optimized to require only n steps. Instead of using a set to tell if a character exists or not, we could define a mapping of the characters to its index. Then we can skip the characters immediately when we found a repeated character.

The reason is that if s[j]s[j] have a duplicate in the range [i, j)[i,j) with index j'j 
′
 , we don't need to increase ii little by little. We can skip all the elements in the range [i, j'][i,j 
′
 ] and let ii to be j' + 1j 
′
 +1 directly.
*/

// var lengthOfLongestSubstring = function(s) {
//     if(s.length < 2) {
//        return s.length;
//    }
//    // create array
//    let arrRes = [],
//        res = 0;
//    // for loop
//    for (let i = 0; i < s.length; i++){
//        // check if each char exists in an array 
//        if(!arrRes.includes(s[i])){
//            arrRes.push(s[i]);
//            continue;
//        } else {
//            // 
//            if(arrRes.length == 1){
//                continue;
//            }            
//            // check the index of s[i] in array
//            res = Math.max(arrRes.length, res)
//            let position = arrRes.indexOf(s[i]);
//            arrRes = arrRes.slice(position + 1);
//            arrRes.push(s[i]); // [b,c,a] [c,a,b]
//        }
//    }
   
//    return Math.max(arrRes.length, res)
// };

// Solution without array;

var lengthOfLongestSubstring = function(s) {
    // use set 
    let max_len = 0,
        curr = 0,
        hash = {};

    if (s.length < 2){
        return s.length;
    }

    for (let i = 0; i < s.length ;i++){
        if(hash[s[i]] == null){
            curr++;
            hash[s[i]] = i;
        } else {
            curr = Math.min(curr + 1, i - hash[s[i]])
            hash[s[i]] = i;
        }
        max_len = Math.max(max_len,curr);
    }
    return max_len;
}
