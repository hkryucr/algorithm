/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]

inorder: left, root, right
preorder: root, left, right
postorder: left, right,, root
    1
   /  \
  3    2
 /    /  \ 
6    8    9
      \ 
       4

[6 3 4 8 9 2 1]
*/

var postorderTraversal = function(root) {
    // traverse left
    // traverse right
    // process root
    var result = []
    function visit(node) {
        if (!node.left && !node.right) {
            result.push(node.val)
        }
        if (node.left) {
            visit(node.left)
        }
    
        if (node.right) {
            visit(node.right)
        }        
    }

    visit(root)
    return result

}
