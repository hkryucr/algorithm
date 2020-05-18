/*
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. 
Thanks Marcos for contributing this image!

Example:
            Math.min(3, 2) * 2-current location(o))
Input:      [0,1,0,2,1,0,1,3,2,1,2,1]
leftBound = [0,0,1,1,2,2,2,2,3,3,3,3]
rightBound =[]
            [0,0,1,0,]
Output: 6

1) iterate through the array
2) leftBound = [];
3) rightBound = [];

[-1, -1, 1, -1, 3, 3,  3, -1, 7, 8, 7, 9];
[-1, -1, 1, -1, ., .,  7, -1, -1, 9, -1, -1];
[]
- get the index of left and right bound -> know height of the water that the current location can hold
- the current water height is based on left and right bounds -> ( minimumvalue between left and right bounds - current position)

*/
/**
 * @param {number[]} height
 * @return {number}
 */
// [000000001]
//     v  v
// [0, 2, 1, 0, 1, 0, 1, 3, 2, 1, 2, 1];
// [-1,-1, ]

var trap = function(height) {
    let leftBound = [];
    let rightBound = [];
    leftBound[0] = -1;

    for(let i = 1; i < height.length; i++){
        let left = i-1;

        while(left >= 0 && height[i] > height[left]){
            left = leftBound[left];
        }

        leftBound[i] = left;
    }

};