'''
297. Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example: 

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
'''

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
import json
from collections import deque

class Codec:
    def serialize(self, root):
        if root == None: return ""
        queue = deque()
        queue.append(root)
        res = []
        while len(queue) > 0:
            n = len(queue)
            validNext = False
            for i in range(n):
                node = queue.popleft()
                if node == None:
                    res.append("#")
                    continue
                res.append(str(node.val))
                queue.append(node.left)
                queue.append(node.right)
                if node.left != None or node.right != None:
                    validNext = True
            if validNext == False: break
        return ",".join(res)

    def deserialize(self, data):
        if data == "": return None

        data_arr = data.split(",")
        root = TreeNode(data_arr.pop(0))
        queue = deque()
        queue.append(root)

        while len(queue) > 0:
            node = queue.popleft()
            if node == None: continue
            if len(data_arr) == 0: continue
            left_el = data_arr.pop(0)
            right_el = data_arr.pop(0)
            
            if left_el != "#":
                node.left = TreeNode(left_el)
            queue.append(node.left)

            if right_el != "#":
                node.right = TreeNode(right_el)
            queue.append(node.right)
        
        return root
        


# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))