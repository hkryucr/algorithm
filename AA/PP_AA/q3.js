/*
207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.

Example2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
1 -> 0
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.

Example3                         
numCourses = 3, prerequisites = [[0,1],[1,2], [2,0]]
// 0 - means a course
// 1 - means a course
// 2 - means a course

        1 -> 2   <- 4
             |
             v
             3
Output: false

Constraints:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5
*/
// 1) 2 is prerequisite for 1
// what courses are required to take 2

// prerequisites = [[5,1], [4,1], [3,1], [1,2], [2,3], [3,4][4,5], [0,1]] 
// [5,1] 
// -> fact to take course 5 we need to take 1
//     => hash[5] = 1; -> buliding up your hash
// ->      to take course 1 we need to take 5 ? yes -> false : no -> true;prerequisites[i][1]
//     => hash[1] === 5 ?
//     => hash[1] === 4 ?
//     => hash[1] === 3 ? 
            // [5 1] false
// num of courses doesn't matter.
// 
// for any row: col[1] is prerequisite col[0]
// ex: 1 is prereq of 0; 2 is prereq of 1; 0 prereq of 2 IMPOSSIBLE
// 1 -> 0 ->
//  ^      |
//   \ <-  2
// [[0,1],[1,2], [2,0]]
//Graph = each node can go in any direction; all nodes next to reference node is called neighbor
// [
// [5,1], 
// [4,1], 
// [3,1],
//  [1,2], 
//  [2,3],
//   [3,4][4,5], [0,1]] 

/*

{   key(course): val set(all prerequsites)
    1: {1,2,3,4,5}
    2: {2,3}
    3: {4}
    4: {5}
    5: {2}
}

*/
var canFinish = function (numCourses, prerequisites) {
    let courseHash = {};
    for(let i = 0; i < prerequisites.length; i++){
        courseHash[prerequisites[i][0]] = 
    }
    console.log(courseHash)
    let courseKeys = Object.keys(courseHash)
    
    // for(let j = 0; j < courseKeys.length; j++){
    //     const curKey = courseKeys[j];
    //     const curVal = courseHash[curKey]
    //     if (courseHash[curVal] && courseHash[curVal].toString() === curKey.toString()) return false;
    // }

    dfs(key,...){

    }

    return true;
}

console.log(canFinish(2, [[0, 1], [1, 0]]));
console.log(canFinish(2, [[0, 1], [0, 1]]));
console.log(canFinish(3, [[0, 1], [0, 2], [1,2]]));