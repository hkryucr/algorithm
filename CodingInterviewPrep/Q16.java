/*
94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
Output: [1,3,2]
have a stack
                   1
                 /   \
                4     2
               /
              3
             /  \
           null   7
                /
              null
in [ 3, 7,  4 , 1, 2]
st [1, 4,]

insert into stack - till a left node
if(1,4,6)
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new TreeNode<>();
        if(root==null) return res;
        Stack<TreeNode> st = new Stack<TreeNode>();
        //st.offer(root);
        TreeNode curr = root;
        st.offer(curr);

        while(curr==root || !st.isEmpty()){
            while(curr!=null){
                
                st.add(curr);
                curr = curr.left;
            }
            TreeNode popn = st.pop();
            res.add(popn.val);
            curr = popn.right;
            
        }
        return res;
    }
}