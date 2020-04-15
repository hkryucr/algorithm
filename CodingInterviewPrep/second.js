/*
939. Minimum Area Rectangle

Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

If there isn't any rectangle, return 0.

0) two hashmap -> x hashmap {1: new Set(1, 3), 3: {1, 3}, 2: {2}}, y hashmap {1: new Set{1}, 3: new Set(1)}
1) curEl = [1,1] => 1 -> {1, 3} -> y hashMap { 3, } 
2) iterate through input array(2d)
3) x, y -> previously existed 

Example 1:
Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4

Example 2:
Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
[3,1],[3,3],[4,1],[4,3]
[3,1] and [4,3]
[3,3] and [4,1]

{3: 1} -> {4: 3}
{3: 3} -> {4: 1}
Output: 2

1 <= points.length <= 500
0 <= points[i][0] <= 40000
0 <= points[i][1] <= 40000
All points are distinct.

1) create hash map that includes pairs  -> {[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]}

3 :{1,3}
4 :{1,3}
2) nested loop -> for pairs paiirs [4,1],[3,3] 
  -> x values same or y values same -> continue;
  [3,3],[4,1]
  [3, 1 - 4,3]
  ->  find [3,1], [4.3] -> if I have these -> cal-> save minimum
*/

/**
 * @param {number[][]} points
 * @return {number}
 */

const minAreaRect = (points) =>{
    let store = {};

    for(let i = 0; i < points.length; i++){
        let [x, y] = points[i];
        if (store[x] === undefined ){
            store[x] = new Set()
        } 
        store[x].add(y);
    }

    let min = Infinity;

    for (let i = 0; i < points.length-1; i++) {
        for (let j = i+1; j < points.length; j++){
            let [px1, py1] = points[i];
            let [px2, py2] = points[j];

            if (px1===px2 || py1 === py2) continue;

            if (store[px1].has(py2) && store[px2].has(py1)){
                min = Math.min(min, Math.abs(px1 - px2) * Math.abs(py1 - py2))
            }
        }
    }

    return min;
};