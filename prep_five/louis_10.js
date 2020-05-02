/*
394. Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
 Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

3 chunk= "a2[c]"

*/

var decodeString = function (s) {
    let currentNum = ""
    let temp = ''
    function chunk(s) {
        let bracketCount = 1
        let i = 0
        while (bracketCount > 0) {
            let current = s[i]
            if (current === '[') {
                bracketCount++
                temp += s[i]
                i++
            } else if (current === ']') {
                bracketCount--
                if (bracketCount > 0) {
                    temp += s[i]
                    i++
                } else {
                    return [temp, i]
                }
            } else {
                temp += s[i]
                i++
            }
        }
    }
    for (var i = 0; i < s.length; i++) {
        // if character is number
        if (!Number.isNaN(s[i])) {
            currentNum += s[i]
        } else if (s[i] === '[') {
            let [currentChunk, idx] = chunk(s.slice(i))
            currentChunk = decodeString(currentChunk)
            for (var i = 0; i < +currentNum; i++) {
                temp += currentChunk
            }
            currentNum = ""
            i = idx + i + 1
        }
    }
    return temp
}
console.log(decodeString("3[a2[c]]"))
console.log('hello')

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

//

// class Solution(object):
//     def decodeString(self, s):
//         stack = []; curNum = 0; curString = ''
//         for c in s:
//             if c == '[':
//                 stack.append(curString)
//                 stack.append(curNum)
//                 curString = ''
//                 curNum = 0
//             elif c == ']':
//                 num = stack.pop()
//                 prevString = stack.pop()
//                 curString = prevString + num*curString
//             elif c.isdigit():
//                 curNum = curNum*10 + int(c)
//             else:
//                 curString += c
//         return curString