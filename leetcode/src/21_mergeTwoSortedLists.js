/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode (val){
  this.val = val;
  this.next = null;
}

const head1 = new ListNode(1);
head1.next = new ListNode(2)
head1.next.next = new ListNode(4)

const head2 = new ListNode(1)
head2.next = new ListNode(3)
head2.next.next = new ListNode(4)

// Iterative Methods
const mergeTwoLists = (l1, l2) => {

  // check if l1 or l2 are null;
  if (l1 == null && l2 == null){
    return null;
  } else if (l1 == null){
    return l2;
  } else if (l2 == null){
    return l1;
  }

  // create a dummy linked list (head) 
  let dummy = new ListNode(),
      head = dummy;

  // go through all nodes of l1 and l2, compare values, put the smaller value to the dummey list;
  while(l1 != null && l2 != null){
    if(l1.val <= l2.val){
      dummy.next = l1;
      l1 = l1.next
    } else {
      dummy.next = l2;
      l2 = l2.next
    }
    dummy = dummy.next;
  }

  dummy.next = l1 || l2;

  return head.next;
};

// Recursive Method 

// const mergeTwoLists = (l1, l2) => {
//   if (!l1 || !l2){return l1 || l2;}
//   if(l1.val <= l2.val){
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// } 

console.log(mergeTwoLists(head1, head2));