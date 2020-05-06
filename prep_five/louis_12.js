/*
95. Unique Binary Search Trees II

Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

for root 1, [2,3]
[3]
1
 \
  2
   \
    3
fo
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var generateTrees = function (n) {
    function buildTree(left, right) {
        
    }
    buildTree(1, n)

}

function buildTree(left, right){

    // for(let left) left to right
        // index = i
        // left = buildTree(left, i - 1);
        // right = buildTree(i+1, right);

}
