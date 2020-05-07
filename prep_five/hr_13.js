// 1011. Capacity To Ship Packages Within D Days
// A conveyor belt has packages that must be shipped from one port to another within D days.

// The i-th package on the conveyor belt has a weight of weights[i]. 
//  Each day, we load the ship with packages on the conveyor belt (in the order given by weights).
//  We may not load more weight than the maximum weight capacity of the ship.

// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

 

// Example 1:

// Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
// Output: 15
// Explanation: 
// A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10

// Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed. 
// Example 2:

// Input: weights = [3,2,2,4,1,4], D = 3
// Output: 6
// Explanation: 
// A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
// 1st day: 3, 2
// 2nd day: 2, 4
// 3rd day: 1, 4
// Example 3:

// Input: weights = [1,2,3,1,1], D = 4
// Output: 3
// Explanation: 
// 1st day: 1
// 2nd day: 2
// 3rd day: 3
// 4th day: 1, 1

// Note:
// 1 <= D <= weights.length <= 50000;
// 1 <= weights[i] <= 500;

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
/*
- if the length of weights is smaller than D => return the maximum el
weights = [1,2,3,4,5,6,7,8,9,10], D = 2

// DP func(subarr, D)
When D = 1 -> SUM of the ARR
DP => return SUM of THE ARR

[1,2,3,4,5,6,7,8,9,10]
every index -> 1) 

[ ]
*/

var shipWithinDays = function(weights, D) {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
    }
    let bound = Math.floor(sum / D);
    
    while(true){
        let days = D;
        let curBound = bound;

        for (let i = 0; i < weights.length; i++) {
            let cur = weights[i];

            if(curBound - cur >= 0){
                curBound -= cur;
            } else {
                days--;
                curBound -= cur;
            }
        }
        if(days >= 0) return bound;
        bound++;
    }
};

// class Solution:
    
//     def tryToFill(self, a, D, floor):
//         result = False
//         day = 1
//         idx = 0
//         while day <= D and idx < len(a):
//             daySum = 0
//             while idx < len(a) and daySum + a[idx] <= floor:
//                 daySum += a[idx]
//                 idx += 1
//             day += 1
//         if idx >= len(a):
//             return True
//         return False
    
//     def shipWithinDays(self, weights: List[int], D: int) -> int:
//         import math
//         floor = math.ceil(sum(weights) / D)
//         filled = False
//         while True:
//             filled = self.tryToFill(weights, D, floor)
//             if filled:
//                 break
//             floor += 1
//         return floor