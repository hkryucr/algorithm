/*
There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), 
where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? 
If it is impossible, return -1.

Example 1:
Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
Output: 2

Note:

N will be in the range [1, 100].
K will be in the range [1, N].
The length of times will be in the range [1, 6000].
All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.

*/

var networkDelayTime = function (times, N, K) {
    let graph = {};
    let visited = new Set();
    for(let i = 0; i < times.length; i++){
        const [u, v ,w] = times[i]
        if(graph[u] === undefined) graph[u] = {};
        graph[u][v] = w;
        visited.add(u);
        visited.add(v);
    }

    let time = {};
    for (let i = 1; i <= N; i++) {
        time[i] = Infinity;
    }

    time[K] = 0;

    while(visited.size > 0){
        let curNode = minNode(visited, time);
        visited.delete(curNode);
        if (graph[curNode] === undefined) continue;
        let neighbors = Object.keys(graph[curNode]);

        for(let i = 0; i < neighbors.length; i++){
            let curNeighbor = neighbors[i];
            let newTime = graph[curNode][curNeighbor] + time[curNode];
            let oldTime = time[curNeighbor];

            if(newTime < oldTime){
                time[curNeighbor] = newTime;
            }
        }
    }

    let timeArr = Object.values(time);
    let max = -Infinity;
    for(let i = 0; i < timeArr.length; i++){
        if(timeArr[i] === Infinity) return -1;
        max = Math.max(max, timeArr[i]);
    }
    return max;
};

function minNode(visited, time){
    return Array.from(visited).reduce((a,b)=>{
        if(time[a] > time[b]){
            return b
        } else {
            return a
        }
    })
}
const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], N = 4, K = 2;

console.log(networkDelayTime(times, N, K));