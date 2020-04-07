/*
Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:

   1
 3 2 4
5 6

Return its postorder traversal as: [5,6,3,2,4,1].
 
Note:

Recursive solution is trivial, could you do it iteratively?

*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

 const tree = {
  "$id":"1",
  "children":[
  {"$id":"2",
      "children":[
        {"$id":"5","children":[],"val":5},
        {"$id":"6","children":[],"val":6}
      ],"val":3},
  {"$id":"3","children":[],"val":2},
  {"$id":"4","children":[],"val":4}
  ],
  "val":1}

// Iterative way - stack
const postorder = (root) => {
  if (root ==null){return [];}
  //Create two arrays
  let data = [],
      stack = [];
  stack.push(root);
  while(stack.length>0){
    let current = stack.pop();
    data.unshift(current.val);
    for (let i = 0; i<current.children.length; i++){
      stack.push(current.children[i]);
    }
  }
  return data;
};
