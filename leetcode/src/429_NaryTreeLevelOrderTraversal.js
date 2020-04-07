/*
Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:
We should return its level order traversal:

[
     [1],
     [3,2,4],
     [5,6]
]
Note:
The depth of the tree is at most 1000.
The total number of nodes is at most 5000.

*/
const tree = {"$id":"1","children":[{"$id":"2","children":[{"$id":"3","children":[],"val":5},{"$id":"4","children":[],"val":0}],"val":10},{"$id":"5","children":[{"$id":"6","children":[],"val":6}],"val":3}],"val":1}

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */

const levelOrder = (root) => {
  if (root == null){return [];}
  
  let result = []
  result[0]=[];
  result[0].push(root.val)
 
  // resursion
  function levelSearch (root, depth){
    if(root == null){
      return;
    }

    for (let i=0; i < root.children.length; i++){
      if(result[depth] == null){
        result[depth] = [];
      }
      result[depth].push(root.children[i].val);
    }
    depth++;

    for (let i=0; i < root.children.length; i++){
      levelSearch(root.children[i], depth)
    }    
  }
  levelSearch(root, 1)
  
  return result;
}
