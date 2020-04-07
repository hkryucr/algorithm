/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

var addTwoNumbers = function(l1, l2) {
    // edge case 
     if (l1 == null || l2 == null){
         return null;
     }
 
     helper(l1, l2, 0);
     return l1;
 }
 
 // create a new function
 function helper(l1, l2, num){
     
     // better to check if next node exist || 
     let sumNodes = l1.val + l2.val + num;
     let digit = 0;
     
     // sumNodes >= 10
     if (sumNodes >= 10){
         digit = 1;
         sumNodes = sumNodes%10;
     }
     
     // change the value to l1.val;
     l1.val = sumNodes;
     
     // l1.next, l2.next deosn't exist;
     if (l1.next == null && l2.next==null){
         if (digit == 0){
             return
         } else {
             const newNode = new ListNode(1);
             l1.next = newNode;
             return
         }        
     } else if (l1.next == null){
         const newNode = new ListNode(0);
         l1.next = newNode;
     } else if (l2.next == null){
         const newNode = new ListNode(0);
         l2.next = newNode;
     }
     // recursion
     helper(l1.next, l2.next, digit);
 }
 