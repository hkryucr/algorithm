'''
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
'''

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        
        new_root = ListNode(0)
        new_node = new_root
        carry = 0
        
        while l1 or l2:
            l1_val = l1.val if l1 else 0
            l2_val = l2.val if l2 else 0
            new_num = carry + l1_val + l2_val
            carry = new_num / 10
            new_num %= 10
            new_node.next = ListNode(new_num)
            new_node = new_node.next
            
            if l1: l1 = l1.next
            if l2: l2 = l2.next
        if carry != 0:
            new_node.next = ListNode(carry)

        return new_root.next
        