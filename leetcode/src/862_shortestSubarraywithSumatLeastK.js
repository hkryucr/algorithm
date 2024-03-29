/*
862. Shortest Subarray with Sum at Least K
Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

If there is no non-empty subarray with sum at least K, return -1.

Example 1:

Input: A = [1], K = 1
Output: 1
Example 2:

Input: A = [1,2], K = 4
Output: -1
Example 3:

Input: A = [2,-1,2], K = 3
Output: 3
 

Note:

1 <= A.length <= 50000
-10 ^ 5 <= A[i] <= 10 ^ 5
1 <= K <= 10 ^ 9
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    let sums = [0];
    for (let i = 1; i <= A.length; i++) {
        sums[i] = sums[i-1] + A[i-1];
    }

    let lefts = [0];
    let min = Number.MAX_VALUE;
    for(let right = 1; right < sums.length; right++) {
        while ((lefts.length > 0) && (sums[right] - sums[lefts[0]]) >= K) {
            min = Math.min(right - lefts[0], min);
            lefts.shift();
        }
        while((lefts.length > 0) && (sums[right] < sums[lefts[lefts.length - 1]])) {
            lefts.pop();
        }
        lefts.push(right)
    }
    return min !== Number.MAX_VALUE ? min : -1;
}
