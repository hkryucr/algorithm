'''
23. Merge k Sorted Lists
Given an array of linked-lists lists, each linked list is sorted in ascending order.

Merge all the linked-lists into one sort linked-list and return it. 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.

'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        # print(lists)
        if lists == None or len(lists) == 0:
            return None
        if len(lists) == 1:
            return lists[0]
        left = 0
        right = len(lists)-1
        mid = int((len(lists)-1)/2)
        return self.merge(self.mergeKLists(lists[:mid+1]), self.mergeKLists(lists[mid+1:]))

    def merge(self, l1, l2):
        head = ListNode(float('-inf'))
        node = head
        while l1 and l2:
            if l1.val < l2.val:
                node.next = l1
                l1 = l1.next
            else:
                node.next = l2
                l2 = l2.next
            node = node.next                
        if l1:
            node.next = l1
        else:
            node.next = l2
        return head.next
            
            

# import heapq
# class Solution:
#     def mergeKLists(self, lists: List[ListNode]) -> ListNode:
#         if lists == None or len(lists) == 0:
#             return None
        
#         heap_lists = []
#         for (i, node) in enumerate(lists):
#             if node == None:
#                 continue
#             heapq.heappush(heap_lists, (node.val, i, node))
        
#         head = ListNode(float("-inf"))
#         node = head
        
#         while len(heap_lists):
#             (cur_val, idx, cur_node) = heapq.heappop(heap_lists)
#             if cur_node.next != None:
#                 heapq.heappush(heap_lists, (cur_node.next.val, idx, cur_node.next))
#             node.next = cur_node
#             cur_node.next = None
#             node = node.next
#         return head.next
        
        
# class Solution:
#     def mergeKLists(self, lists: List[ListNode]) -> ListNode:
#         if lists == None or len(lists) == 0:
#             return None
#         head = ListNode(float("-inf"))
#         head_node = head
        
#         while head:
#             (cur_min_node, cur_min_idx) = self.find(lists)
#             if cur_min_node == None:
#                 break
#             head.next = cur_min_node
#             lists[cur_min_idx] = lists[cur_min_idx].next
#             cur_min_node.next = None
#             head = head.next
#         return head_node.next
            
            
#     def find(self, lists):
#         min_node = None
#         min_val = float('inf')
#         min_idx = 0
#         for i, node in enumerate(lists):
#             if node == None:
#                 continue
#             if node.val < min_val:
#                 min_val = node.val
#                 min_node = node
#                 min_idx = i
#         return (min_node, min_idx)