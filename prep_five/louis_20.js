/*
560. Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
output
1
2
        `
 [1, 1, 1]

Constraints:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
          0 1 2 
prefix = [1,2,3]
[-1, 1, 2, 3, -3]
k = 2

 0  1  2   3 4  5 
[0, -1, 0, 2, 5, 2]
prefix[j] - prefix[i] = k
{
    0: 2,
    -1: 1,
    2: 2,
    5: 1,

}
->
[1,2,3,4,5]   k = 2
for()
hash[i] = true
nums[i] + prev = k - nums[i]

if(hash[k - nums[i]]) found!

output = 3
=>
i = 0
j = 2
(1,2) => 1+1=2

prefix[2] - prefix[0] = 3-1 = 2

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefix = []
    let partialSum = 0
    for (let i = 0; i < nums.length; i++) {
        prefix.push(partialSum + nums[i])
    }
    let left = 0;
    let right = 0;
    let partialSum = prefix[0]
    while (right < nums.length) {
        if (partialSum === k) {
            result++
            right++
        } else if (partialSum )
    }
};