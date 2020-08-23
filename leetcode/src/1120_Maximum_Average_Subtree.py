'''
1120. Maximum Average Subtree
Given the root of a binary tree, find the maximum average value of any subtree of that tree.

(A subtree of a tree is any node of that tree plus all its descendants. The average value of a tree is the sum of its values, divided by the number of nodes.)

Example 1:

Input: [5,6,1]
Output: 6.00000
Explanation: 
For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
For the node with value = 6 we have an average of 6 / 1 = 6.
For the node with value = 1 we have an average of 1 / 1 = 1.
So the answer is 6 which is the maximum.
 

Note:

The number of nodes in the tree is between 1 and 5000.
Each node will have a value between 0 and 100000.
Answers will be accepted as correct if they are within 10^-5 of the correct answer.
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maximumAverageSubtree(self, root: TreeNode) -> float:
        max_avg = {"val": 0}
        
        def DFS(node):
            # (average_val, all_sum, number_of_nodes)
            if node == None: 
                return (0, 0, 0)
            
            (left_avg, left_sum, num_of_left_nodes) = DFS(node.left)
            (right_avg, right_sum, num_of_right_nodes) = DFS(node.right)
            
            cur_sum = left_sum + right_sum + node.val
            num_of_cur_nodes = num_of_left_nodes + num_of_right_nodes + 1.00000
            cur_avg = cur_sum / num_of_cur_nodes
            max_avg["val"] = max(max_avg["val"], left_avg, right_avg, cur_avg)
            
            return (cur_avg, cur_sum, num_of_cur_nodes)
        
        DFS(root)
        return max_avg["val"]
            