/*
1192. Critical Connections in a Network
Share
There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.



Example 1:



Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.


Constraints:

1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections.

*/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
    let ids = new Array(n).fill(-1);
    let lowLinks = new Array(n).fill(-1);

    let graph = [];

    for (let i = 0; i < connections.length; i++) {
        let valueOne = connections[i][0]
        let valueTwo = connections[i][1]
        if (graph[valueOne] === undefined) graph[valueOne] = [];
        graph[valueOne].push(valueTwo);
        if (graph[valueTwo] === undefined) graph[valueTwo] = [];
        graph[valueTwo].push(valueOne);
    }

    let result = [];
    let rank = 0;

    for (let i = 0; i < n; i++) {
        if (ids[i] === -1) {
            DFS(i, i);
        }
    }

    function DFS(curNode, prevNode) {
        ids[curNode] = rank;
        lowLinks[curNode] = ids[curNode];
        rank++;

        let neighbors = graph[curNode];
        for (let i = 0; i < neighbors.length; i++) {
            let curNeighbor = neighbors[i];

            if (curNeighbor === prevNode) continue;

            if (ids[curNeighbor] === -1) {
                DFS(curNeighbor, curNode);
                lowLinks[curNode] = Math.min(lowLinks[curNode], lowLinks[curNeighbor]);

                if (lowLinks[curNeighbor] > ids[curNode]) {
                    result.push([curNode, curNeighbor]);
                }

            } else {
                lowLinks[curNode] = Math.min(lowLinks[curNode], lowLinks[curNeighbor]);
            }
        }
    }
    return result;;
}

