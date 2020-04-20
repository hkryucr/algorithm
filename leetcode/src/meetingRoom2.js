/*
253. Meeting Room II
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1

Input: [[7,8], [7, 10], [8,10], [8,10], [8,9], [8,10],[9,10], [11,12]]
Output: 3 

any overlapped numbers -> one room -> [0 30], [30 - 31] / same number is fine

two information for each el
-> 1) starting time
-> 2) ending time

starting time < any other ending time
-> need one more room:

* ending time of first el is bigger than starting time of second el
-> increment the number of room

1) sort array based on the starting time
2) iterate through elements 
minimum ending time -> MINHEAP
7,8 -> 8 -> [] -> length 5 one room/ 
[9,10], [10, 11]
*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let maxCount = -Infinity;
  let minHeap = new MinHeap();

  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    while (minHeap.array.length > 0 && minHeap.array[0] <= start) {
      minHeap.removeMin();
    }
    minHeap.insert(end);
    maxCount = Math.max(maxCount, minHeap.array.length);
  }

  return maxCount;
};

class MinHeap {
  constructor() {
    this.array = [];
  }

  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  insert(value) {
    this.array.push(value);
    this.siftUp(this.array.length - 1)
  }

  siftUp(idx) {
    if (idx === 0) return;

    let parentIdx = this.getParentIdx(idx);
    if (this.array[idx] < this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
    }

    this.siftUp(parentIdx);
  }

  removeMin() {
    if (this.array.length === 0) return null;
    if (this.array.length === 1) return this.array.pop();

    let min = this.array[0];
    this.array[0] = this.array.pop();
    this.siftDown(0);
    return min;
  }

  siftDown(idx) {
    let leftChildIdx = this.getLeftChildIdx(idx);
    let rightChildIdx = this.getRightChildIdx(idx);
    let leftChild = this.array[leftChildIdx];
    let rightChild = this.array[rightChildIdx];

    if (leftChild === undefined) leftChild = Infinity;
    if (rightChild === undefined) rightChild = Infinity;

    if (this.array[idx] < leftChild && this.array[idx] < rightChild) return;

    let swapIdx;
    if (leftChild < rightChild) {
      swapIdx = leftChildIdx;
    } else {
      swapIdx = rightChildIdx;
    }

    [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
    this.siftDown(swapIdx);
  }
}