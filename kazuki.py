'''
We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

Output: [7,4,1]

Explanation: 
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.

Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.

Note:

The given tree is non-empty.
Each node in the tree has unique values 0 <= node.val <= 500.
The target node is a node in the tree.
0 <= K <= 1000.

OBSERVATION
in/post
target = 5
k = 2
values = 7, 4, 1
                    9
                    |
                    3
            |               |
            5               1
    |       |               |     \
    6    2                   0       8
        /       \
        7        4

hash table with key=node and value=node's parent
table = {
    9: None
    3: 9
    5: 3
    1: 3
    6: 5
    2: 5
    7: 2
    4: 2
    0: 1
    8: 1
}

helper(node, target, k)
9, 5, 2 -> 3, 5, 2
        -> 9, 5, 0
        -> 1, 5, 0
        -> 5, 5, 2
            -> 6, 5, 1
            -> 2, 5, 1
                -> 7, 5, 0
                -> 4, 5, 0
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

import collections

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, K: int) -> List[int]:
        table = {}
        stack = [[root, None]]
        while stack:
            node, parent = stack.pop()
            table[node] = parent
            if node.left:
                stack.append([node.left, node])
            if node.right:
                stack.append([node.right, node])

        result = []
        queue = collections.deque([target]) # [6 ,2,3]
        visited = set()
        while queue:
            size = len(queue)
            for _ in range(size):
                node = queue.popleft()
                visited.add(node)
                if table[node] and table[node] not in visited:
                    queue.append(table[node])
                if node.left and node.left not in visited:
                    queue.append(node.left)
                if node.right and node.right not in visited:
                    queue.qppend(node.right)
                if K == 0:
                    result.append(node.val)
            K -= 1
        return result