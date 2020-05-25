/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
    if(!root) return [];
    let queue = [root];
    let result = [];
    
    while(queue.length > 0){
        let temp = [];
        result.push(queue[queue.length-1].val);
        for(let i = 0; i < queue.length; i++){
            let cur = queue[i];
            if(cur.left) temp.push(cur.left);
            if(cur.right) temp.push(cur.right);
        }
        queue = temp;
    }   
    
    return result;
}

// var rightSideView = function(root) {
//     let result = [];
    
//     function DFS (node, level){
//         if(!node) return;
//         if(result[level] === undefined) result[level] = node.val
//         DFS(node.right, level+1);
//         DFS(node.left, level+1);
//     }
    
//     DFS(root, 0)
//     return result;
// };
