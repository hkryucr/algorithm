/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.

      3
    5   1
6   2  9  8
  7  4

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Testcase:
[3,5,1,6,2,9,8,null,null,7,4]
[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
*/

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const leafSimilar = (root1, root2) => {
  const findArray = (root1) => {
    // Create empty array for the outcome
    let data = [];
    // Create searchLeaves function to pass all nodes recursively
    function searchLeaves (node){
      // if it's a leaf, push it into the array 
      if (node.left == null && node.right == null){
        data.push(node.value);
      }
      // search from the left to right each node
      if (node.left != null) {
        searchLeaves(node.left);
      }
      if (node.right != null){
        searchLeaves(node.right);
      }
    }
    searchLeaves(root1);
    return data;  
  };

  // Compare two tree leaf value sequence
  if(JSON.stringify(findArray(root1)) == JSON.stringify(findArray(root2))){
    return true;
  } else {
    return false;
  }
};
