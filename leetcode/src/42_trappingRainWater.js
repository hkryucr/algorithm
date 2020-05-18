/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
    let a = 0;
    let b = height.length - 1;
    let max = 0;
    let leftmax = 0;
    let rightmax = 0;
    while (a <= b) {
        leftmax = Math.max(leftmax, height[a]);
        rightmax = Math.max(rightmax, height[b]);
        if (leftmax < rightmax) {
            max += (leftmax - height[a]);
            a++;
        }
        else {
            max += (rightmax - height[b]);
            b--;
        }
    }
    return max;
}

// var trap = function(height) {

//     let leftBound = [];
//     let rightBound = [];

//     let leftMax = 0;
//     for(let i = 0; i < height.length; i++){
//         leftMax = Math.max(leftMax, height[i]);
//         leftBound[i] = leftMax;
//     }
//     let rightMax = 0;
//     for(let i = height.length-1; i >= 0; i--){
//         rightMax = Math.max(rightMax, height[i]);
//         rightBound[i] = rightMax;
//     }

//     let area = 0;
//     for(let i = 0; i < height.length; i++){
//         let curMin = Math.min(leftBound[i], rightBound[i]);
//         if(curMin > height[i]) {
//             area += (curMin - height[i]);
//         }
//     }
//     return area;
// };