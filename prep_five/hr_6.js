/*
785. Is Graph Bipartite?
Medium

Given an undirected graph, return true if and only if it is bipartite.

Recall that a graph is bipartite if we can split it's set of nodes 
into two independent subsets A and B such that every edge in the graph 
has one node in A and another node in B.

The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  
Each node is an integer between 0 and graph.length - 1.  
There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation: 
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.

Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]

Output: false
Explanation: 
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.

0: {1,2,3}
1: {0,2}
2: {0.1,3}
3: {0,2}


0: {1,3}
1: {0,2}
2: {1,3}
3: {0,2}

0(r)----1(b) --- 4(r)
| \              |
|              \ |
3(b----2(r) --- 5(b)

0: {1,3}
1: {0,2}
2: {1,3}
3: {0,2}
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// /[[1,2,3], [0,2], [0,1,3], [0,2]]

var isBipartite = function(graph) {
    // starting from 0

    // every step neighbors - > entire neighbors set{}
    // if (finding duplcate - ) if there's duplicate -> return false
    // successfully iterate through all element in the arrayGraph -> return true;
    
    let queue = [0];
    let red = new Set();
    let blk = new Set();
    red.add(0);
    let curRed = false;

    while(queue.length > 0){
        let curArr = [];
        for (let i = 0; i < queue.length; i++){
            let curNode = queue[i];
            visited.add(curNode);
            let curNeighbors = graph[curNode];
            for (let j = 0; j < curNeighbors.length; j++){
                let el = curNeighbors[j];
                if(curRed){
                    if (blk.has(el)){
                        
                    }
                    red.add()
                }
                if (set.has()) return false;
                set.add(curNeighbors[i]);
                curArr.push(curNeighbors[i]);
            }
        }
        curRed = (curRed) ? false : true;

        queue = curArr;
    }

};