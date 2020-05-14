/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

Follow up: Solve it both recursively and iteratively.
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
 * @return {boolean}
 */

// var isSymmetric = function(root) {
//     // iterative
//     let stack = [];
//     let node = root;
//     stack.push(node);
//     let curLevel;
//     while(stack.length > 0){
//         let len = stack.length;
//         curLevel = [];

//         for(let i = 0; i < len; i++){
//             let cur = stack.shift();       
//             if (cur) {
//                 curLevel.push(cur.val);   
//                 stack.push(cur.left);
//                 stack.push(cur.right);
//             } else {
//                 curLevel.push(null);
//                 continue;
//             }
//         }

//         if(!isPalindrom(curLevel)) return false;
//     }
//     return true;
// };

// function isPalindrom(arr){
//     let left = 0;
//     let right = arr.length-1;
//     while(left < right){
//         if(arr[left] !== arr[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }

var isSymmetric = function (root) {
    return root == null || isSymmetricHelp(root.left, root.right);
};

function isSymmetricHelp(left, right) {
    if (left == null || right == null)
        return left == right;
    if (left.val != right.val)
        return false;
    return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left);
}
