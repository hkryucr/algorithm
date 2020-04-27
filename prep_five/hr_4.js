/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:
         x1 y1   x2 y2
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

edge cases
- intervals.length <= 1 reutrn intervals;
- intervals.length === 1 reutrn intervals;
*/

var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  let resArr = [];

  for (let i = 0; i < intervals.length - 1; i++) {
    let [x1, y1] = intervals[i];
    let [x2, y2] = intervals[i + 1];

    if (y1 >= x2) {
      intervals[i + 1] = [x1, y1 > y2 ? y1 : y2];
    } else {
      resArr.push(intervals[i]);
    }
  }

  resArr.push(intervals[intervals.length - 1]);
  return resArr;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));