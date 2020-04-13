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

// const heap = new MaxHeap();
// heap.insert(0);
// heap.insert(3);
// heap.insert(6);
// heap.insert(8);
// heap.insert(2);
// heap.insert(9);

const inputArr = [9,1,2,3,4,10,5,7,8,-1,-3];
// // sort iputArr by using HEAP structure

// function heapSort(array) {
//     let maxHeap = new MaxHeap()
//     for(let i = 0; i < array.length; i++) {
//         maxHeap.insert(array[i]);
//     }

//     let resultArr = [];
//     while(maxHeap.array.length > 0) {
//         resultArr.push(maxHeap.removeMax());
//     }

//     return resultArr;
// }

// console.log(heapSort(inputArr));

function swap(array, i, j){
    [array[i], array[j]] = [array[j], array[i]];
}
// [9,1,2,3,4,10,5,7,8,-1,-3];
function heapify (array, len, pIdx){
    let leftChildIdx = pIdx * 2 + 1;
    let rightChildIdx = pIdx * 2 + 2;
    let leftChild = array[leftChildIdx]
    let rightChild = array[rightChildIdx];

    if(leftChildIdx >= len) leftChild = -Infinity;
    if(rightChildIdx >= len) rightChild = -Infinity;

    if (array[pIdx] > leftChild && array[pIdx] > rightChild) return ;
    let swapIdx;
    if (leftChild < rightChild){
        swapIdx = rightChildIdx;
    } else {
        swapIdx = leftChildIdx;
    }

    swap(array, pIdx, swapIdx);
    heapify(array, len, swapIdx);
}

function heapSort(array){
    for(let i = array.length - 1; i >= 0; i--){
        heapify(array, array.length, i);
    }

    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(array, endOfHeap, 0);
      heapify(array, endOfHeap, 0);
    }

    return array;
}

console.log(heapSort(inputArr));