/*
974. Subarray Sums Divisible by K

Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.
Example 1:

Input: A = [4,5,0,-2,-3,1], K = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by K = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

Note:

1 <= A.length <= 30000
-10000 <= A[i] <= 10000
2 <= K <= 10000
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let prefixSum = new Array(A.length+1).fill(0);
    
    for(let i = 0; i < A.length; i++){
        prefixSum[i+1] = A[i] + prefixSum[i];
    }

    let count = 0;
    let hash = {};
    for(let i = 0; i < prefixSum.length; i++){
        let remainder = prefixSum[i] % K;
        if(remainder < 0) remainder += K;
        if(hash[remainder]) count += hash[remainder]
        if(hash[remainder] === undefined) hash[remainder] = 0;
        hash[remainder] ++;        
    }

    return count;
};

