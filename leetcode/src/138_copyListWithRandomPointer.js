/**
 * 138. copy list with random pointer
 * A linked list is given such that each node contains an additional random pointer 
 * which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. 
Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, 
or null if it does not point to any node.
 
Example 1:

Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:

Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:

Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

*/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 0
// Input: head = [[1,1],[2,1]]
// Output: [[1, 1], [2, 1]]
// Example 3:
//
//
var copyRandomList = function (head) {
    if (head === null) return null;
    let newNode = new Node(null, null, null);
    let rootDup = newNode;
    let hash = new WeakMap();

    while (head) {
        let dupHead;
        if (hash.has(head)) {
            dupHead = hash.get(head);
        } else {
            dupHead = new Node(head.val, null, null);
        }
        hash.set(head, dupHead);

        let dupRandom
        if (head.random === null) {
            dupRandom = null;
        } else if (hash.has(head.random)) {
            dupRandom = hash.get(head.random);
        } else {
            dupRandom = new Node(head.random.val, null, null);
        }
        dupHead.random = dupRandom;

        if (head.random !== null) {
            hash.set(head.random, dupRandom);
        }

        newNode.next = dupHead;
        newNode = newNode.next;
        head = head.next;
    }

    return rootDup.next;
};

/*

iterate through the linkedlist

node1 -> node2 ->

cNode1 -> cNode2

hash = {
    original node: copyed node
}

1) create hash map (key (original node), value(dup node))
2) dupHead (newNode)
3) at every node,
    1) create a new Node
    2) push key value pair (original node), value(dup node)
    3) if (random node) -> find its dup node and set random pointer into dup node;
    4) dupHead = dupHead.next;
    5) head = head.next;


4) fix the firstNode's random pointer

*/