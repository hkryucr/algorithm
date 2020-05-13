/*
92. Reverse Linked List II

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
1 ->      4 -> 3 -> 2 -> 5

1->2 

[1, 2]
*/

function reverseBetween(head, m, n) {
    
    let i = 1;
    let current = head;
    while (i + 1 < m) {
        i++;
        current = current.next;
    }
    let rest = current.next; // current 1 rest = 2
    current.next = null // current.next = null
    let prev = null;
    let currentEl = rest; // currentEl = rest = 2
    let nextEl = rest.next;
    let startReverse = rest;
    while (nextEl !== null && i < n) {
        i++
        currentEl.next = prev;
        prev = currentEl
        currentEl = nextEl;
        nextEl = currentEl.next;
    }
    currentEl.next = null
    current.next = rest;
    startReverse.next = nextEl;
    return head;
}