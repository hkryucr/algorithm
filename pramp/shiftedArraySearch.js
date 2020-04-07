/*
Shifted Array Search
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.

Explain your solution and analyze its time and space complexities.

Example:

input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
Constraints:

[time limit] 5000ms
[input] array.integer arr
[input] integer num
[output] integer
*/

function shiftedArrSearch(shiftArr, num) {
    /*
    1) half of the array is sorted
    2) need to check which array is sorted or not
    3) use binary search (modified binary search)
    
    [9, 12, 17, 2, 4, 5] => mid = 2(17)
    [3, 1] => mid = 0(3)
  
    from left to mid or right to the end is sorted 
    
    1) check if the left half is sorted or not
      a) arr[left] <= arr[mid]
      
      2) inside sorted half array => check target number is within the half 
        for instance,
        if half is 9 12, 17 => left targetnum mid
        => check the right side 
        => left = mid + 1
    
    else {
    // right half is sorted
       else if 2, 4, 5 => mid+1 targetNum right 
    }
    
    */
    let left = 0,
        right = shiftArr.length - 1;
    
    while(left <= right){
      
      let mid = Math.floor((left+right)/2);
      if(shiftArr[mid] == num) return mid;
      // check if the left half is sorted
      if(shiftArr[left] <= shiftArr[mid]){
        if(shiftArr[left] <= num && num <= shiftArr[mid]){
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if(shiftArr[mid] <= num && num <= shiftArr[right]){
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  }