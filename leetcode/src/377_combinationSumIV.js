/*
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
 
Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const combinationSum4 = (nums, target) => {
  // if nums or target is null, return 0;
  if(nums.length == 0) return 0;
  if(target == 0) return 0;

  // Create a set to store the number of combinations to make each target number.
  let resultSet = {};

  // loop from num 1 to target num;
  for (let targetNum = 1; targetNum <= target; targetNum++){
    // for each target number, loop from 1 to target number to find the number of combinations using elements of 'nums' array
    nums.forEach(el => {
      // set should have only interger numbers. To prevent it from having str, set each target index to number 0;
      if(resultSet[targetNum] == null){
        resultSet[targetNum] = 0;
      }
      // everytime element is equal to the target number, otherwise, target index value should be the sum of resultSet of (targetnumber - elements).   
      if (targetNum == el){
        resultSet[targetNum] ++
      } else if (targetNum > el){
        resultSet[targetNum] += resultSet[targetNum - el]
      } 
    })      
  }
  return resultSet[target]
};
