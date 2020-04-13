/*
Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ 100
[input] integer k

0 ≤ k ≤ 20
[output] array.integer
*/

function sortKMessedArray(arr, k) {
    
}

// [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
// function messedSort(array, k){
//   for(let i = 0; i < array.length; i++){ 
//     for( let j = 0; j <= k ; j++){
//       if (array[i+j] !== undefined && array[i] > array[i+j] ){
//         [array[i], array[i+j]] = [array[i+j], array[i]];
//       }
//     }
//   }
//   return array
// }

// function minHeapSort(array) {
//     const heap = new MinHeap();

//     for (let i = 0; i <= k; i++) {
//         heap.insert(array[i]);
//     }
// }

// time: O(n * log(k));
// space: O(k)

function sortKMessedArray(arr, k) {
//   let resArr = [];
  const minHeap = new MinHeap();

  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      minHeap.insert(arr[i]);
    } else {
      minHeap.insert(arr[i]);
      const curMin = minHeap.removeMin();
      arr[i] = curMin;
    }
  }

  while (k < arr.length) {
    arr[i-k+1] = minHeap.removeMin();
    k++;
  }

  return arr;
}

class MinHeap{
    //  .....
}
