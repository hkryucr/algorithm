// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6
/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *    1
 *   / \
 *  3   2
 *  1
 *   \ 
 *    3
 *     \
 *      2
 */

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6

function flatten(root) {
    /*
    left left child -> become right child
    right child -> become left child's leaf node's right child
    */
    //find leaf node 
    function helper(node){ 
        if(!node) return null;
        if(node.left === null && node.right === null){
            return node;
        } 

        let curRight = node.right; 
        helper(curRight);
        if(node.left){
            node.right = helper(node.left); 
            node.left = null;
            node.right.right = curRight;
        } 

        return node;
    }

    helper(root);
    
}