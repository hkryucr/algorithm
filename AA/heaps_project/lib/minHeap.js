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

const heap = new MinHeap();

heap.insert(8);
heap.insert(2);
heap.insert(3);
heap.insert(9);
heap.insert(0);
heap.insert(6);
heap.insert(-1);

const inputArr = [9, 1, 2, 3, 4, 10, 5, 7, 8, -1, -3];
// sort iputArr by using HEAP structure

// function heapSort(array) {
//   let maxHeap = new MinHeap();

//   for (let i = 0; i < array.length; i++) {
//     maxHeap.insert(array[i]);
//   }

//   let resultArr = [];

//   while (maxHeap.array.length > 0) {
//     resultArr.push(maxHeap.removeMin());
//   }

//   return resultArr;
// }

function minHeapSort(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i)
    }

    for(let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(array, endOfHeap, 0);
        heapify(array, endOfHeap, 0);
    }
    return array;
}

function swap(array, i, j) {
    [ array[i], array[j] ] = [ array[j], array[i] ]
}

function heapify(array, length, pIdx) {
    let leftChildIdx = pIdx * 2 + 1;
    let rightChildIdx = pIdx * 2 + 2;
    let leftChild = (leftChildIdx >= length) ? Infinity : array[leftChildIdx];
    let rightChild = (rightChildIdx >= length) ? Infinity : array[rightChildIdx];

    if(array[pIdx] < leftChild && array[pIdx] < rightChild) return;

    let swapIdx;
    if (leftChild < rightChild) {
        swapIdx = leftChildIdx;
    } else {
        swapIdx = rightChildIdx;
    }

    swap(array, pIdx, swapIdx);
    heapify(array, length, swapIdx);
}

console.log(minHeapSort(inputArr));

