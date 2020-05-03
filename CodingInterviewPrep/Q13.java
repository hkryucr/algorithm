package trees;

/*
114. Flatten Binary Tree to Linked List

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
       / \
      7   8       
            
        store = 8

    1
   / \
  2   5
 / \   \
3   4   6
       / \
      7   8  
       \
        8

        store = 7


    1
   / \
  2   5
 / \   \
3   4   6
         \ 
          7
           \
            8


      
1
 \
  2
  \
   3
    \
     4


2
\
 3
  4

3
 \
  4




[1,2,3,4,5,6]
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

if(node.leftnode) return;
if(node.leftnode && node.right null) return

when ever left!=null,
save the savrightnode

recurse(leftnode)
node.right = leftnode
leftnode.right = saverightnode

*/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class FlatternBTSolution {
    public TreeNode store = null; // This store is used to store the previous node across the recursive values.
                                  // it is similar to storing max val/min val across recursive calls in DFS questions
    /**
     * The thought process here is very important.
     * When building a recursive sol, think of what should happen to the leaf first.
     * Think about the leaf behavior, how u will handle leaf.
     * Try a tree with leaf nodes at 2 different levels like below :
                1                                   1
               / \                                   \
              2   5                      ==>          2
             / \   \                                   \
            3   4   6                                   3
                   / \                                   \
                  7   8                                   4
     *                                                     \
     *                                                      5
     *                                                       \
     *                                                        6
     *                                                         \
     *                                                          7
     *                                                           \
     *                                                            8
     * 
     *  Now, 
     * */
    public void flatten(TreeNode root) {
        if(root==null) return;
        /**
         * We could have gone left first, meaning continously going left and reaching 3.
         * Once u reach 3 u start building up till 1. Refer line 45-61. So, u r at 1, now how can u come back at 4 
         * which needs to be connected to 5 ? U cant .
         * So, that leaves us with only 1 option, go right first, and reach 8. 
         * Connect 8 to 7 as its right node. Line 20 to 28
         */

        flatten(root.right); //  8 finished
        flatten(root.left); // 7 finished

        // looking at 6
        root.right = store; // This is step 2, because in the previous iteration 
                            // you would have got a value for store(shall be 8) which is preserved.
                            // Now, u connect 7 and 8, refer the diagram from line 20-28
        root.left = null;   // This is last step, because we want the left of all nodes to be set as null.
        store = root; // While writing code this is the first thing u write, step1, by thinking in terms of leaf node.
                      // in this case, 8, u want to store that so that u can later connect it to the 7, which u do in the
                      // step2, so now, go and write the step2
       

    }

}

class FlatternBinaryTree {
    public static void main(String[] args) {
        
    }
}