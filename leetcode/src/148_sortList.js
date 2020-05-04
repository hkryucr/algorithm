/*
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

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

function mergeTwo(one, two) {
    var dummy = new ListNode(-1);
    var head = dummy;
    while (one && two) {
        if (one.val < two.val) {
            head.next = one;
            one = one.next;
        } else {
            head.next = two;
            two = two.next;
        }
        head = head.next;
    }
    if (one) head.next = one;
    if (two) head.next = two;
    return dummy.next;
}

function sortList(head) {
    if (!head || !head.next) return head;
    var fast = head, slow = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    var second = slow.next;
    slow.next = null;
    head = sortList(head);
    second = sortList(second);
    return mergeTwo(head, second);
}




// var sortList = function(head) {
//     let root = head;
//     let sorted = true;
//     while(sorted){
//         sorted = false;
//         let tempHead = head;
//         while(head){
//             if(head.next && (head.val > head.next.val)){
//                 [head.val, head.next.val] = [head.next.val, head.val];             
//                 sorted = true;
//             }
//             head = head.next
//         }
//         head = tempHead;
//     };
//     return root;
// };