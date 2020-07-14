/*
1302. Deepest Leaves Sum
Medium
Given a binary tree, return the sum of values of its deepest leaves.

Example 1:

Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
 
Constraints:

The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.

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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if(!root) return 0;
    let temp = [];
    let queue = [root];
  
    while(queue.length > 0){
        for(let i = 0; i < queue.length; i++){
          let curNode = queue[i];
          if(curNode.left) temp.push(curNode.left);
          if(curNode.right) temp.push(curNode.right);
        }
        if(temp.length === 0){
          break;
        } else {
          queue = temp;
          temp = [];
        }
    }
    if(queue.length === 1) return queue[0].val
    return queue.reduce((a,b)=> (typeof a === "number") ? a + b.val : a.val + b.val);
};