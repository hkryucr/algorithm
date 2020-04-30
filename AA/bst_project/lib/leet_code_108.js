// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
/*
108. Convert Sorted Array to Binary Search Tree
Easy
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of 
every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function sortedArrayToBST(nums) {
    if(nums.length === 1) return new TreeNode(nums[0]);
    if(nums.length === 0) return null;

    let left = 0;
    let right = nums.length-1;
    let mid = left + Math.floor((right-left)/2);

    let root = new TreeNode(nums[mid]);
    let leftPartition = sortedArrayToBST(nums.slice(0, mid))
    let rightPartition = sortedArrayToBST(nums.slice(mid+1));
    root.left = leftPartition;
    root.right = rightPartition;

    return root;
}

function sortedArrayToBST(nums, left = 0 , right = nums.length-1) {
  if (left === right) return new TreeNode(nums[left]);
  if (left > right ) return null;

  let mid = left + Math.floor((right - left) / 2);

  let root = new TreeNode(nums[mid]);
  let leftPartition = sortedArrayToBST(nums, left, mid-1);
  let rightPartition = sortedArrayToBST(nums, mid+1, right);
  root.left = leftPartition;
  root.right = rightPartition;

  return root;
}