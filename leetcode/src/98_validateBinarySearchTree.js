/*
98. Validate Binary Search Tree
Medium

2540

372

Favorite

Share
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/


var isValidBST = function(root) {
    
    return helper(root, -Number.MAX_VALUE, Number.MAX_VALUE);
    
    function helper (root, min, max){
        if(!root) return true;
        if(root.val <= min || root.val >= max){
            return false;
        }
        
        if(root.left && !helper(root.left, min, Math.min(root.val, max))){
            return false;
        };
        
        if(root.right && !helper(root.right, Math.max(root.val, min), max)){
            return false
        };        
        
        return true;
    }
};
