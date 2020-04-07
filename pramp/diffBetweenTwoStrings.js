/*
Diff Between Two Strings
Given two strings of uppercase letters source and target, list (in string form) a sequence of edits to convert from source to target that uses the least edits possible.

For example, with strings source = "ABCDEFG", and target = "ABDFFGH" we might return: ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"

More formally, for each character C in source, we will either write the token C, which does not count as an edit; or write the token -C, which counts as an edit.

Additionally, between any token that we write, we may write +D where D is any letter, which counts as an edit.

At the end, when reading the tokens from left to right, and not including tokens prefixed with a minus-sign, the letters should spell out target (when ignoring plus-signs.)

In the example, the answer of A B -C D -E F +F G +H has total number of edits 4 (the minimum possible), and ignoring subtraction-tokens, spells out A, B, D, F, +F, G, +H which represents the string target.

If there are multiple answers, use the answer that favors removing from the source first.

Constraints:

[time limit] 5000ms
[input] string source
2 ≤ source.length ≤ 12
[input] string target
2 ≤ target.length ≤ 12
[output] array.string

suffix 
dp(i, j)
minimum edits required for suffixes
both of source[i:]
        target[j:]

        length of source - 7 (0, 1,2,3,4,5,6)
        source[6:] -> G
        target[6:] => H
        if( i, j = 6){ we need to find its' removing or inserting a charater to make it the smallest edit}

        source[5:] => FG
        target[5:] => GH
"ABCDEFG", 
"ABDFFGH"
*/
/*
function diffBetweenTwoStrings(source, target){
    let arr = new Array(source.length).fill(new Array(target.length).fill(null))
    function dp(i, j){
        if(i == source.length || j == target.length){
            return target.length - j;
        };

        if (arr[i][j] === null){
            if(source[i] === target[j]){
                arr[i][j] = dp(i + 1, j + 1);
            } else {
                arr[i][j] = 1 + Math.min(dp(i+1, j), dp(i, j+1))
            }
        } 
        return arr[i][j];
    }

    let resArr = [];
    let i = 0,
        j = 0;

    while(i < source.length && j < target.length){
        if(source[i] === target[j]){
            resArr.push(source[i]);
            i++;
            j++;
        } else {
            if(dp(i+1, j) <= dp(i, j+1)){
                resArr.push("-" + source[i])
                i++;
            } else {
                resArr.push("+" + target[j]);
                j++;
            }
        }
    }

    while(j < target.length){
        resArr.push("+" + target[j]);
        j++;
    }

    return resArr   
}
*/

function diffBetweenTwoStrings(src, tar){
    let dp = new Array(src.length+1).fill(new Array(tar.length).fill(null));
    i 0,1 j 0 1
    "AB"    "BB"
    [0,0]
    [0,0]
    for (let i = 0; i < src.length + 1; i++){
        dp[i][tar.length] = 0;
    }
    for (let j = 0; j < tar.length + 1; j++){
        dp[src.length][j] = tar.length - j;
    }

    for(let i = src.length - 1; i >= 0; i--){
        for (let j = tar.length - 1; j >=0; j--){
            if(src[i] == tar[j]){
                dp[i][j] = dp[i+1][j+1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i+1][j], dp[i][j+1])
            }
        }
    }

    return dp[0][0]
}


console.log(diffBetweenTwoStrings("ABCDEFG", "ABDFFGH"));
