/*
We are given a binary tree (with root node root), a target node, and an integer value K.
Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
Output: [7,4,1]

Explanation: 
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.

            3  <= count 0;
          /   \
    1=>  5     1
        /\      /\
  2=>  6  2    0  8
          /\
         7  4     
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *     this.parent = ...[];
 * }
 * [3,5,1,6,2,0,8]
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    if (K === 0) return [target.val];
    let weakMap = new WeakMap();
    let res = [];
    const rootLeft = root.left;
    const rootRight = root.right;

    function helper(root) {
        if (root === null) return

        if (root.left !== null) {
            const rootLeft = root.left;
            weakMap.set(root.left, root);
            helper(root.left);
        }
        if (root.right !== null) {
            const rootRight = root.right;
            weakMap.set(root.right, root);
            helper(root.right);
        }
    }
    helper(root);


    let queue = [[target, K]];
    let visited = new Set();

    while (queue.length > 0) {

        let [curNode, dis] = queue.shift();
        if (dis === 0 && curNode !== target) res.push(curNode.val);

        if (curNode.left && !visited.has(curNode.left)) {
            queue.push([curNode.left, dis - 1]);
            visited.add(curNode.left);
        }

        if (curNode.right && !visited.has(curNode.right)) {
            queue.push([curNode.right, dis - 1]);
            visited.add(curNode.right);
        }

        if (weakMap.has(curNode) && !visited.has(weakMap.get(curNode))) {
            queue.push([weakMap.get(curNode), dis - 1]);
            visited.add(weakMap.get(curNode));
        }
    }

    return res;
};