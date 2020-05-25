/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let leftHead = new ListNode();
    let rightHead = new ListNode();
    let left = leftHead;
    let right= rightHead;
    let node = head;;
    while(node){
        let next = node.next;
        if(node.val < x){
            left.next = node;
            left = left.next;
        } else {
            right.next = node;
            right = right.
        node.next = null;
        node = next;;
    }

    left.next = rightHead.next;
    return leftHead.next;
};