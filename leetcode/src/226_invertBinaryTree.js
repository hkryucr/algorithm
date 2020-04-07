/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
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

var invertTree = function(root) {
    
    if(root == null) return root;
    if(root.val == null) return root;
    
    let arr = [];
    arr.push(root);

    while(arr.length > 0){
        let curRoot = arr.shift();
                
        if(curRoot.right != null){
            arr.push(curRoot.right);
        }
        if(curRoot.left != null){
            arr.push(curRoot.left);
        }
        
        let leftNode = curRoot.left;
        let rightNode = curRoot.right;
        curRoot.left = rightNode;
        curRoot.right = leftNode;
    }
    return root;
};
