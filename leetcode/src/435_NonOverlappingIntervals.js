/*
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
Example 2:

Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
Example 3:

Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

Note:

You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

*/

const eraseOverlapIntervals = (intervals) => {
    if (intervals.length <= 1) return 0;
    intervals.sort((a,b) => a[0] - b[0]);
    let resultArr = [];
    resultArr.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++){
        const firstArr = resultArr.pop();
        const secondArr = intervals[i];
        if(firstArr[1] > secondArr[0]){
            if (firstArr[1] >= secondArr[1]){
                resultArr.push(secondArr);                
            } else {
                resultArr.push(firstArr);
            }
        } else {
            resultArr.push(firstArr);
            resultArr.push(secondArr);
        }
    }
    return intervals.length - resultArr.length;
};
