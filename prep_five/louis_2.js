/*
863. All Nodes Distance K in Binary Tree

We are given a binary tree (with root node root), a target node, and an integer value K.
Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

Output: [7,4,1]

Explanation:
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.
               3
              / \ 
             5   1
            /\   / \ 
            6 2  0  8
              /\
             7  4  

Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.

Note:
The given tree is non-empty.
Each node in the tree has unique values 0 <= node.val <= 500.
The target node is a node in the tree.
distance - 0 <= K <= 1000.
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    // add parent pointer

    var inorder = function(root) {
        if (root === null) return
        if (root.left) {
            root.left.parent = root
            inorder(root.left)
        }   
        if (root.right) {
            root.right.parent = root
            inorder(root.right)
        }
    }

    inorder(root)

    var level = 0
    var result = []
    var q = []
    q.push([target, level])
    while (q.length !== 0) {
        var [current, currentLevel] = q.shift()
        if (currentLevel === K) {
            result.push(current.val)
        }
        if (current.left && !current.left.visited) {
            current.left.visited = true
            q.push([current.left, currentLevel + 1])
        }
        if (current.right && !current.right.visited) {
            current.right.visited = true

            q.push([current.right,  currentLevel+ 1])
        }
        if (current.parent && !current.parent.visited) {
            current.parent.visited = true

            q.push([current.parent, currentLevel + 1])
        }
    }
    return result

} 