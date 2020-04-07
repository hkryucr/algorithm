/*
703. Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8

Note: 
You may assume that nums' length ≥ k-1 and k ≥ 1.
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort(function(a,b){return b - a});
};

/** 5
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {

    let curArr = this.nums;
    curArr.push(val);

    let i = curArr.length;
    while (i>0){
        if(curArr[i-1] > curArr[Math.round(i/2)-1] ){
            let temVal = curArr[i-1];
            curArr[i-1] = curArr[Math.round(i/2)-1];
            curArr[Math.round(i/2)-1] = temVal;
            i = Math.round(i/2)-1;
        } else {
            // console.log(curArr, i);
            break;
        }
    }
    console.log(curArr[this.k+1])     
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
*/

let obj = new KthLargest(3, [4,5,8,2]);
obj.add(3);
obj.add(5);
obj.add(10);
obj.add(9);
obj.add(4);

