/*
415. Add Strings
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let dec = 0;
    let mud = "";

    while (i >= 0 || j >= 0) {
        let curI, curJ;
        curI = (num1[i] === undefined) ? 0 : parseInt(num1[i]);
        curJ = (num2[j] === undefined) ? 0 : parseInt(num2[j]);
        sum = curI + curJ + dec;
        if (sum >= 10) {
            dec = 1;
            mud = String(sum % 10) + mud;
        } else {
            dec = 0;
            mud = String(sum) + mud;
        }

        i--;
        j--;
    }

    if (dec === 1) mud = "1" + mud;

    return mud;
};

