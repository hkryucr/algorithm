/*
Given an n-ary tree, return the preorder traversal of its nodes' values.
For example, given a 3-ary tree: 

   1
 3 2 4
5 6

Return its preorder traversal as: [1,3,5,6,2,4].

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
  
const preorder = (root) => {
  // Create an array
  let arr = [];
  if (root == null) {return arr}
  // Create a recursive function that passes the tree node;
  function searchChildren(root){
    arr.push(root.val)
    
    // if there's no children => return;
    for (let i = 0; i < root.children.length; i++){
      searchChildren(root.children[i]);
    }
  }  
  searchChildren(root)
  return arr;
};
