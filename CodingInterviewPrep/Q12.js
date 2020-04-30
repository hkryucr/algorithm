/**
 * Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, 
the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.


Node { val: 1,
        neighbor: [
            Node {
                val: 2,
                neighbor: [1,3,]
            },
            Node: {
              val : 4,
              neighrbor: [1,3]  
            }]}
Node { val: 1,
        neighbor: [2,4]}

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Example 2:
                idx = 0 => val = 1
Input: adjList = [[]] (Node)
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

Example 3:
Input: adjList = [] (Node)
Output: []
Explanation: This an empty graph, it does not have any nodes.

Example 4:
Input: adjList = [[2],[1]]
Output: [[2],[1]]

Node {val: 1,
neihbor: [
    Node{
        val: 2,
        neighrbor: [
            ....
        ]
    }
]}
 */

 /**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(node === null) return [];

    let weakMap = new WeakMap();
    let root = new Node(node.val);

    weakMap.set(node, root);
    let queue = [];
    queue.push(node);

    while(queue.length > 0){
        const curNode = queue.shift();
        // if(weakMap.has(curNode)) continue;
        let dupNode = weakMap.get(curNode);
        
        let neighbors = curNode.neighbors;
        for(let i = 0; i < neighbors.length; i++){
            let curNeighborNode = neighbors[i];
            if(weapMap.has(curNeighborNode)) continue;
            queue.push(curNeighborNode);
            let newNeighborNode = new Node(curNeighborNode.val);
            dupNode.neighbors.push(newNeighborNode);
            weapMap.set(curNeighborNode, newNeighborNode);
        }
    }

    return root;
};

class Solution {
    public Node cloneGraph(Node node) {
        if(node==null) return null;
        Queue<Node> q = new LinkedList<>();
        HashMap<Node, Node> visited = new HashMap<>();
        q.offer(node);
        visited.put(node, new Node(node.val, new ArrayList()));

        while(!q.isEmpty()){
            int qsize = q.size();
            for(int i = 0; i < qsize; i++){
                Node popNode = q.poll();
                for(Node eachNeigh: popNode.neighbors){
                    if(!visited.containsKey(eachNeigh)){
                        visited.put(eachNeigeh, new Node(eachNeigh.val, new ArrayList<>()));
                        q.offer(eachNeigh);
                    }
                    visited.get(popNode).neighbors.add(visited.get(eachNeigh));
                }
            }
        }
        return visited.get(node);
    }
}