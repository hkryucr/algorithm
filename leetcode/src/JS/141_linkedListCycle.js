/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


function ListNode (val){
    this.val = val;
    this.next = null;
}

// Create linkedlist circle.
const head1 = new ListNode(3);
head1.next = new ListNode(2)
head1.next.next = new ListNode(0)
head1.next.next.next = new ListNode(-4)
head1.next.next.next.next= head1.next;

const hasCycle = (head) => {
  // check if its null since we are creating slow_p and fast_p;
  if (head == null || head.next == null){return false};

  // Create two pointers 
  let slow_p = head,
      fast_p = head.next;

  // check possible null values
  while(fast_p != null && fast_p.next != null && slow_p != null){
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p == fast_p){
      return true
    }
  }
  return false;
};

