/*
There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest 
price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph looks like this:


The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.
Example 2:
Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph looks like this:


The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.
Note:

The number of nodes n will be in range [1, 100], with nodes labeled from 0 to n - 1.
The size of flights will be in range [0, n * (n - 1) / 2].
The format of each flight will be (src, dst, price).
The price of each flight will be in the range [1, 10000].
k is in the range of [0, n - 1].
There will not be any duplicated flights or self cycles.

*/

// [[0,     1,           100]]
//   start  destination  price
/*
    1) construct a Node class
    2) construct a graph of Nodes detailing all possible flight routes
*/

var findCheapestPrice = function (n, flights, src, dst, K) {
    let graph = createGraph(n, flights);
    // To keep track of all nodes unvisited, store in a set
    let unvisited = new Set(Object.keys(graph));
    
}

class Node{
    constructor(val){
        this.val = val;
        this.neighbors = [];
    }
}

function createGraph(n, flights){
    //construct object of key-value pairs (starting city: destination)
    let nodes = {};

    for(let i = 0; i < n; i++){
        //use number of flights, n, to determine number of nodes to construct for graph
        //if n = 4 flights, create 4 nodes for the graph
        nodes[i] = {};
    }

    //iterate thru flights array to access starting city, destination, and price
    //flights = [[0, 1, 300], [1, 2, 400]]; flights[[u, v, w]]
    flights.forEach(([u, v, w]) => {
        //set starting city, u, as key in nodes object with value of destination and price as array
        nodes[u][v] = w;
    })

    return nodes;
}

let test1 = [3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1]; //200
console.log(findCheapestPrice(...test1));
let test2 = [3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0]; // 500
console.log(findCheapestPrice(...test2));
let test3 = [4, [[0, 1, 1], [0, 2, 5], [1, 2, 1], [2, 3, 1]], 0, 3, 1]; // 6
console.log(findCheapestPrice(...test3));
