class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (this.root === null) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }

  searchRecur(val, root = this.root) {
    if(!root) return false;

    if(root.val === val){
        return true;
    } else if(root.val < val){
        return this.searchRecur(val, root.right);
    } else {
        return this.searchRecur(val, root.left);
    } 
  }

  searchIter(val){
    let root = this.root;
    if (!root) return false;

    while(root){
        if(root.val === val){
            return true;
        } else if(root.val < val){
            root = root.right;
        } else {
            root = root.left;
        }
    }
    return false;
  }
}

module.exports = {
    TreeNode,
    BST
};