var kSmallestPairs = function(nums1, nums2, k) {
    if (!nums1.length || !nums2.length)
        return [];
            
    let output = [];
    let index1 = 0;
    let index2 = 0;
    output.push([nums1[0], nums2[0]]);
    let remaining = k-1;
    while (remaining) {
        if (index1 === nums1.length-1 && index2 === nums2.length-1)
            break;
        
        if (index1 === nums1.length - 1) {
            output.push([nums1[0], nums2[index2+1]]);
            index1 = 0;
            nums2.shift();
            index2 = 0;
        } 
        else if (index2 === nums2.length - 1) {
            output.push([nums1[index1+1], nums2[0]]);
            nums1.shift();
            index1 = 0;
            index2 = 0;
        }
        else if (nums1[index1+1] + nums2[index2] <= nums1[index1] + nums2[index2 + 1]) {
            output.push([nums1[index1+1], nums2[index2]]);
            index1 += 1;
        }
        else {
            output.push([nums1[index1], nums2[index2+1]]);
            index2 += 1;
        }

        remaining -= 1;
    }
        
    
    return output;
};

/////////
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

var kSmallestPairs = function (nums1, nums2, k) {
    if (nums1.length === 0 || nums2.length === 0) return [];

    let arr = [];
    let minHeap = new MinHeap();

    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        for (let j = 0; j < Math.min(nums2.length, k); j++) {
            minHeap.insert([nums1[i], nums2[j]], nums1[i] + nums2[j]);
        }
    }

    while (arr.length < k) {
        //[1,2,3], [1,4,5]
        //if heap is empty
        //push 2 next elements into the heap
        //pop

        const poppedVal = minHeap.removeMin();
        if (poppedVal === null) break;
        arr.push(poppedVal[0]);
    }
    return arr;
}


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

    insert(arr, value) {
        this.array.push([arr, value]);
        this.siftUp(this.array.length - 1)
    }

    siftUp(idx) {
        if (idx === 0) return;

        let parentIdx = this.getParentIdx(idx);
        if (this.array[idx][1] < this.array[parentIdx][1]) {
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
        let leftChild, rightChild;

        if (this.array[leftChildIdx] === undefined) {
            leftChild = Infinity;
        } else {
            leftChild = this.array[leftChildIdx][1];
        }

        if (this.array[rightChildIdx] === undefined) {
            rightChild = Infinity;
        } else {
            rightChild = this.array[rightChildIdx][1];
        }

        if (this.array[idx][1] < leftChild && this.array[idx][1] < rightChild) return;

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