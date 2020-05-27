/*
6. ZigZag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    let arr = Array.from({ length: numRows }, () => []);
    let x = 0, y = 0;
    let goDown = true;

    for (let i = 0; i < s.length; i++) {
        arr[x][y] = s[i];
        if (goDown) {
            x++;
            if (x === numRows - 1) goDown = false;
        } else {
            x--;
            y++;
            if (x === 0) goDown = true;
        }
    }
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== undefined) result += arr[i][j];
        }
    }
    return result;
};

/*

go down and when I hit the numRows,
start going right up diagnally and when hit the top
go down

*/