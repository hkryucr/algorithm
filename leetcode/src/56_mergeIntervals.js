/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
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

const merge = (intervals) => {
    if(!intervals.length) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++){
        const currentInterval = intervals[i];
        const previousInterval = result.pop();
        if (currentInterval[0] <= previousInterval[1]){
            result.push([previousInterval[0], Math.max(previousInterval[1], currentInterval[1])]);
        } else {
            result.push(previousInterval);
            result.push(currentInterval);
        }
    }
    return result;
};
