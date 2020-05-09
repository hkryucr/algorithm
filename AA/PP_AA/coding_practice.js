/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]

preOrder
InOrder
postOrder

      1
     /  \
    3    2
   /    /
  2   3
  /\
null null 
[2, 3 ,3 ,2, 1]
[1, 2, 3, 3, 2]

[]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const arr = []

var postorderTraversal = function(root) {
    if (root.left != null) {
        postorderTraversal(root.left); 
    }
    // inorder
    arr.push(root.val);

    if (root.right != null) {
        postorderTraversal(root.right); 
    } 
    //postorder
    arr.push(root.val)
    return arr
}


/*
You are given an unsorted array, and are told that this array contains (n - 1) 
of n consecutive numbers (where the bounds are defined). Write a method, 
findMissingNumber, that finds the missing number in O(N) time

arrayOfIntegers: [2, 5, 1, 4, 9, 6, 3, 7];

1) [] upperBound(1), lowerBound(1)-> return 1;
2) 1 -> upperBound(2), lowerBound(1)
3) [1], up=2 lo =1
*/

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound){
    let arr = [];
    for(let i = 0; i < arrayOfIntegers.length; i++){
        let cur = arrayOfIntegers[i];
        arr[cur] = true;
    }

    for(let i = lowerBound; i <= upperBound; i++){
        if(arr[i] !== true) return i;
    }
    
    return true;
} // Output: 8

//given solution

function findMissingNumber(array, upperBound, lowerBound) {
  // Iterate through array to find the sum of the numbers
  let sumOfIntegers = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfIntegers += array[i];
  }

  // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound
  const upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  const lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;
  const theoreticalSum = upperLimitSum - lowerLimitSum;

  return theoreticalSum - sumOfIntegers;
}

// console.log(findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7], 9, 1));

/*
The magic index of an array occurs when the element at that index is the same
 as the index itself. More simply, the magic index is when array[i] === i. 
 Write a recursive method, findMagicIndex, that takes in an array and returns 
 the index that is the magic index. The method must take O(logN) time and 
 O(logN) space.

Constraints:

The array is sorted
The array may have multiple magic indices. If this is the case, return the leftmost occurance.
The elements in the array don't have to be distinct
The magic index doesn't always exist; return -1 if it doesn't exist
The array may have negative values

examples
a[i]  -4, -2, 2, 6, 6, 6, 6, 10
i      0,  1, 2, 3, 4, 5, 6, 7
Result: 2

a[i]  -4 -2  1  6  6  6  6 10
  i    0  1  2  3  4  5  6  7
Result: 6

a[i]  -4 -2  1  6  6  6  7 10
  i    0  1  2  3  4  5  6  7
Result: -1
*/

// if mid idx value is bigger than its index -> go right
// if mid idx value is smaller than or equal to its idx => go left // need to save this value just in case

//
//a[i]  -4 -2  1  6  6  6  6 10
//  i    0  1  2  3  4  5  6  7
// Result: 6
// start, 6
// end 7

function findMagicIndex(arr, start, end){
    if(start > end) return -1;
    let mid = start + Math.floor((end - start)/2); //6
    let midVal = arr[mid];
    console.log(mid, "mid")
    if(midVal === mid){
        let left = findMagicIndex(arr, start, mid-1); // arr 6, 5 -1
        if(left !== -1) return Math.min(left, midVal);
        return midVal;
    } else if(midVal > mid){
        return findMagicIndex(arr, start, mid-1);
    } else {
        return findMagicIndex(arr, mid+1, end);
    }
}

// when

// let arr3 = [-4, -2, 2, 6, 6, 6, 6, 10]
    //           0  1  2  3  4  5  6   7
let arr2 = [-4, -2, 1,  6,  6,  6,  6, 10]
    //       0   1  2   3   4   5   6  7
console.log(findMagicIndex(arr2, 0, 7))

// a[i]  -4, -2, 2, 6, 6, 6, 6, 10
// i      0,  1, 2, 3, 4, 5, 6, 7
// Result: 2

