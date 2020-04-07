/*
Created a function that converts an array into a binary tree in the order of Breadth First Search
*/
class Node {  
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.root = null;
  }
}
// Post Order Depth 
function buildTreeFromArray (arr){
  // Create a recursive function that add array elements into tree in each level => one iteration means one level up
  function insertLevelOrder (i){
    if (i >= arr.length){
      return null
    } 
    // left child -> 2i +1 && right child 2i+2 
    let leftChild = insertLevelOrder(2*i + 1)
    let rightChild = insertLevelOrder(2*i + 2)
    let current = new Node(arr[i])
    current.left = leftChild;
    current.right = rightChild;
    return current 
  }
  ;   
  // i starts from 0
  return insertLevelOrder(0);
};

// input => const sampleArr = [1,2,3,null,5,6,7,null]
// buildTreeFromArray(sampleArr)