/*
145. Binary Tree Postorder Traversal

Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?
                1
              /  \
             2    3
            / \   /
           6   4  5
                 / \ 
                 2  3

[6, 4, 2, 2, 3, 5, 3, 1] POST
[[1, 3, 5, 3, 2, 2, 4, 6]PREORDER right

pre - p l r
      p r l => l r p
post  l r p

[2,2,3]
[3,5,3,1]
1. go left till the null, every left node to the stack
once u hit null, pop out from the stack, check if there exist a right;
if there exist right, then start again by starting from step1.
if the node u popped out , doesnt right, 

st : [1,2,]
res : []
TreeNode curr = root
while(!st.isempty()){

using stack = recursion

cur = pop()
res.add(curr.val)
cur.left != null - stack.push(cur.left)
cur.right != null - stack.push(cur.right)

[]
while(curr!=null)
    curr= curr.right;
    if(curr!=null)
        res.add(0, curr.val)
        stack.add(curr);

node = pop out from stack
if node.left !=null
    st.push(node.left);

if(node==null){
    // why do you need this condition?
    if(stack.peek.right==node){
        stack.push(stack.peek.right);
    } else {res.add(st.pop());
}else {
    curr = node;
}
}

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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if(root==null) return res;
        Stack<TreeNode> st = new Stack<>();

        st.add(root);
        while(!st.isEmpty()){
            TreeNode node = st.pop();
            res.add(0, node.val);
            if(node.left!=null)
                st.add(node.left);
            if(node.right!=null)
                st.add(node.right);
        }
        return res;
    }
}