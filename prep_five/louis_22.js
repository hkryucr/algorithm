/*
56. Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

[[1,3],[2,6],[8,10],[15,18]]
[
[1, 6]
[8, 10]
[15, 18]
]
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) {
        return intervals
    }
    // sort by start time
    intervals.sort((a, b) => a[0] - b[0])
    let result = []
    let i = 1
    let current = intervals[0]
    while (i < intervals.length) {
        if (intervals[i][0] <= current[1]) {
            current[1] = Math.max(current[1], intervals[i][1])

        } else {
            // non-overlapping intervals
            result.push(current)

            current = intervals[i]
            // continue
        }
        i++
    }
    result.push(current)

    return result
}