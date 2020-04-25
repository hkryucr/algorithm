/*

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
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.

Example3                         node
numCourses = 3, prerequisites = [[0,1],[1,2], [2,4], [1,3], [3,0], [0,3]]

Constraints:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5
        pre
hash = { 
    1: [0,],
    2: [1],
    4: [2],
    3: [1, 0],
    0: [3]
}

iterated through the prereq array, 
*/
// 0 = true, 1 = true, 

var canFinish = function (numCourses, prerequisites) {
    let hash = {}
    // hash[key] = value;
    prerequisites.forEach( subArray => {
        if ( hash[subArray[0]] )
        hash[subArray[1]].push(subArray[0]);
    })
}