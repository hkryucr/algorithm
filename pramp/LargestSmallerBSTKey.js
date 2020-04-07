/*
Largest Smaller BST Key
Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

Analyze the time and space complexities of your solution.

For example:

For num = 17 and the binary search tree below:

alt

Your function would return:

14 since it’s the largest key in the tree that is still smaller than 17.

Constraints:

[time limit] 5000ms
[input] Node rootNode
[output] integer

*/
// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
  
  // Constructor to create a new BST 
  function BinarySearchTree() {
    this.root = null;
  }
  
BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
    // your code goes here
  
    // find the largest key -  currentNode < the answer < num
    /*
    const root = this.root;
    function helper (root, num){
      if (root.key >= num){
        if(root.left){
          return helper(root.left, num);
        } else {
          if(root.parent.key < num){
            return root.parent.key;
          } else {
            return -1
          }
        }
  
      } else if (root.key < num){
        if(root.right){
          return helper(root.right, num)        
        } else {
          return root.key;
        }
      }
    }
    return helper(root, num);  
    */
    
    var result = -1;
    let root = this.root;
    
    while (root != null){
      if(root.key < num){
        result = root.key;
        root = root.right;
      } else {
        root = root.left;
      }
    }
    return result;
  }


// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
    var root = this.root;
  
    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }
  
    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert the new node
    var currentNode = root;
    var newNode = new Node(key);
  
    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
  }
  
  /*********************************************
   * Driver program to test above function     *
   *********************************************/
  
  // Create a Binary Search Tree
  var bst = new BinarySearchTree();
  bst.insert(20);
  bst.insert(9);
  bst.insert(25);
  bst.insert(5);
  bst.insert(12);
  bst.insert(11);
  bst.insert(14);
  
  //var result = bst.findLargestSmallerKey(17);
  var result = bst.findLargestSmallerKey(13);
  
  console.log("Largest smaller number is " + result);