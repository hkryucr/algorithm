/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

*/

var flatten = function (root) {
    if (!root) return null;
    let prev = null;

    function helper(node) {
        if (!node) return;
        helper(node.right);
        helper(node.left);
        node.right = prev;
        node.left = null;
        prev = node;
    }
    helper(root);
};
