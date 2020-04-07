/*
Pancake Sort
Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
Example:

input:  arr = [1, 5, 4, 3, 2]

output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output
Analyze the time and space complexities of your solution.

Note: it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate. To read more about the problem, see the Pancake Sorting Wikipedia page.

Constraints:

[time limit] 5000ms

[input] array.integer arr

[input] integer k

0 ≤ k
[output] array.integer
*/

function pancakeSort(arr) {
  
    for(let i = arr.length-1; i >= 0; i--){    
      let maxInd = findMax(arr, i);
      flip(arr, maxInd+1);
      flip(arr, i+1);
    }
    
    function findMax(arr, k){
      let ans = 0;
      for(let i = 0; i<=k;i++){
        if (arr[i] > arr[ans]){
          ans = i
        }
      }
      return ans;
    }
    return arr
  
  };
  
  function flip (arr, k){
    let pivot = Math.floor(k/2);  
    for(let i = 0; i < pivot; i++){
      [arr[i], arr[k-i-1]] = [arr[k-i-1], arr[i]];
    }
    
    return arr;
  }
  