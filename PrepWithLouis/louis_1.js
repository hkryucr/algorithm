/*
// Construct Binary Tree from Preorder and Inorder Traversal

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

preorder = [3,9,10,20,15,7]
inorder = [10,9,3,15,20,7]
    3
   / \
  9  20
 /   /  \
10  15   7
[10, 9]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
  var rootVal = preorder[0]
  var root = new TreeNode(rootVal)
  var leftSubtree = buildTree(
    preorder.slice(1), 
    inorder.slice(0, inorder.indexOf(root))
  )
  var rightSubtree = buildTree(
    preorder.slice()
  )

};