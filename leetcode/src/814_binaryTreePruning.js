/*
We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]
 
Explanation: 
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.

Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]


Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]

Note:

The binary tree will have at most 100 nodes.
The value of each node will only be 0 or 1.

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
 * @return {TreeNode}
 */
// Create Tree - [1,0,1,0,0,0,1];
 class Node {  
  constructor(val){
    this.val = val;
    this.left = this.right = null;
    this.root = null;
  }
}
function buildTreeFromArray (arr){
  function insertLevelOrder (i){
    if (i >= arr.length){return null} 
    let leftChild = insertLevelOrder(2*i + 1)
    let rightChild = insertLevelOrder(2*i + 2)
    let current = new Node(arr[i])
    current.left = leftChild;
    current.right = rightChild;
    return current; 
  }
  return insertLevelOrder(0);
}

let tree = buildTreeFromArray([1,0,1,0,0,0,1]);

const pruneTree = (root) => {
  if (root == null){return null;};
  
  function findNodes (root){
    // recursion - DFS postorder return the left or right child node;
    if (root.left != null){
      root.left = findNodes(root.left)
    }
    if (root.right != null){
      root.right = findNodes(root.right)
    }
    // if 1) the node is empty or the value of the node is 0, 2) and doesn't have children, the node becomes null; 
    if (root.val == null || root.val == 0){
      if (root.left == null && root.right == null){
        return null;
      }      
    }
    return root;
  }  
  findNodes(root);
  return root;
};
