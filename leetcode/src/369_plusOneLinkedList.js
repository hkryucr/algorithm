/**
369. Plus One Linked List

Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

Input: [1,2,3]
Output: [1,2,4]

 */

function plusOne(head) {
    if (!head) return new ListNode(1);
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