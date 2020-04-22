/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (arr) {
    if (arr.length <= 1) return 0;
    let curMinVal = arr[0];
    let curMaxVal = arr[0];
    let profit = 0;

    for (let i = 1; i < arr.length; i++) {
        let curVal = arr[i];
        if (curVal < curMaxVal) {
            profit += (curMaxVal - curMinVal);
            curMinVal = curVal;
            curMaxVal = curVal;
        } else {
            curMaxVal = curVal;
        }
    }
    if (curMaxVal > curMinVal) {
        profit += (curMaxVal - curMinVal);
    }
    return profit;
}