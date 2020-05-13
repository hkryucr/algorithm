/**
 * 285. Inorder Successor in BST

Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

The successor of a node p is the node with the smallest key greater than p.val.

Example 1:

Input: root = [2,1,3], p = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.
Example 2:

        5
      3   6
    2  4 n  n
  1 

Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.
 
Note:

If the given node has no in-order successor in the tree, return null.
It's guaranteed that the values of the tree are unique.


 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

var inorderSuccessor = function(root, p) {
    /*
    in-order traversal
    -> if the previously checked(right before) is the same as p -> return  the current node
    -> if can't find any -> return null;
    */
    if(!root) return null;
    let prev = null;
    let answer = null;
    function DFS(node){
        if(!node) return ;
        DFS(node.left);
        if(prev === p) answer = node;
        prev = node;
        DFS(node.right);
    }
    DFS(root);

//     return answer;
// };

// class Solution {
//     boolean foundIt = false;
//     TreeNode successor;
//     TreeNode desired;
    
//     public void traverseInorder(TreeNode root) {
//         if (root == null) {
//             return;
//         }
//         traverseInorder(root.left);
//         if (root == desired) {
//             foundIt = true;
//         }
//         else if (foundIt && successor == null) {
//             successor = root;
//         }
//         traverseInorder(root.right);
//     }
//     public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
//         desired = p;
//         traverseInorder(root);
//         if (successor != null) {
//             return successor;
//         }
//         return null;
        
//     }
// }

// prev = 6         curNode 6
//         5
//       3   6 (p)
//     2  4 n  n
//   1 
 //null