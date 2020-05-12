/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Node = l1;
    let l2Node = l2;
    let l1Str = "";
    let l2Str = "";
    
    while(l1Node){
        l1Str += l1Node.val.toString();
        l1Node = l1Node.next;
    }
    
    while(l2Node){
        l2Str += l2Node.val.toString();
        l2Node = l2Node.next;
    }

    let small = (l1Str.length < l2Str.length) ? l1Str : l2Str;
    let bigger = (l1Str.length < l2Str.length) ? l2Str : l1Str;
    let prevNode = null;
    let carry = 0;

    for(let i = 0; i < bigger.length; i++){
        let b1 = bigger[bigger.length - i -1];
        let s1 = (small.length <= i) ? "0" : small[small.length - i-1];
        let sum = (+b1) + (+s1) + carry;
        
        if(sum >= 10){
            sum %= 10;
            carry = 1;
        } else {
            carry = 0;
        }

        let newNode = new ListNode((sum), null);
        newNode.next = prevNode;
        prevNode = newNode;
    }
    if(carry === 1) prevNode = new ListNode(1, prevNode);
    return prevNode;
};