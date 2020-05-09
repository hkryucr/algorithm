/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum(root, target) {
    if (!root) return [];
    let outcome = [];
    function DFS(node, sum, tempArr) {
        if (!node.left && !node.right) {
            tempArr.push(node.val);
            if (sum - node.val === 0) outcome.push(tempArr.slice());
            tempArr.pop();
            return;
        }

        let curVal = node.val;
        tempArr.push(curVal);
        if (node.left) DFS(node.left, sum - curVal, tempArr);
        if (node.right) DFS(node.right, sum - curVal, tempArr);
        tempArr.pop();
    }
    DFS(root, target, []);

    return outcome;
}
