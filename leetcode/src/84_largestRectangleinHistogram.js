/*
84. Largest Rectangle in Histogram

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

The largest rectangle is shown in the shaded area, which has area = 10 unit.

Example:

Input: [2,1,5,6,2,3]
Output: 10

*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    // the index of the element that is smaller than the current element (left of the current element)
    let leftBound = [];
    // the index of the element that is smaller than the current element (right of the current element)
    let rightBound = [];
    leftBound[0] = -1;
    rightBound[heights.length - 1] = heights.length;
    for (let i = 1; i < heights.length; i++) {
        let left = i - 1;
        while (left >= 0 && heights[left] >= heights[i]) {
            left = leftBound[left];
        }
        leftBound[i] = left;
    }
    for (let j = heights.length - 2; j >= 0; j--) {
        let right = j + 1;
        while (right < heights.length && heights[right] >= heights[j]) {
            right = rightBound[right];
        }
        rightBound[j] = right;
    }
    let maxArea = 0;
    for (let k = 0; k < heights.length; k++) {
        curArea = heights[k] * (rightBound[k] - leftBound[k] - 1);
        maxArea = Math.max(maxArea, curArea);
    }
    return maxArea;
};