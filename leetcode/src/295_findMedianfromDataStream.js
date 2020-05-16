/*
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 

Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 

Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?
If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

*/

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
    this.length = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype.addNum = function(num) {
  if(this.length === 0){
    this.minHeap.insert(num);
    this.length++;
    return;
  }

  this.minHeap.insert(num);
  this.length++;

  if (this.minHeap.array.length - this.maxHeap.array.length > 1){
    this.maxHeap.insert(this.minHeap.removeMin());
  }

  if (this.maxHeap.array.length !== 0 && this.minHeap.array[0] < this.maxHeap.array[0]) {
    let valFromMin = this.minHeap.removeMin();
    let valFromMax = this.maxHeap.removeMax();
    this.minHeap.insert(valFromMax);
    this.maxHeap.insert(valFromMin);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if(this.length === 0) return 0;
  if(this.length % 2 === 0){
    return ((this.minHeap.array[0] + this.maxHeap.array[0]) / 2.0);
  } else {
    return this.minHeap.array[0];
  }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


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
        if(idx === 0) return;

        let parentIdx = this.getParentIdx(idx);
        if (this.array[idx] < this.array[parentIdx]) {
            [ this.array[idx], this.array[parentIdx] ] = [ this.array[parentIdx], this.array[idx] ]; 
        }

        this.siftUp(parentIdx);
    }

    removeMin() {
        if(this.array.length === 0) return null;
        if(this.array.length === 1) return this.array.pop();

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

        if(leftChild === undefined) leftChild = Infinity;
        if(rightChild === undefined) rightChild = Infinity;

        if(this.array[idx] < leftChild && this.array[idx] < rightChild) return;

        let swapIdx;
        if(leftChild < rightChild) {
            swapIdx = leftChildIdx;
        } else {
            swapIdx = rightChildIdx;
        }

        [ this.array[idx], this.array[swapIdx] ] = [ this.array[swapIdx], this.array[idx] ];
        this.siftDown(swapIdx);
    }
}

class MaxHeap {
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
    return Math.floor((idx - 1) / 2); // Need to check the solution :::)
  }

  insert(value) {
    this.array.push(value);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 0) return;

    let parentIdx = this.getParentIdx(idx);
    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [
        this.array[idx],
        this.array[parentIdx],
      ];
    }
    this.siftUp(parentIdx);
  }

  removeMax() {
    if (this.array.length === 0) return null;
    if (this.array.length === 1) return this.array.pop();

    const max = this.array[0];
    this.array[0] = this.array.pop();
    this.siftDown(0);
    return max;
  }

  siftDown(idx){
    let leftChildIdx = this.getLeftChildIdx(idx);
    let rightChildIdx = this.getRightChildIdx(idx);
    let leftChild = this.array[leftChildIdx];
    let rightChild = this.array[rightChildIdx];

    if (leftChild === undefined){
        leftChild = -Infinity;
    }

    if (rightChild === undefined) {
    rightChild = -Infinity;
    }

    if (this.array[idx] > rightChild && this.array[idx] > leftChild ) return ;
    let swapIdx;
    if (rightChild < leftChild){
        swapIdx = leftChildIdx;
    } else {
        swapIdx = rightChildIdx;
    }
    [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
    this.siftDown(swapIdx);
  }
}