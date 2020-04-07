/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = function(nums, k) {
    let counterObj = {};
    for(let i = 0; i < nums.length; i++){
        if(counterObj[nums[i]] == undefined){
            counterObj[nums[i]] = 1;
        } else {
            counterObj[nums[i]]++ ;
        }
    }
    return Object.keys(counterObj).sort((a,b) => counterObj[b] - counterObj[a]).slice(0, k)

    /*
    Heap solution
    let countObj = {};

    for(let i = 0; i < nums.length; i++){
        countObj[nums[i]] = countObj[nums[i]] === undefined ? 1 : countObj[nums[i]]+1
    }
    
    this.minHeap = [];
    
    this.insert = (arr) => {
        this.minHeap.push(arr);
        this.bubbleUp();
    }
    
    this.bubbleUp = () =>{
        let idx = this.minHeap.length-1;
        const element = this.minHeap[idx];
        
        while(true && idx !== 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEl = this.minHeap[parentIdx];

            if(element[1] < parentEl[1]){
                [this.minHeap[parentIdx], this.minHeap[idx]] = [element, parentEl];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }
    
    this.remove = () => {
        const min = this.minHeap[0];
        const end = this.minHeap.pop();
        if(this.minHeap.length > 0){
            this.minHeap[0] = end;
            this.sinkDown();
        }   
        return min;
    }
    
    this.sinkDown = () => {
        let idx = 0;
        const length = this.minHeap.length;
        const element = this.minHeap[0];

        while(true){
            let leftChildInd = 2 * idx + 1; 
            let rightChildInd = 2 * idx + 2; 
            let leftChild, rightChild;
            let swap = null;

            if (leftChildInd < length){
                leftChild = this.minHeap[leftChildInd];
                if (leftChild[1] < element[1]){
                    swap = leftChildInd
                }
            } 
            if (rightChildInd < length){
                rightChild = this.minHeap[rightChildInd]
                if((swap === null && rightChild[1] < element[1]) || (swap !== null && rightChild[1] < leftChild[1])){
                    swap = rightChildInd;
                }
            }
            if (swap === null){break};
            this.minHeap[idx] = this.minHeap[swap];
            this.minHeap[swap] = element;
            idx = swap;
        }
    }
    
    for (let key in countObj){
        this.insert([key, countObj[key]]);

        if (minHeap.length > k){
            this.remove();
        } 
    }
    
    return this.minHeap.map(function(el){return el[0]}).sort()
    */
}

// Time complexity is O(2n) and Space Complexity is O(n);