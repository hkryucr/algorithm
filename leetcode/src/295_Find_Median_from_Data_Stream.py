'''
295. Find Median from Data Stream
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 

Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 

Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?
If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

'''
import heapq

class MedianFinder(object):

    def __init__(self):
        self.minHeap = [] # bigger [5,6]
        self.maxHeap = [] # smaller [2, 1]
        
    def addNum(self, num):
        heapq.heappush(self.minHeap, num)
        
        if len(self.minHeap) - len(self.maxHeap) > 1:
            heapq.heappush(self.maxHeap, -heapq.heappop(self.minHeap))
            
        if len(self.maxHeap) > 0 and self.minHeap[0] < -self.maxHeap[0]:
            popped_min = heapq.heappop(self.minHeap)
            popped_max = -heapq.heappop(self.maxHeap)
            heapq.heappush(self.maxHeap, -popped_min)
            heapq.heappush(self.minHeap, popped_max)    

    def findMedian(self):
        if len(self.minHeap) > len(self.maxHeap):
            return self.minHeap[0]
        else:
            return (self.minHeap[0] + (-self.maxHeap[0]))*1.0/2

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
