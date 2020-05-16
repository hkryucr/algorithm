/*

*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function shortestDistance(rootNode, node1, node2) {
    let LCA = lowestCommonAncestor(rootNode, node1, node2);
    let distance = 0;
    distance += findNode(LCA, node1, 0);
    distance += findNode(LCA, node2, 0);
    return distance;
}

function lowestCommonAncestor(head, node1, node2) {
    // three differetn returning values from lowestCommonAncestor
    if (!head) return null;
    if (head === node1 || head === node2) return head;
    let left = lowestCommonAncestor(head.left, node1, node2) // return either node1 or node2 or null
    let right = lowestCommonAncestor(head.right, node1, node2) // return either node1 or node2 or null
    if (!left && !right) return head; // lowest common ancestor
    return left || right; // return 15
}

function findNode(LCA, node, level) {
    if (!LCA) return null;
    if (LCA === node) return level;
    let left = findNode(LCA.left, node, level + 1);
    let right = findNode(LCA.right, node, level + 1);
    return left || right
}