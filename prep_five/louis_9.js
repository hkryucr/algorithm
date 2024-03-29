/*
817. Linked List Components

We are given head, the head node of a linked list containing unique integer values.

We are also given the list G, a subset of the values in the linked list.

Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.

Example 1:

Input:
head: 0->1->2->3
G = [0, 1, 3]
Output: 2
Explanation:
0 and 1 are connected, so [0, 1] and [3] are the two connected components.
Example 2:

Input:
head: 0->1->2->3->4
G = [0, 3, 1, 4]
Output: 2
Explanation:
0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.

Note:
If N is the length of the linked list given by head, 1 <= N <= 10000.
The value of each node in the linked list will be in the range [0, N - 1].
1 <= G.length <= 10000.
G is a subset of all values in the linked list.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */

var numComponents = function (head, G) {
    const vals = new Set()
    for (var i = 0; i < G.length; i++) {
        vals.add(G[i])
    }
    // const components = []
    // let currentComponent = []

    let count = 0
    foundComponent = false
    while (head) {
        if (vals.has(head.val)) {
            if (!foundComponent) {
                foundComponent = true
                count++
            }
        } else {
            foundComponent = false
        }
        head = head.next
    }
    return count
};
// 0->1->3->4->5
// G = [0, 5]
// 0
// 1 count is 1
// 3 count is 2
// 4 count is 3