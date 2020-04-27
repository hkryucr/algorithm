/*
297. Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, 
or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. 
You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
Example: 

You may serialize the following tree:

    1          <- 0 
   / \     
  2   3        <- 1, 2    left child -> ((2*parent + 1; /2x+1
     / \                  right child -> (2*parent + 2) ;   /2x+2
    4   5      <- 5, 6
   /     \
   3        7
  3            <- 
12345

1
/
2 3
  
as "[1,2,3,null,null,4,5,null,null,null,null,3 ]"

Clarification: The above format is the same as how LeetCode serializes a binary tree. 
You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
Note: Do not use class member/global/static variables to store states. 
Your serialize and deserialize algorithms should be stateless.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var serialize = function(root) {
    let storage = [];
    let queue = [];
    queue.push([root, 0]);
    
    while(queue.length > 0){
        let [curNode, idx] = queue.shift();
        storage[idx] = curNode.val;
        if (curNode.left){
            let leftChild = curNode.left;
            queue.push([leftChild, 2*idx+1]);
        }
        if (curNode.right) {
            let rightChild = curNode.right;
            queue.push([rightChild, 2*idx+2]);
        }
    }

    for(let i = 0; i < storage.length; i++){
        if(storage[i] === undefined) storage[i] = null;
    }

    return JSON.stringify(storage);
}

let treeInput = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right:{
        val: 3,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
    }
}

console.log(serialize(treeInput));

var deserialize = function(data) {
    let inputArr = JSON.parse(data);
    let hash = {};
    let root = null;
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i] === null) continue;
        let curNode = new TreeNode(inputArr[i]);
        if(i === 0){
            root = curNode;
        } else {
            let parentIdx = Math.floor((i-1)/2);
            let parentNode = hash[parentIdx];
            if(i % 2 !== 0) { // 0 1 2 3 4  
                parentNode.left = curNode;
            } else {
                parentNode.right = curNode;
            }
        }
        hash[i] = curNode;
    }

    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

