/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const lengthOfLIS = (nums) => {
  // edge check
  if(nums.length == 0){
    return 0;
  } else if (nums.length == 1){
    return 1;
  }

  // create subproblems and store counters in newArr;
  let newArr = [];

  // LIS at length 'i' of array
  // if nums is [1,2,4,3,5] 
  // craete sub arrays such as [1], [1,2], ... ,[1, ... i];
  // compare each value with the last element i, so see LIS.

  for (let i = 0; i < nums.length; i++){
    // base - newArr[j] = 1, when only one value is in the array
    newArr[i] = 1;
    
    for (let j = 0; j <= i; j++){
      // if j > i and if LIS at j > LIS at i, LIS at i becomes LIS at j + 1 (adding i(+1) to previous LIS))
      if (nums[j] < nums[i]){
        if (newArr[j] + 1 >= newArr[i]){
          newArr[i] = newArr[j] + 1;
        }
      } 
    }
  }
  return Math.max(...newArr)
};
