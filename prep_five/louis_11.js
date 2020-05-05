/*
138. Copy List with Random Pointer

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
Example 1:

Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:

Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:

Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
Example 4:

Input: head = []
Output: []
Explanation: Given linked list is empty (null pointer), so return null.
*/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// Input: head = [[1, 1], [2, 1]]
// index = 0 
// new Node(1)
// it's random => index 1 

// Output: [[1, 1], [2, 1]]


function copyRandomList(head) {
    // const nodeIndicesCopy = new WeakMap()
    const nodeIndices = new WeakMap()
    // const nodesToRandomIdx = new WeakMap()
    const nodes = []
    let current = head
    let copy;
    let i = 0;

    while (current !== null) {
        copy = new Node()
        copy.val = current.val
        nodes.push(copy)
        // nodeIndicesCopy.set(copy, i)
        nodeIndices.set(current, i)
        current = current.next
        i++;
    }

    current = head
    while (current.next !== null) {
        let currentCopy = nodeIndices.get(current)
        let randomIdx = nodeIndices.get(current.random)
        if (randomIdx !== null) {
            currentCopy.random = nodes[randomIdx]

        } else {
            currentCopy.random = null
        }
        // copy.random = nodes[randomIdx]
        current = current.next
    }
    let start = nodes[0]
    for (var i = 1; i < nodes.length; i++) {
        start.next = nodes[i]
        start = nodes[i]
    }

    return nodes[0]
}