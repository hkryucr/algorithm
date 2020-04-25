function dijkstras(graph, source){
    let distance = {};

    for(let node in graph){
        distance[node] = Infinity;
    }

    distance[source] = 0;

    let unvisited = new Set (Object.keys(graph));
    let previous = {};

    while( unvisited.size > 0 ){
        let curNode = minDistanceNode(unvisited, distance);
        unvisited.delete(currNode);

        for (let neighbor in graph[curNode]){
            let distanceFromCurToNeigbor = graph[curNode][neighbor];
            let totalNeighborDistance = distance[curNode] + distanceFromCurToNeigbor;

            if (distance[neighbor] > totalNeighborDistance){
                distance[neighbor] = totalNeighborDistance
                previous[neighbor] = curNode;
            }
        }
    }



    return { distance, previous };
}

function minDistanceNode(nodes, distance){
    return Array.from(nodes).reduce((minNode, node) => (distance[node] < distance[minNode] ? node : minNode));
}

let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

dijkstras(graph, 'a');
