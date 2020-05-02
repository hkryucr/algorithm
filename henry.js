/*
For this problem, a path is defined as any sequence of nodes from some starting node 
to any node in the tree along the parent-child connections.
 The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
20 => minNOde

    -20
    /  \
   15   7

     20
    /  \
   -15  7
    at every node
    helper -> dfs();
    0) currentSum (curVal  + leftRecursiveCall(>) + rightRecursiveCall(>))
        -  check if leftRecursiveCall > 0 => currentSum += leftRecursiveCall;
        -  check if rightRecursiveCall > 0 => currentSum += rightRecursiveCall;
   1) everynode -> need to check its current sum -> compare that with maxSum -> bigger than maxSum -> save it as maxSum
   2) return currentSum;

 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/
// param {TreeNode} root
// @return {number}
/*


[5, 4,8,  11,null,13,4,    7,2,null,null,null,1]
[5,  4,8,11,null,13,4,7,2,null,null,null,1]
                   5
         4                 8
    11     null        13      4
  7  ,2, null,null, null, 1

  1+4+13+8+5+4+11+7+2

  got - 55
  expected - 48

  [1,2,3]

   1
  2 3 
  => 6
*/
function maxPathSum(root){ // -10
    if(!root) return 0;
    let maxSum = -Infinity;

    function DFS (node){
        if(!node) return 0;
        let curSum = node.val; 
        let curLeftRightSum = node.val; 
        let left = Math.max(0, DFS(node.left));
        let right = Math.max(0, DFS(node.right));
        if(left > right){
            curSum += left;
        } else if(right > left){
            curSum += right;
        }

        curLeftRightSum += (left + right);
        maxSum = Math.max(curLeftRightSum, maxSum); 
        return curSum;
    }

    DFS(root);
    return maxSum;
}

var maxPathSum = function(root) {
    var max = -Infinity
    traverse(root)
    function traverse(node){
        if(node == null){
            return 0
        }
        var left = Math.max(0,traverse(node.left))
        var right = Math.max(0, traverse(node.right))
        max = Math.max(max, left+right+node.val)
        return Math.max(left,right) + node.val
    }
    return max
};