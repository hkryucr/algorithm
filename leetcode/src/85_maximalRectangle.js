/*

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example:

Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6

*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let heights = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0));
    let max = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i === 0) {
                heights[i][j] = parseInt(matrix[i][j]);
            } else {
                if (matrix[i][j] === '0') continue;
                heights[i][j] += heights[i - 1][j] + parseInt(matrix[i][j]);
            }
        }
        let curMax = largestRectangleArea(heights[i]);
        max = Math.max(max, curMax);
    }

    return max;
};

var largestRectangleArea = function (heights) {
    let leftBound = [];
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