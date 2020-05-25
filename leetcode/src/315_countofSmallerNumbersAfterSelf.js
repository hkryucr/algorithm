/*
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Input: [5,2,6,1]
Output: [2,1,1,0] 
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
class BST {
    constructor(val, size = 0) {
        this.val = val;
        this.size = size;
        this.left = this.right = null;
    }
    insert(val) {
        if (val <= this.val) {
            this.size ++; 
            if (this.left) {
                return this.left.insert(val);
            } else {
                this.left = new BST(val);
                return 0;
            }
        } else {
            if (this.right) {
                return this.right.insert(val) + this.size + 1;
            } else {
                this.right = new BST(val);
                return this.size + 1;
            }
        }
    }
};

var countSmaller = function(nums) {    
    if (nums.length === 0) return []; 
    const result = [0];
    const root = new BST(nums[nums.length - 1]);
    for (let i = nums.length - 2; i >= 0; i--) {
        const size = root.insert(nums[i]);
        result.push(size);
    }
    return result.reverse();
};

// Brute Force
// var countSmaller = function(nums) {
//     let arr = [];
//     for(let i = 0; i < nums.length; i++){
//         let count = 0;
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[j] < nums[i]) count++;
//         }
//         arr.push(count);
//     }
//     return arr;
// };