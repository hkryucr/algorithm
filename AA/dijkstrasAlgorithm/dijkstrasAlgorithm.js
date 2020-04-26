// The goal -> determin the shortest distance from the source node to every other nodes

/*
// 1) take an object as an argument that represents the distance between source node and its neighbor(s).
// 2) create an object that represents the smallest distance between the source and every node in the graph.
//     -initial setting should be like this: (sourcenNode = 0, others: Infinity)
// let distanceSumFromSource = { 'a': 0, 'b': Infinity, 'c': Infinity, 'd': Infinity, 'e': Infinity, 'f': Infinity };

// 3) Create a set that represents unvisited nodes.
//     - every node at the beginning)

4)  iterate with while loop until unvisited is empty
    1) find the smallest distacne node at the current situation among unvisited nodes, also assign it as curNode
    using this:
    1-1) minimumDistance that returns the current minimum distance node among unvisited
    - should take distance object and unvisited set as arguments

    2) delete curNode in unvisitied set

    3) update curNode's neighbor nodes:
        0) find neighbors of current node
        1) calculate neighbornodes (using graph[curNode][neighborNode] ) and update (curNode + hashResult) (smaller one)

    ** previous node after we finish this part
        3
  *a(0)* -> b(infinity)
   2 \               \ 1
      > c(infinity) -> d(Infinity) (5)
                     3   
*/

function dijkstras(graph, source) {
    let distanceSumFromSource = {};
    for(let node in graph){
        distanceSumFromSource[node] = Infinity;
    }
    distanceSumFromSource[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let prev = {};

    while(unvisited.size > 0){
        let curNode = minimumDistance(unvisited, distanceSumFromSource);
        unvisited.delete(curNode);

        let neighbors = Object.keys(graph[curNode]);
        for(let i = 0; i < neighbors.length; i++){
            let curNeighbor = neighbors[i];
            let curSum = distanceSumFromSource[curNeighbor]; //currently infinity or some other value
            let newSum = distanceSumFromSource[curNode] + graph[curNode][curNeighbor];
            if(curSum > newSum){
                distanceSumFromSource[curNeighbor] = newSum;
                prev[curNeighbor] = curNode;
            }
        }
    }

    return {distanceSumFromSource, prev};
}

function minimumDistance(unvisited, distanceSumFromSource){
    let nodesArr = Array.from(unvisited);
    let minNode = nodesArr[0];
    for(let i = 1; i < nodesArr.length; i++){
        if (distanceSumFromSource[minNode] > distanceSumFromSource[nodesArr[i]]){
            minNode = nodesArr[i];
        }
    }
    return minNode;
}

let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

let { distanceSumFromSource, prev } = dijkstras(graph, 'a');
// "a" -> "e"
let curNode = "e"
let result = "e"
while(curNode !== "a"){
    result += prev[curNode];
    curNode = prev[curNode] 
}
