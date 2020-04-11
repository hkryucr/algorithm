/*
394. Decode String
Medium

2607

131

Add to List

Share
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

var decodeString = function (s) {
    let stack = [];
    let nums = [];
    let i = 0;
    while (i < s.length) {
        if (!isNaN(parseInt(s[i]))) {
            let j = i;

            while (s[i] !== "[") {
                i++;
            }

            let num = +s.slice(j, i)
            stack.push(i);
            nums.push(num);

        } else if (s[i] === "]") {

            let openIndex = stack.pop()
            let sub = s.slice(openIndex + 1, i) // "c"
            let reps = nums.pop() // "4"
            let subStr = ""

            for (let k = 0; k < reps; k++) {
                subStr += sub;
            }

            s = s.slice(0, openIndex - reps.toString().length) + subStr + s.slice(i + 1);
            i = (s.slice(0, openIndex - reps.toString().length) + subStr).length - 1;

        }
        i++;
    }

    return s;
}