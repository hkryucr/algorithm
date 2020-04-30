// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

/*
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

       1
      / \
     2   2
    / \    \ 
   3   3    4
  / \
 4   4

    1
   / \   
  null 2
     null 3

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return null;
    let min = Infinity;
    let max = -Infinity;
    
    function helper(node, level){
        // if(!node)return null;
        if(!node.left && !node.right){
            min = Math.min(min, level)
            max = Math.max(max, level)
            return
        }
        if(node.left) helper(node.left, level + 1);
        
        if(node.right) helper(node.right, level + 1);

    }
    helper(root, 0)
    return max - min <= 1;
};
