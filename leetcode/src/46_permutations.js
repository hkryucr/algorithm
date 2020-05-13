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
// var permute = function(nums) {
    
//   if(nums.length == 0){
//       return [[]];
//   } else if (nums.length==1){
//       return [[nums[0]]]
//   }

//   return helper([[nums[0]]], 1, nums)
// }

// function helper(arr, index, nums){
//   let newArr = []
//   while(arr.length>0){
//       let newSubArr = arr.shift();
//       let len = newSubArr.length
//       for(let j=0; j <= len; j++){
//           let subArr = newSubArr.slice(0);
//           subArr.splice(j, 0, nums[index]);
//           newArr.push(subArr);
//       }
//   };
//   if (nums.length-1 != index){
//       return helper(newArr, index+1, nums);
//   } else {
//       return newArr;
//   }
// }

// permutation
// [1,2,3]
// [1,2]
// => [1] 
// last value = 3
//          v
//  => [  1  ] => [2,1]  [1,2]
// permute([1,2]) => [[2,1],[1,2]]
//  v  v v
// [ 2, 1 ]   => [3,2,1] [2,3,1] [2,1,3]
//  v v   v
// [ 1 , 2 ] => [3,1,2] [1,3,2] [1,2,3]

// [1,2,3]
// [1] => [2] => [1,2] [2,1] 
//iteratae from left to the right
// we have to keep curPermutation 2D array
// let permuArr = [[1,2,3,4]]
// for loop -> i (left to the right){
//   tempArr
//   for(iterate all el in permuArr ){
//     for( each el) => building different permutation from el in permuarr
//     have bunch of permutations => temArr;
//   }
//   change our permu Arr
// }

// [1]
// [1,2] [2,1]
// [3,1,2,...] [2,1,3,1,2,3,]
// array[i] = 2
//   v v
// [[ 1 ]] => [1,2] [2,1]
// i = 2
//   v
// 12345
// [[1,2], [2,1]]
// 3 3 3
// [1,2] => [3,1,2] , [1,3,2]
// k = 0 or 1
// return curPermute
function permute(array) {
    let permuArr = [[]];
    for(let i = 0; i < array.length; i++){
      let tempArr = [];
      for(let j = 0; j < permuArr.length; j++){
        let curArr = permuArr[j]; //
        for(let k = 0; k < curArr.length; k++){
          tempArr.push(curArr.slice(0, k).concat(array[i]).concat(curArr.slice(k)));
        }
        tempArr.push(curArr.concat(array[i]));
      }
      permuArr = tempArr;
    }
    return permuArr;
}

console.log(permute([1,2,3,4]))