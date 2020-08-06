'''
815. Bus Routes
We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats forever. For example if routes[0] = [1, 5, 7], this means that the first bus (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->... forever.

We start at bus stop S (initially not on a bus), and we want to go to bus stop T. Travelling by buses only, what is the least number of buses we must take to reach our destination? Return -1 if it is not possible.

Example:
Input: 
routes = [[1, 2, 7], [3, 6, 7]]
S = 1
T = 6
Output: 2
Explanation: 
The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
 

Constraints:

1 <= routes.length <= 500.
1 <= routes[i].length <= 10^5.
0 <= routes[i][j] < 10 ^ 6.

'''
from collections import defaultdict
class Solution(object):
    def numBusesToDestination(self, routes, S, T):
#         if S == T: return 0
#         graph = defaultdict(list)
#         for bus, route in enumerate(routes):
#             for stop in route:
#                 graph[stop].append(bus)
                
#         if len(set(graph[S]) & set(graph[T])): return 1
        
#         bus_stack = graph[S]
#         bus_stack = graph[S]
#         visited_bus = set()
#         visited_bus.update(bus_stack)
        
#         stack_back = graph[T]
#         vis_back = set(stack_back)
        
#         count = 1

#         while len(bus_stack) > 0:
#             temp = []
#             for bus in bus_stack:
#                 for next_stop in routes[bus]:
#                     if next_stop in visited_stops: continue
#                     visited_stops.add(next_stop)
#                     if next_stop == T: return count
#                     for new_bus in graph[next_stop]:
#                         if not new_bus in visited_bus:
#                             temp.append(new_bus)
#                             visited_bus.add(new_bus)
#             count += 1
#             bus_stack = temp
#             if len(vis & vis_back) > 0:
                
#         return -1
        
        graph = defaultdict(list)
        for i, x in enumerate(routes):
            for y in x:
                graph[y].append(i)
        if S == T: return 0
        if len(set(graph[S]) & set(graph[T])): return 1
        
        stack = graph[S]
        vis = set(stack)
        
        stack_back = graph[T]
        vis_back = set(stack_back)
        
        ans = 1
        while stack and stack_back:
            ans += 1
            if len(stack) > len(stack_back):
                stack, stack_back = stack_back, stack
                vis, vis_back = vis_back, vis
            
            for _ in range(len(stack)):
                cur = stack.pop(0)
                for nex in routes[cur]: #stop
                    for nex_stop in graph[nex]: #bus
                        if nex_stop in vis:continue
                        vis.add(nex_stop)
                        stack.append(nex_stop)
            if len(vis & vis_back) > 0:
                return ans
            
        return -1
    