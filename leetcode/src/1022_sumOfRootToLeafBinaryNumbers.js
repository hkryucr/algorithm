/*
Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.
Example 1:
   1
 0   1
0 1 0 1

Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
 
Note:

The number of nodes in the tree is between 1 and 1000.
node.val is 0 or 1.
The answer will not exceed 2^31 - 1.
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

const sumRootToLeaf = (node) => {
  // Create an array and return variable (sum)
  let sumRootOfEl = 0;
  let arr = [];

  // pass through all nodes from the top
  function findPath (node) {
    // Create an array for each path;
    if (node == null) {
      return
    };
    // push the value into the array
    arr.push(node.value);

    // Recursion into children nodes
    if (node.left != null){
      findPath(node.left)
    }
    if (node.right != null){
      findPath(node.right) 
    };
    
    // when a node reaches a leaf => create a path => make arr => add it up => "sum"
    if (node.left == null && node.right == null){
      sumRootOfEl += parseInt(arr.join(""), 2)
    };
    // delete the last element [1,2,3(x)] to go back to the parent node 
    arr.pop()
  }
  findPath(node)
  return sumRootOfEl;
}
