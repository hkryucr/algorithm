function inOrderArray(root, tree = []) {
    // if(!root) return tree;
    // inOrderArray(root.left, tree);
    // tree.push(root.val)
    // inOrderArray(root.right, tree);
    // return tree;

    /*
      A
    B    C
  D  E    F
null  T
[D, B, E, A, C, F]
stack = [A, B, D]
tree = [D, B, E, A]
*/
    let stack = [];

    while(root || stack.length > 0){
        // stack.push(root);
        // find left node until you can't find it
        if(root){
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            tree.push(root.val);
            root = root.right;
        }
    }
    return tree;
}

function postOrderArray(root, tree = []) {
    // if(!root) return tree;
    // postOrderArray(root.left, tree);
    // postOrderArray(root.right, tree);
    // tree.push(root.val);
    // return tree;
    /*
      A
    B    C
  D  E    F
    */
    //[D, E, B, F, C A]
    // tree = [D, E]
    // stack = [A,  ]
    // set = {B}

    let stack = [];
    let pSet = new Set;

    while(root || stack.length > 0){
        if(root){
            stack.push(root);
            root = root.left; //null
        } else {
            root = stack.pop(); // E
            if(!pSet.has(root) && root.right) {
                pSet.add(root);
                stack.push(root);
                root = root.right; // E
            } else {
                tree.push(root.val)
                if(pSet.has(root)){
                    root = null;
                } else {
                    root = root.right;
                }
            }
        }
    }

    return tree;
}


function preorderTraversal(root, tree = []) {
    let stack = [];
    while(root || stack.length > 0){
        if(root){
            tree.push(root.val);
            stack.push(root);
            root = root.left;   
        } else {
            root = stack.pop(); // C
            root = root.right;
        }
    }
    return tree;
}


module.exports = {
    inOrderArray,
    postOrderArray
};
/*

      A
    B    C
  D  E    F

[D, B, E, A, C, F]

*/