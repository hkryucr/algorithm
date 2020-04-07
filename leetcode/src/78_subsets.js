/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
var subsets = function(nums) {
    if(nums.length == 0) return [];
    
    // create variables resArr 
    let resArr = [];
    resArr.push([])
    resArr.push([nums.pop()])
    
    while(nums.length !== 0){
        let newEl = nums.pop();
        resArr = helper (newEl, resArr);
    }    
    
    function helper(newEl, resArr){  
        const len = resArr.length
        for (let i = 0; i < len ;i++){
            resArr.push([...resArr[i], newEl])
        }

        return resArr
    }
    return resArr;
};
