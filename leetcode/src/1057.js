/**
On a campus represented as a 2D grid, there are N workers and M bikes, with N <= M. 
Each worker and bike is a 2D coordinate on this grid.
Our goal is to assign a bike to each worker. 
Among the available bikes and workers, 
we choose the (worker, bike) pair with the shortest Manhattan distance between each other,
and assign the bike to that worker. 
 (If there are multiple (worker, bike) pairs with the same shortest Manhattan distance,
  we choose the pair with the smallest worker index; 

  if there are multiple ways to do that, we choose the pair with the smallest bike index). 
  We repeat this process until there are no available workers.

The Manhattan distance between two points p1 and p2 is Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.

Return a vector ans of length N, where ans[i] is the index (0-indexed) of the bike that the i-th worker is assigned to.

Example 1:

Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
Output: [1,0]
Explanation:
Worker 1 grabs Bike 0 as they are closest (without ties), and Worker 0 is assigned Bike 1. So the output is [1, 0].

Example 2 :
Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1], [1,0],[2,2],[2,1]]
Output: [0,2,1]
Explanation: 
Worker 0 grabs Bike 0 at first. Worker 1 and Worker 2 share the same distance to Bike 2, 
thus Worker 1 is assigned to Bike 2, and Worker 2 will take Bike 1. So the output is [0,2,1].


Naive solution -> workers - m nbikes - n => O(n * m);

As the question states, there are n workers and m bikes, and m > n.
We are able to solve this question using a greedy approach.

initiate a priority queue of bike and worker pairs. The heap order should be Distance ASC, WorkerIndex ASC, Bike ASC
Loop through all workers and bikes, calculate their distance, and then throw it to the queue.
Initiate a set to keep track of the bikes that have been assigned.
initiate a result array and fill it with -1. (unassigned)
poll every possible pair from the priority queue and check if the person already got his bike or the bike has been assigned.
early exist on every people got their bike.
 */

/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
//  public int[] assignBikes(int[][] workers, int[][] bikes) {
var assignBikes = function (workers, bikes) {
    if (workers.length === 0) return [];
    if (bikes.length === 0) return [];

    let used = new Set();
    let result = [];

    for (let i = 0; i < workers.length; i++) {
        // let curWorker = workers[i];
        let [x1, y1] = workers[i];
        let minDis = Infinity;
        let minIdx;
        for (let j = 0; j < bikes.length; j++) {
            if (used.has(j)) continue;
            // let curBike = bikes[j];
            let [x2, y2] = bikes[j];
            let distance = Math.abs(x2 - x1) + Math.abs(y2 - y1);
            if (distance < minDis) {
                minDis = distance;
                minIdx = j;
            }
        }
        used.add(minIdx);
        result.push(minIdx);
    }
    return result;
};

const workers = [[0, 0], [1, 1], [2, 0]];
const bikes = [[1, 0], [2, 2], [2, 1], [1, 0], [2, 2], [2, 1]];
// console.log(assignBikes())
