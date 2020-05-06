/**
369., lus One Linked List

Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

Input: [1,2,3]
Output: [1,2,4]

L1 = 1->2->3 (123)
+1
L2 = 1->2->4 (124)

9->9=>9 
1->0->0->0

time O(n)
space O(n)
 */

function plusOne(head){
    if(!head) return new ListNode(1);
    // dfs returns value of 1 or 0;
    if (dfs(head) === 1) {
      let newHead = new ListNode(1);
      newHead.next = head;
      return newHead;
    } else {
      return head;
    }
}

function dfs(node) {
  if (!node) return 1;
  let bottom = dfs(node.next);
  let curSum = node.val + bottom; //10
  if (curSum === 10) {
    node.val = 0;
    return 1;
  } else {
    node.val = curSum;
    return 0;
  }
}
/*
head = 0->0=> 0 

 ---- > 9 +1 => 10 

 1) go deep to the tail node
 2) cal -> val 
    - if sum is more than 10 -> return 1
 3)  sum = prevNode(9) + its recursive value
helper(node)

-> 

*/


// [1,1,2,3,4,45,5,6,6,4,4,4,3,3,22]
// [1,1,2,2,34,4,55,4,3,3] = b 

// set <-b
// while iterating the first arr
// hash {
//     1: 0
//     3: 5
//     ..
// }

// second for second arr
// -> [1, 1]

// union of arrays
