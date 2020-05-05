/*
We are given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right,
negative meaning left). Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. 
If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
Example 1: 
Input:
asteroids = [1,2,3,-3,4,-2]
Output: [1,2,4]

Note:
The length of asteroids will be at most 10000.
Each asteroid will be a non-zero integer in the range [-1000, 1000]

*/

// [1, 2, -3]
// [1, 2, 3, -3, 4, -2]

var asteroidCollision = function (arr) {
    let stack = [];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            stack.push(arr[i]);
        } else {
            let cur;
            while (stack.length > 0) {
                cur = stack.pop();
                if (cur + arr[i] >= 0) break;
            }
            if (cur + arr[i] > 0) {
                stack.push(cur);
            } else if (cur + arr[i] !== 0 && stack.length === 0) {
                res.push(arr[i]);
            }
        }
    }
    if (stack.length > 0) return res.concat(stack);
    return res;
};

console.log(asteroids([1, 2, 3, -3, -4,4, -2]));