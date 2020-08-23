'''
253. Meeting Rooms II
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
'''

class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        starts = []
        ends = []
        for [start, end] in intervals:
            starts.append(start)            
            ends.append(end)
        
        starts = sorted(starts)        
        ends = sorted(ends)
        
        num_of_rooms = 0
        start_idx = 0
        end_idx = 0 
        max_of_rooms = 0
        
        while start_idx < len(starts) and end_idx < len(ends):
            if starts[start_idx] < ends[end_idx]:
                num_of_rooms += 1
                start_idx += 1
            else:
                num_of_rooms -= 1
                end_idx += 1 
            max_of_rooms = max(max_of_rooms, num_of_rooms)
            
        return max_of_rooms
        