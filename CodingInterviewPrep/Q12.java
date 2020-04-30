/*
207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, 
which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1], [2,0]]

=> there is an edge from 0 to 1 , another edge from 2 to 1
0 : [1, 2]

 /
/
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.

Constraints:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5

*/

class Solution {
    Map<Integer, List<Integer>> graph = new HashMap<>();
    HashSet<Integer> seeing = new HashSet<>();
    HashSet<Integer> visited = new HashSet<>();
    
    private void buildGraph(int[][] preq){
        List<Integer> got;
        for(int i = 0; i < preq.length; i++){
            if(graph.containsKey(preq[i][1])){
                got = graph.get(preq[i][1]);
                got.add(preq[i][0]);
            } else {
                got = new ArrayList<>();
                got.add(preq[i][0]);
            }
            graph.put(preq[i][1], got);
        }
    }

   
    private boolean isCycle( Map<Integer, List<Integer>> graph, int s,  HashSet<Integer> seeing,  HashSet<Integer> visited){
        if(seeing.contains(s)) return true;
        if(visited.contains(s)) return false;
        if(!graph.containsKey(s)){
            return false;
        }
        List<Integer> n = graph.get(s);
        seeing.add(s);
        for(int i = 0 ; i < n.size(); i++){
            
            if(isCycle(graph, n.get(i), seeing, visited)) return true;
        }
        seeing.remove(s);
        visited.add(s);
        return false;
    }
    // {0: [1,2]} 100 go deep and traverse 100 elements
    // {3: [4,0]}
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        buildGraph(prerequisites);
        System.out.println(graph);
        for(int i = 0; i < numCourses; i++){
            if(isCycle(graph, i, seeing, visited)) return false;
        }
        return true;
    }
    
}