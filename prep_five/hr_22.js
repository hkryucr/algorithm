// 156. Binary Tree Upside Down

// Given a binary tree where all the right nodes are either leaf nodes with a sibling 
// (a left node that shares the same parent node) or empty, 
// flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. 
// Return the new root.

// Example:

// Input: [1,2,3,4,5]

//     1
//    / \
//   2   3
//  / \
// 4   5

// Output: return the root of the binary tree [4,5,2,#,#,3,1]

//    4
//   / \
//  5   2
//     / \
//    3   1  
// Clarification:
//    4
//     \
//      2
//     / \
//    5   1
//         \
//          3
// Confused what [4,5,2,#,#,3,1] means? Read more below on how binary tree is serialized on OJ.

// The serialization of a binary tree follows a level order traversal, 
// where '#' signifies a path terminator where no node exists below.

// Here's an example:

//    1
//   / \
//  2   3
//     /
//    4
//     \
//      5
// The above binary tree is serialized as [1,2,3,#,#,4,#,#,5].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://medium.com/@jimdaosui/binary-tree-upside-down-77af203c79af
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var upsideDownBinaryTree = function(root) {
    if(!root) return root;
    let nodes = [];
    function postOrderTraverse(node){
        if(!node) return;
        postOrderTraverse(node.left);
        postOrderTraverse(node.right);
        nodes.push(node.val);
    };
    postOrderTraverse(root);
    // 4 5 2 3 1
    //
    let head = new TreeNode(nodes[0]);
    let node = head;
    for(let i = 1; i < nodes.length;){
        node.left = new TreeNode(nodes[i]);
        node.right = new TreeNode(nodes[i+1]);
        node = node.right;
        i += 2;
    }
    return head;
};
