/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents 
its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will 
explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:
Input: 
asteroids = [5, 10, -5]
Output: [5, 10]
Explanation: 
The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

Example 2:
Input: 
asteroids = [8, -8]
Output: []
Explanation: 
The 8 and -8 collide exploding each other.

Example 3:
Input: 
asteroids = [10, 2, -5]
Output: [10]
Explanation: 
The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.

Example 4:
Input: 
asteroids = [-2, -1, 1, 2]
Output: [-2, -1, 1, 2]
Explanation: 
The -2 and -1 are moving left, while the 1 and 2 are moving right.
Asteroids moving the same direction never meet, so no asteroids will meet each other.

Note:

The length of asteroids will be at most 10000.
Each asteroid will be a non-zero integer in the range [-1000, 1000]..

*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
/*

1) create stack []'
2) iterate from left to right
    1) if meeting positive integers
        what the stack has right now. the top element of the stack - / +
        -  push positive number into my stack
    2) if meeting negative integers 
        my stack has 
        - (-) push negative integers into my stack
        - (+) compare the values between new value with my stored values
            - while() => until new negative number is smaller than one of the values in stack
            - [1,2,3,4,5] => move forward 
*/


var asteroidCollision = function(asteroids) {

    const stack = [];
    for (let i = 0; i < asteroids.length; i++){
        const curEl = asteroids[i];
        let curElExist = true;
        if(stack.length === 0){
            stack.push(curEl);
            continue;
        }

        if (stack[stack.length - 1] < 0) {
            stack.push(curEl);
            continue;
        }

        if(curEl > 0){
            stack.push(curEl);
        } else if (curEl < 0){
            while(stack.length > 0){
                if (stack[stack.length - 1] === Math.abs(curEl)){
                    stack.pop();
                    curElExist = false;
                    break;
                } else if (stack[stack.length - 1] > Math.abs(curEl)){
                    break;
                    curElExist = false;
                } else {
                    stack.pop();
                }
            }
            if (curElExist) stack.push(curEl);
        }
    }

    return stack;
};