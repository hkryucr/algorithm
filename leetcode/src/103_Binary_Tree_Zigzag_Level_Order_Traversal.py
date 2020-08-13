'''
103. Binary Tree Zigzag Level Order Traversal

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
'''

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque

class Solution(object):
#     def zigzagLevelOrder(self, root):
#         if not root: return root
#         res = []
#         queue = deque()
#         queue.append(root)
#         level = 0
#         while len(queue) > 0:
#             cur_res = []
#             cur_len = len(queue)
#             for _ in range(cur_len):
#                 cur_node = queue.popleft()
#                 cur_res.append(cur_node.val)
#                 if cur_node.left:
#                     queue.append(cur_node.left)
#                 if cur_node.right:
#                     queue.append(cur_node.right)
            
#             if level % 2 == 0:
#                 res.append(cur_res)
#             else:
#                 res.append(reversed(cur_res))
            
#             level += 1

#         return res
            
        
    def zigzagLevelOrder(self, root):
        res = []
        self.DFS (root, res, 0)
        return res
        
    def DFS(self, node, res, level):
        if not node: return
        
        if len(res) == 0: res.append(deque())
            
        if level >= len(res): res.insert(level, deque())
        
        if level % 2 == 0:
            res[level].append(node.val)
        else:
            res[level].appendleft(node.val)
            
        self.DFS(node.left, res, level+1)
        self.DFS(node.right, res, level+1)
        
    
    
    
    