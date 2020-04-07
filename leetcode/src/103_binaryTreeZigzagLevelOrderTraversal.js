/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let resArr = []
    helper(root, resArr, 0);
    return resArr;
};

function helper (root, resArr, level){ 
    if (resArr.length <= level){
        resArr[level] = [];
    } 
    if (level%2 == 0){
        resArr[level].push(root.val);
    } else {
        resArr[level].unshift(root.val);
    }

    if (root.left){
        helper(root.left, resArr, level+1);
    } 
    if (root.right){
        helper(root.right, resArr, level+1);        
    }
}