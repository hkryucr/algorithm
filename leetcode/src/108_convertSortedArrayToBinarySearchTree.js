/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  //edge case
  if (nums.length == 0){return null};
  
  // create a balanced BST => find a root value - median here 
  const mid = Math.floor(nums.length/2);
  const root = new TreeNode(nums[mid]);
  
  // => create left node(tree) and right node(tree) by using recursion
  // will include tree that's made of left elements on the left side of median
  if(nums.length == 1){
      return root;
  }
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid+1));
  
  return root;
};
