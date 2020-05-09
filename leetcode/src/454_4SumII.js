/*
Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

var fourSumCount = function (A, B, C, D) {
    let hashAB = {};
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let cur = A[i] + B[j]
            if (hashAB[cur] === undefined) hashAB[cur] = 0;
            hashAB[cur]++;
        }
    }

    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            let cur = C[i] + D[j]
            if (hashAB[(-cur)] !== undefined) count += hashAB[-cur];

        }
    }
    return count;

}

// function bs(D, target){
//     let left = 0;
//     let right = D.length-1;
//     while(left <= right){
//         let mid = left + Math.floor((right - left)/2);
//         if(D[mid] === target){
//             return target;
//         } else if(D[mid] < target) {
//             left = mid+1;
//         } else {
//             right = mid-1;
//         }
//     }
//     return false;
// }

// var fourSumCount = function(A, B, C, D) {
//     let count=0;
//     // A.sort((a,b)=>a-b);
//     // B.sort((a,b)=>a-b);
//     // C.sort((a,b)=>a-b);
//     // D.sort((a,b)=>a-b);
//     let hash = {}
//     for(let i = 0; i < D.length; i++){
//         if(hash[D[i]] === undefined) hash[D[i]] = 0;
//         hash[D[i]]++;
//     }
//     for(let i1 = 0; i1 < A.length; i1++){
//         for(let i2 = 0; i2 < B.length; i2++){
//             for(let i3 = 0; i3 < C.length; i3++){
//                 let target = -(A[i1] + B[i2] + C[i3]);
//                 if(hash[target] !==undefined) count += hash[target];
//             }    
//         }    
//     }    

//     return count;
// };


/*
Brute Force Solution - N^4 => time limit exceeded
var fourSumCount = function(A, B, C, D) {
    let count=0;
    for(let i1 = 0; i1 < A.length; i1++){
        for(let i2 = 0; i2 < B.length; i2++){
            for(let i3 = 0; i3 < C.length; i3++){
                for(let i4 = 0; i4 < D.length; i4++){
                    if(A[i1] + B[i2] + C[i3] + D[i4] === 0){
                        count++;
                    }
                }
            }
        }
    }
    return count;
};
*/