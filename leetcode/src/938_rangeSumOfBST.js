/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

Note:
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
*/
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const rangeSumBST = (tree, L, R) => {
  if (tree == null){
    return false
  };
  let data = [];
  // Create a function to pass through all nodes in the tree;
  const findNodes = (node, L, R) => {
    // use preorder tree traversal
    // find a value between L and R 
    if (node.value >= L && node.value <=R){
      data.push(node.value);
    }
    // from right to left
    if (node.right != null) {
      findNodes(node.right, L, R)
    }
    if (node.left != null) {
      findNodes(node.left, L, R)
    }
  };
  findNodes(tree, L, R);

  // Create a reducer to sum up the values in the array
  const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
  return data.reduce(sumReducer, 0);
};
