/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

const addTwoNumbers = function (l1, l2) {
    let curNode = l1;
    let prevSum = 0;

    while (l1 !== null || l2 !== null || prevSum === 1) {
        let currentSum;

        if (l1 === null && l2 === null) {
            currentSum = prevSum;
        } else if (l1 === null) {
            currentSum = l2.val + prevSum;
        } else if (l2 === null) {
            currentSum = l1.val + prevSum;
        } else {
            currentSum = l1.val + l2.val + prevSum;
        }

        prevSum = 0;

        if (currentSum >= 10) {
            prevSum = 1;
            currentSum %= 10;
        }

        l1.val = currentSum;

        if (!l1.next) {
            if ((l2 && l2.next) || prevSum === 1) {
                let newNode = new ListNode(0);
                l1.next = newNode;
            }
        }

        l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return curNode;
}