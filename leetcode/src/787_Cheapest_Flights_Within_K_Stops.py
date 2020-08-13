'''
787. Cheapest Flights Within K Stops

There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation: 
The graph looks like this:


The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.
Example 2:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation: 
The graph looks like this:


The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.
 

Constraints:

The number of nodes n will be in range [1, 100], with nodes labeled from 0 to n - 1.
The size of flights will be in range [0, n * (n - 1) / 2].
The format of each flight will be (src, dst, price).
The price of each flight will be in the range [1, 10000].
k is in the range of [0, n - 1].
There will not be any duplicated flights or self cycles.

'''

from collections import defaultdict
import heapq

class Solution(object):
    def findCheapestPrice(self, n, flights, src, dst, K):
        graph = defaultdict(lambda: {})
        for flight in flights:
            start, end, dist = flight
            graph[start][end] = dist
        
        distance_from_src = [(0, src, K)]

        while len(distance_from_src) > 0:
            cur_dist, cur_node, cur_k = heapq.heappop(distance_from_src)
            if cur_node == dst:
                return cur_dist
            
            if cur_k < 0: continue
            
            for new_node in graph[cur_node]:
                new_dist = graph[cur_node][new_node] + cur_dist
                heapq.heappush(distance_from_src, (new_dist, new_node, cur_k-1))
        return -1
        
    
