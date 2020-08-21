print("Hello")

'''
1167. Minimum Cost to Connect Sticks
You have some sticks with positive integer lengths.

You can connect any two sticks of lengths X and Y into one stick by paying a cost of X + Y.  
You perform this action until there is one stick remaining.

Return the minimum cost of connecting all the given sticks into one stick in this way.

Example 1:
Input: sticks = [2,4,3]
Output: 14

Example 2:
Input: sticks = [1,8,3,5]
Output: 30
 
Constraints:
1 <= sticks.length <= 10^4
1 <= sticks[i] <= 10^4

[a1, a2, a3, a4]
a1+a2 = b1 <- first cost
[b1, a3, a4]
a1+a2 + a3 = b2 <- second cost
[b2, a4]
a1+ a2 + a3  + a4 = b3 <- last cost
[b3]

b1+b2+b3 = (a1+a2) + (a1+a2+a3) + (a1+a2+a3+a4) <- to minimize the entire cost, the smallest values should be selected

[1,8,3,5]
// 1+3 = 4
[4,5,8]
// 4+5 = 9
[8,9]
// 8+9 = 17
answer = 30

use heap to hold all variables -> space O(n) where n is the length of sticks
iteration O(n) * pop out of heap O(logn) -> nlogn time complexity

'''
import heapq
class Solution:  
  def connectSticks(self, sticks: List[int]) -> int:
    if len(sticks) <= 1: 
      return 0
    min_heap = []
    for stick in sticks:
      heapq.heappush(min_heap, stick)
    value = 0
    while len(min_heap) > 1:
      smallest = heapq.heappop(min_heap)
      second_smallest = heapq.heappop(min_heap)
      merged = smallest + second_smallest
      value += merged
      heapq.heappush(min_heap, merged)
      
    return value
      
  
  
  
  











