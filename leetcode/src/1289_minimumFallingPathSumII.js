/*
1289. Minimum Falling Path Sum II
Given a square grid of integers arr, a falling path with non-zero shifts is a choice of exactly one element from each row of arr, such that no two elements chosen in adjacent rows are in the same column.

Return the minimum sum of a falling path with non-zero shifts. 

Example 1:

Input: arr = [[1,2,3],[4,5,6],[7,8,9]]
Output: 13
Explanation: 
The possible falling paths are:
[1,5,9], [1,5,7], [1,6,7], [1,6,8],
[2,4,8], [2,4,9], [2,6,7], [2,6,8],
[3,4,8], [3,4,9], [3,5,7], [3,5,9]
The falling path with the smallest sum is [1,5,7], so the answer is 13.
 

Constraints:

1 <= arr.length == arr[i].length <= 200
-99 <= arr[i][j] <= 99
*/

/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
    let dp = Array.from({length: arr.length}, ()=> new Array(arr[0].length));
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[0].length; j++){
            if(i === 0){
                dp[i][j] = arr[i][j];
                continue;
            }
            
            let curMin = Infinity;
            for(let k = 0; k < arr[0].length; k++){
                if(j === k) continue;
                if(curMin > dp[i-1][k]) curMin = dp[i-1][k];
            }
            dp[i][j] = arr[i][j] + curMin;

            if(i === arr.length-1){
                min = Math.min(min, dp[i][j]);
            }
        }
    }

    return min;
};





