/*
ind The Duplicates
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

Example:

input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2
Constraints:

[time limit] 5000ms

[input] array.integer arr1

1 ≤ arr1.length ≤ 100
[input] array.integer arr2

1 ≤ arr2.length ≤ 100
[output] array.integer
*/

// n+m solution
function findDuplicates(arr1, arr2) {
    // variable
    let i = 0,
        j = 0,
        resArr = [];
    
    while (i < arr1.length && j < arr2.length){
      if(arr1[i] == arr2[j]){
        resArr.push(arr1[i]);
        i++;
        j++;
      } else if (arr1[i] < arr2[j]){
        i++;
      } else {
        j++;
      }
    }
    return resArr;
}
  
/*
Binary Search SOlution nlog(m)

function findDuplicates(arr1, arr2) {
  let resArr = [];  
  for (let i=0; i < arr1.length; i++){
    if(binarySearch(arr2, arr1[i]) == true){
      resArr.push(arr1[i])
    }
  }  
  return resArr;  
}

function binarySearch (arr, num){
  if(arr.length == 0){
    return false;
  } else if (arr.length == 1 && arr[0] == num){
    return true;
  } 
  
  let begin = 0,
      end = arr.length-1;

  while(begin <= end){
    let mid = Math.floor((begin + end)/2)
    //
    if (arr[mid] == num){
      return true;
    } else if(arr[mid] > num){
      end = mid - 1
    } else {
      begin = mid + 1;
    }
  }
 
  return false
}
*/