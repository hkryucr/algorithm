/*
There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections 
forming a network where connections[i] = [a, b] represents a connection between servers a and b. 
Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.
Return all critical connections in the network in any order.

Example

output: [[1,3]]

1 - 2
| \ |
3   0

0 - 1 - 3
  \ |
    2 
    
{ 1: [0,2,3] 
  2: [0,1],
  0: [1,2]
  3: [1]}
 
0 - 1 - 2 - 3 - 4
{ 0: [1],
  1: [0],
  2: [3],
  3: [2,4]}
 
0   1
 \  |
    2

{ 0 : [,2],   whether 0 can be a starting point and traverse to traverse another node (0,1)
  1:  [,2],
  2:  [0,1]}

origin - destination
delete (3) => starting 3 to find 3 back - can't come back
0) create output Arr
1) create adjacensy list 
                idx (origin) values in array that index (destinmation)
adjacency list [set()]

2) igterate through connections for every node
-> curNode = [1,2]
-> delete its according adjacency list node 
after deleting its nodes
-> traverse the adjacency list from (1) until it finds 2 back.
-> if it;s found -> return false
-> if can't return true
if( its true) => add this node [ 1, 2] into arr

3) return arr;
*/
/*
0 - 1 - 3
  \ |
    2 
{ 1: [0,2,3] 
  2: [0,1],
  0: [1,2]
  3: [1]}
  n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
*/

function network(n, connections) {
    let output = [];
    let adj = [];
    // build adjacency list
    for (let i = 0; i < connections.length; i++) {
        let curNode = connections[i];
        let [x, y] = curNode;
        if (adj[x] === undefined) adj[x] = new Set();
        if (adj[y] === undefined) adj[y] = new Set();
        adj[x].add(y);
        adj[y].add(x);
    }

    for (let i = 0; i < connections.length; i++) {
        let curNode = connections[i];
        let [x, y] = curNode;
        adj[x].delete(y);
        adj[y].delete(x);

        if (isCycle(x, y, adj)) {
            output.push(curNode);
        }

        adj[x].add(y);
        adj[y].add(x);

    }

    return output;
}

function isCycle(x, y, adj, set = new Set()) {
    if (x === y) return true;
    if (set.has(x)) return false;
    set.add(x);
    let curSet = adj[x];
    if (curSet === undefined) return false;

    let curArr = Array.from(curSet);
    for (let i = 0; i < curArr.length; i++) {
        let nextX = curArr[i];
        if (isCycle(nextX, y, adj)) return true;
    }
    return false;
}
let n = 4;
let connections = [[0, 1], [1, 2], [2, 0], [1, 3]];

console.log(network(n, connections));










