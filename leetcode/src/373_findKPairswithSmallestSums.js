/*
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]] 
Explanation: The first 3 pairs are returned from the sequence: 
             [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [1,1],[1,1]
Explanation: The first 2 pairs are returned from the sequence: 
             [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
Example 3:

Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [1,3],[2,3]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

const kSmallestPairs = (nums1, nums2, k) => {
    if (nums1.length == 0 || nums2.length == 0) return []
    
    this.maxHeap = [];
    
    this.insert = (arr) => {
        this.maxHeap.push(arr);
        this.bubbleUp();
    }
    
    this.bubbleUp = () =>{
        let idx = this.maxHeap.length-1;
        const element = this.maxHeap[idx];
        
        while(true && idx !== 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEl = this.maxHeap[parentIdx];

            if(element[0]+element[1] < parentEl[0] + parentEl[1]){
                [this.maxHeap[parentIdx], this.maxHeap[idx]] = [element, parentEl];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }
    
    this.remove = () => {
        const min = this.maxHeap[0];
        const end = this.maxHeap.pop();
        if(this.maxHeap.length > 0){
            this.maxHeap[0] = end;
            this.sinkDown();
        }   
        return min;
    }
    
    this.sinkDown = () => {
        let idx = 0;
        const length = this.maxHeap.length;
        const element = this.maxHeap[0];

        while(true){
            let leftChildInd = 2 * idx + 1; 
            let rightChildInd = 2 * idx + 2; 
            let leftChild, rightChild;
            let swap = null;

            if (leftChildInd < length){
                leftChild = this.maxHeap[leftChildInd];
                if (leftChild[0]+leftChild[1] < element[0]+element[1]){
                    swap = leftChildInd
                }
            } 
            if (rightChildInd < length){
                rightChild = this.maxHeap[rightChildInd]
                if((swap === null && rightChild[1]+rightChild[0] < element[0]+element[1]) || (swap !== null && rightChild[1]+rightChild[0] < leftChild[0]+leftChild[1])){
                    swap = rightChildInd;
                }
            }
            if (swap === null){break};
            this.maxHeap[idx] = this.maxHeap[swap];
            this.maxHeap[swap] = element;
            idx = swap;
        }
    }
    
    let result = []
    
    for(let i = 0; i < Math.min(nums1.length, k); i++){
        for (let j = 0; j < Math.min(nums2.length, k); j++){
            this.insert([nums1[i], nums2[j]]);
        }
    }
    
    while (result.length < k){
        let el = this.remove()
        if (el === undefined) break;
        result.push(el);
    }
    
    return result;
};
