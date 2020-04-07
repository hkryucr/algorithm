/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
var permute = function(nums) {
    
  if(nums.length == 0){
      return [[]];
  } else if (nums.length==1){
      return [[nums[0]]]
  }

  return helper([[nums[0]]], 1, nums)
}

function helper(arr, index, nums){
  let newArr = []
  while(arr.length>0){
      let newSubArr = arr.shift();
      let len = newSubArr.length
      for(let j=0; j <= len; j++){
          let subArr = newSubArr.slice(0);
          subArr.splice(j, 0, nums[index]);
          newArr.push(subArr);
      }
  };
  if (nums.length-1 != index){
      return helper(newArr, index+1, nums);
  } else {
      return newArr;
  }
}

/*
Simpler Answer
function permute(nums) {
  let res = [];

  function find(curr, rest) {
    if (!rest.length) return res.push(curr);

    for (let i = 0; i < rest.length; i++) {
      find(
        [...curr, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)]
      );
    }
  }

  find([], nums);

  return res;
}
*/