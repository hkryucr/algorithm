/*
24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:

Given head->2->1->3->4, you should return the list as 2->1->4->3.
*/

var swapPairs = function (head) {
    if (head === null)
      return null;
    if (head.next === null ) return head;
    let prevNode = new ListNode("head");
    let currentNode = prevNode;
    currentNode.next = head;

    while(currentNode.next && currentNode.next.next) {
        let tempNext = currentNode.next;
        let tempNextNext = currentNode.next.next;
        tempNext.next = tempNextNext.next;
        tempNextNext.next = tempNext;
        currentNode.next = tempNextNext;
        currentNode = currentNode.next.next;
    }

    return prevNode.next;
}
// Given  2 -> 1 -> 3 -> 4, you should return the list as 2 -> 1 -> 4 -> 3.

var swapPairs = function(head) {
    if (head === null)
        return null;
    if (head.next === null)
        return head;
    
    let currentNode = head;
    let outputHead = currentNode.next
    let adjacentNode;
    let prevNode = null;
    while (currentNode && currentNode.next) {
        adjacentNode = currentNode.next;
        currentNode.next = adjacentNode.next;
        adjacentNode.next = currentNode;
        if (prevNode)
            prevNode.next = adjacentNode;
        prevNode = currentNode;
        currentNode = currentNode.next;
        
    }
    return outputHead;
};

// 1 2 3 4
// 2 1 3 4
// 2 1 4 3