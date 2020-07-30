'''
701. Insert into a Binary Search Tree
Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:

         5
       /   \
      2     7
     / \   
    1   3
         \
          4


Constraints:

The number of nodes in the given tree will be between 0 and 10^4.
Each node will have a unique integer value from 0 to -10^8, inclusive.
-10^8 <= val <= 10^8
It's guaranteed that val does not exist in the original BST.

'''

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
#     def insertIntoBST(self, root, val):
#         """
#         :type root: TreeNode
#         :type val: int
#         :rtype: TreeNode
#         """
#         if root == None:
#             return TreeNode(val)
        
#         if root.val < val:
#             root.right = self.insertIntoBST(root.right, val)
#         else:
#             root.left = self.insertIntoBST(root.left, val)
#         return root
        
    def insertIntoBST(self, root, val):
        """
        :type root: TreeNode
        :type val: int
        :rtype: TreeNode
        """
        if root == None:
            return TreeNode(val)
        
        node = root
        
        while node != None:
            if node.val < val:
                if node.right == None:
                    node.right = TreeNode(val)
                    node = None;
                else:
                    node = node.right
            else:
                if node.left == None:
                    node.left = TreeNode(val)
                    node = None;
                else:
                    node = node.left
        return root
        
        