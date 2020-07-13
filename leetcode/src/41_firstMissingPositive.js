/*
41. First Missing Positive
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function(nums) {
    if(nums.length === 0) return 1;
    for(let i = 0; i < nums.length; i++){
        let curIdx = nums[i]-1;
        if(curIdx < 0 || nums.length < curIdx){
            nums[i] = 0;
        }
    }
    for(let i = 0; i < nums.length; i++){
        let curIdx = Math.abs(nums[i])-1;
        if(nums[curIdx] > 0){
            nums[curIdx] = -nums[curIdx];
        } else if(nums[curIdx] === 0){
            nums[curIdx] = -0.1;
        }        
    }   
    let i = 0;
    for(const num of nums){
        if(nums[i] >= 0) return i+1;
        i++;    
    }
    return i+1;
};

// nums.append(0)
// n = len(nums)
// for i in range(len(nums)): #delete those useless elements
//     if nums[i]<0 or nums[i]>=n:
//         nums[i]=0
// for i in range(len(nums)): #use the index as the hash to record the frequency of each number
//     nums[nums[i]%n]+=n
// for i in range(1,len(nums)):
//     if nums[i]/n==0:
//         return i
// return n

