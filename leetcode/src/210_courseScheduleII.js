/*
210. Course Schedule II

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:

Input: 2, [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished
             course 0. So the correct course order is [0,1] .
Example 2:

Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.

Input: 4, [[1,0],[2,0],[3,1],[3,2]]

graph
    0 -> [1,2],
    1 -> [3],
    2 -> [2] 
    0: 1, 0: 2, 

0-> 1 -> 3 

res [3, 1, 0]
The sink node = graph[node] is undefined
DFS -> pushing the leaf value at first

*/

var findOrder = function (numCourses, prerequisites) {
    let graph = [];

    for (let i = 0; i < prerequisites.length; i++) {
        let [crs, pre] = prerequisites[i];
        if (graph[pre] === undefined) graph[pre] = [];
        graph[pre].push(crs);
    }

    let visited = new Set();
    let result = [];
    for (let i = 0; i < graph.length; i++) {
        if (graph[i] === undefined) continue;
        if (isCycle(visited, new Set, i, result, graph)) return [];
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited.has(i)) result.push(i);
    }

    return result.reverse();
}

function isCycle(visited, visiting, node, result, graph) {

    if (visiting.has(node)) {
        return true;
    }
    if (visited.has(node)) return false;

    visiting.add(node);

    let courses = graph[node];

    if (courses === undefined) {
        visiting.delete(node);
        result.push(node);
        visited.add(node);
        return false;
    }

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if (isCycle(visited, visiting, course, result, graph)) return true;
    }

    visiting.delete(node);
    result.push(node);
    visited.add(node);

    return false;
}