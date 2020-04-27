/*
787. Cheapest Flights Within K Stops
Medium

There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

Now given all the cities and flights, together with starting city src and the destination dst, 
your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph looks like this:

       0
100  /   \ 500
    v     v 
   1   ->  2
       100

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
a [b, c, d]

min(a -> d)
a [c, e, f]
min(
cost(a ->b) + min(c -> d),
cost(a ->b) + min(e -> d),
cost(a ->b) + min(f -> d)
)

// Dijkstra's algorithm
// BFS -> every time find minimum value of costs

*/

var findCheapestPrice = function (n, flights, src, dst, K) {
    const d = {}
    for (let i = 0; i < flights.length; i++) {
        if (Object.keys(d).includes(i)) {
            d[i].push(flights[i])
        } else {
            d[i] = [flights[i]]
        }
    }
    if (K === 0) {
        var edges = d[src];
        var minCost = Infinity
        foundMinCost = false
        for (let i = 0; i < edges.length; i++) {
            if (edges[i][1] === dst) {
                if (edges[i][2] < minCost) {
                    foundMinCost = true;
                    minCost = edges[i][2]
                }
            }
        }
        return foundMinCost ? minCost : -1;
    }

    // if (K === 1) {
    //     var edges = d[src]
    //     if (edges.length === 0) return -1
    //     let minCost = Infinity;
    //     for (let i = 0; i < edges.length; i++) {
    //         if (edges[i][2] < minCost) {
    //             minCost = edges[i][2]
    //         }
    //     }
    //     return minCost;
    // }
    const minCost = Infinity
    var edges = d[src]

    for (let i = 0; i < edges.length; i++) {
        
    }

    

}

