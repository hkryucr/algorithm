/*
206. Reverse Linked List

Reverse a singly linked list.

    Example:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

* Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
*/

var reverseList = function (head) {
    let tempNode = null;
    let prevTempNode;

    while (head) {
        prevTempNode = tempNode; 
        tempNode = head; // set tempnode as currentNode
        head = head.next; // go to next head
        tempNode.next = prevTempNode; // setup tempnode next
    }
    return tempNode;
    // if(!head) return head;
    // const stack = [];
    
    // while(head){
    //     stack.unshift(head);
    //     head.next = head;
    // }

    // for(let i = 0; i < stack.length; i++){
    //     let curNode = stack[i];
    //     if (i === stack.length - 1){
    //         curNode.next = null;
    //         return stack[0];
    //     } 
    //     curNode.next = stack[i+1];
    // }

    
};