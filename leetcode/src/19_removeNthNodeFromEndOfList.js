/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// two different ways
var removeNthFromEnd = function (head, n) {
  let early = head;
  let late = head;

  for (let i = 0; i < n; i++) {
    early = early.next;
  }
  if (!early) return late.next;

  while (early.next) {
    early = early.next;
    late = late.next;
  }

  late.next = late.next.next;

  return head;

  //     if(!head) return head;
  //     if(!head.next && n===1) return null;

  //     let arr = [];
  //     let node = head;
  //     // let i = 0 ;
  //     while(node){
  //         arr.push(node);
  //         node = node.next;
  //     }

  //     let last = arr.length; //4
  //     let taget = last - n;
  //     let prev = last - n - 1;
  //     let next = last - n + 1;

  //     if(prev < 0){
  //         return arr[next];
  //     }
  //     let prevNode = arr[prev];
  //     if(n === 1){
  //         prevNode.next = null;
  //         return head;
  //     } else {
  //         let nextNode = arr[next];
  //         prevNode.next = nextNode;
  //         return head;
  //     }
};
