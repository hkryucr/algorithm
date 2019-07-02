/*
206. Reverse Linked List

Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

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
 * @return {ListNode}
 */

function ListNode(val){
  this.val = val;
  this.next = null;
};

const head1 = new ListNode(1);
head1.next = new ListNode(2)
head1.next.next = new ListNode(3)
head1.next.next.next = new ListNode(4)
head1.next.next.next.next = new ListNode(5)

const reverseListIM = (head) => {
  // Initialize three pointers, 1) 'previousNode' as NULL, 2) 'currentNode' as head, and 3) 'nextNode' as NULL.
  let currentNode = head,
      previousNode = null,
      nextNode = null;

  // Need to visit every node from the start to the end, and during the iteration, each node will be set as a currentNode.  
  // Creating previousNode and nextNode is for temporarily storing linkedlists. The previousNode will store a newly creating reversed linkedlist, and the nextNode will always store currentNode's next node.

    while(currentNode !== null){

      // 2 steps
      // (1) every starting and ending should be to set 1) nextNode = currentNode.next 2) currentNode = nextNode. This is for the next iteration. 
      
      // between step 1) and step 2) above (after storing nextNode as currentNode.next), let's work on previousNode.

      // We need to update previousNode. Since our target is to reverse the linkedlist - such that "null -> 1 -> 2" should be "null<- 1 <- 2", previousNode needs to include the currentNode value but keep its previous values. For instance, if previousNode is null <- 1 and currentNode value is '2', now it's time to include "2" to make previousNode as "null <- 1 <- 2".
      
      // if we don't get scared to use currentNode here as we already saved nextNode for the next iteration, we can simply set currentNode.next as previousNode and make that current node as previousNode.
      
      // Step1
      nextNode = currentNode.next;

      // Step2
      currentNode.next = previousNode;
      previousNode = currentNode
      
      // Step1
      currentNode = nextNode;
    }
  
    return previousNode
};

console.log(reverseListIM(head1));
