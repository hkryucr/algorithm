/*
105. Construct Binary Tree from Preorder and Inorder Traversal
Medium

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

*/
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;

    function helper(p1, p2, i1, i2) {
        if (p1 > p2) return null;
        let newNode = new TreeNode(preorder[p1]);
        let inorderIdx = inorder.indexOf(newNode.val);

        newNode.left = helper(p1 + 1, p1 + (inorderIdx - i1), i1, inorderIdx - 1);
        newNode.right = helper(p1 + (inorderIdx - i1) + 1, p2, inorderIdx + 1, i2);

        return newNode;
    }

    const newNode = helper(0, preorder.length - 1, 0, inorder.length - 1);
    return newNode;
}