/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

const threeSum = (nums) => {

    nums.sort((a,b) => {return a - b});    
    
    let resArr = [];
    
    for (let i = 0; i < nums.length - 2; i++){
        if (nums[i] > 0) {
			return resArr;
        }
        if (nums[i] === nums[i-1]){
            continue;
        }

        let j = i+1, 
            k = nums.length - 1;

        while (j < k){
            if (nums[i] + nums[j] + nums[k] == 0){
                    resArr.push([nums[i], nums[j], nums[k]]);
                    j++;
                while(nums[j] === nums[j - 1]){
                    j++;
                }
            }
            if (nums[i] + nums[j] + nums[k] > 0){
                k--;
            } else if (nums[i] + nums[j] + nums[k] < 0){
                j++;
            }
        }
    }
    return resArr;
}
