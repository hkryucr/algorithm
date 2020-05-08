/*
611. Valid Triangle Number
Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
Example 1:
Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
Note:
The length of the given array won't exceed 1000.
The integers in the given array are in the range of [0, 1000].

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    if(nums.length < 3) return 0;
    nums.sort((a,b) => a-b);
    let count = 0

    for(let cIdx = nums.length-1; cIdx >= 2; cIdx--){
        let c  = nums[cIdx];
        let bIdx = cIdx-1;
        let aIdx = 0;
        while(aIdx < bIdx){
            let a = nums[aIdx];
            let b = nums[bIdx];
            if(a + b > c){
                count += (bIdx - aIdx);
                bIdx--;
            } else {
                aIdx++;
            }
        }
    }
    return count;
};
