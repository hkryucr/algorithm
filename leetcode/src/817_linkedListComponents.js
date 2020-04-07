/*
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
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
// Create a sigly-linked list by using array
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }
  add (val){
    const nodeToAdd = new Node(val);
    let nodeToCheck = this.head;
    if (!nodeToCheck){
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    while (nodeToCheck.next){
      nodeToCheck = nodeToCheck.next;
    }
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }
  insertArr(arr, list){
    for (let i=0; i<arr.length; i++){
      list.add(arr[i]);
    }
    return list;
  }
}

// Create a sample list
let list1 = new LinkedList();
list1.insertArr([0,1,2,3], list1);

const numComponents = (head, G) => {
  let numberOfComponents = 0;
  let sortedArr = [];
  
  // search for the node value in the array
  while(head){
    if (G.includes(head.val)){
      // if the value is a new component, increase the num of components;
      if (sortedArr.length == 0){
        numberOfComponents++;
        sortedArr.push(head.val);
      }
      //start finding next value in the list
      head = head.next;
    } else {
      sortedArr = [];
      head = head.next;
    }
  }
  return numberOfComponents;
};
