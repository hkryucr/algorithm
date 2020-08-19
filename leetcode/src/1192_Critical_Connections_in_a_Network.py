'''
1192. Critical Connections in a Network
There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

Example 1:

Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
 
Constraints:

1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections.

'''

from collections import defaultdict
class Solution(object):
    def criticalConnections(self, n, connections):
        graph = defaultdict(lambda: set())
        
        for [n1, n2] in connections:
            graph[n1].add(n2)            
            graph[n2].add(n1)
        
        rank = [ float('inf') for _ in range(n) ]
        visited = [ False for _ in range(n) ]
        res = set()
        
        for i in range(n):
            if not visited[i]:
                self.dfs(0, -1, rank, graph, 0, res, visited)
            
        return list(res)
        
    def dfs(self, cur_node, prev_node, rank, graph, cur_rank, res, visited):
        if rank[cur_node] < cur_rank:
            return rank[cur_node]
        if visited[cur_node]:
            return
        visited[cur_node] = True

        rank[cur_node] = min(cur_rank, rank[cur_node])
        min_rank = float("inf")
        for next_node in graph[cur_node]:
            if next_node == prev_node: continue
            self.dfs(next_node, cur_node, rank, graph, cur_rank + 1, res, visited)
            rank[cur_node] = min(rank[cur_node], rank[next_node])

            if rank[next_node] >= cur_rank + 1:
                res.add((cur_node, next_node))

        return rank[cur_node]
        