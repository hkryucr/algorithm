/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

[-1, 0, 1, 2, -1, -4]

[-4, -1, -1, 0, 1, 2]
-4

// sorted arr [-1,-1,0,1,2,2]
left : -1
mid : -1 => 0
right: 2 => 1
// [-1,0,1,2]
// find two el that sum up to target num

// left should be negative
// mid 
// right - should be positive
-3 [-2,-1, 4, 5]
*/

var threeSum = (arr) => {
    arr.sort((a, b) => a - b)
    const result = []
    for (let i = 0; i < arr.length; i++) {
        let left = i;
        let mid = i + 1
        let right = arr.length - 1
        while(mid < right) {

            const sum = arr[left] + arr[mid] + arr[right]
            if (sum === 0) {

                result.push([arr[left], arr[mid], arr[right]])
                mid += 1
            }
            else if (sum < 0) {
                mid += 1
            } else if (sum > 0) {
                right -= 1
            }
        }
    }
    const deduped = []
    return result

}

console.log( threeSum([-1, 0, 1, 2, -1, -4]))