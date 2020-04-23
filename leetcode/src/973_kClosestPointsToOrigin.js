/*
973. K Closest Points to Origin
Medium
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)



Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)


Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
*/
var kClosest = function (points, K) {
    if (points.length === 0) return -1;
    if (points.length === 1) return points[0];
    if (K > points.length) return points;

    let maxHeap = new MaxHeap();

    for (let i = 0; i < points.length; i++) {
        let [curX, curY] = points[i];
        let distance = (curX) * (curX) + (curY) * (curY);
        maxHeap.insert([distance, curX, curY]);
        if (maxHeap.array.length > K) {
            maxHeap.remove();
        }
    }

    let resArr = [];

    while (maxHeap.array.length > 0) {
        let [distacnt, x, y] = maxHeap.remove();
        resArr.push([x, y]);
    }


    return resArr;
};

class MaxHeap {
    constructor() {
        this.array = [];
    }

    insert(arr) {
        this.array.push(arr);
        if (this.array.length !== 1) {
            this.bubbleUp(this.array.length - 1);
        }
    }

    bubbleUp(idx) {
        if (idx === 0) return;
        let parentIdx = Math.floor((idx - 1) / 2);
        let parentArr = this.array[parentIdx];
        if (parentArr[0] < this.array[idx][0]) {
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
        }
        this.bubbleUp(parentIdx);
    }

    remove() {
        if (this.array.length === 0) return null;
        if (this.array.length === 1) return this.array.pop();
        let root = this.array[0];
        this.array[0] = this.array.pop();
        this.bubbleDown(0);
        return root;
    }

    bubbleDown(idx) {
        let curArr = this.array[idx];

        let curDis = curArr[0];
        let leftIdx = ((idx + 1) * 2) - 1;
        let rightIdx = ((idx + 1) * 2);
        let left = (this.array[leftIdx] === undefined) ? [-Infinity] : this.array[leftIdx]; // [dis, x1, y1];
        let right = (this.array[rightIdx] === undefined) ? [-Infinity] : this.array[rightIdx];

        if (left[0] < curDis && right[0] < curDis) return;

        let swapIdx;
        if (left[0] > right[0]) {
            [this.array[idx], this.array[leftIdx]] = [this.array[leftIdx], this.array[idx]];
            swapIdx = leftIdx;
        } else {
            [this.array[idx], this.array[rightIdx]] = [this.array[rightIdx], this.array[idx]];
            swapIdx = rightIdx;
        }

        this.bubbleDown(swapIdx);
    }
}