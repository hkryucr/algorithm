/**
 * Given a binary tree, find the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
The longest consecutive path need to be from parent to child (cannot be the reverse).

 * 
 * 
 * Input:

   1
    \
     3
    / \
   2   4
        \
         5
 * 

 output 3 

Input:

   2
    \
     3
    / 
   2    
  / \
 3   4
/
4
/
5
/
6
Output: 2 

Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
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
 * @return {number}
 */

var longestConsecutive = function(root) {
    if(!root) return 0;
    const left = helper(root.left, root.val, 1);
    const right = helper(root.right, root.val, 1);
    return Math.max(left, right);
};

function helper(root, parentVal, maxConNum){  
    if (!root) return maxConNum;
    if( root.val === parentVal + 1){
        const left = helper(root.left, root.val, maxConNum + 1);
        const right = helper(root.right, root.val, maxConNum + 1);
        return Math.max(left, right); 
    } else {
        const left = helper(root.left, root.val, 1);
        const right = helper(root.right, root.val, 1);
        return Math.max(maxConNum, Math.max(left, right));
    }
}