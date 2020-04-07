/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head1 = new ListNode(1);
head1.next = new ListNode(2)
head1.next.next = new ListNode(3)
head1.next.next.next = new ListNode(4)
head1.next.next.next.next = new ListNode(5)

const removeNthFromEnd = (head, n) => {
  // check null value
  if(head == null){
    return head;
  }

  // count the length of the linked list;
  let current = new ListNode(null);
      current.next = head,
      counter = 0;

  while(current.next){
    counter++;
    current = current.next;
  }

  // make it back to the original list;
  current = new ListNode(null);
  current.next = head;
  let temp = current;

  // create a temp pointer to count and modify the target node in the list; 
  while(temp){
    if(counter - n == 0){
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    };
    counter--;
  }

  return current.next;
}
