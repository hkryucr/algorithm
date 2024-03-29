/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
    let right = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) {
            right[i] = Infinity;
            continue;
        }

        let curRight = i + 1;
        while (arr[i] >= arr[curRight]) {
            curRight = right[curRight];
        }
        right[i] = curRight;
    }

    for (let i = 0; i < right.length; i++) {
        if (right[i] === Infinity) {
            right[i] = 0;
        } else {
            right[i] = right[i] - i;
        }
    }
    return right;
};
