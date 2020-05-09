import heapq

def kthSmallest(matrix, k):
    min_heap = []
    i, j = 0, 0
    while len(min_heap) <= k:
        heapq.heappush(min_heap, matrix[i][j])
        if j + 1 < len(matrix[0]):
            heapq.heappush(matrix[i][j + 1])
        




from queue import PriorityQueue

def kthSmallest(matrix, k):
    min_heap = []
    i, j = 0, 0
    queue.put(matrix[i][j], [i, j])

    while len(queue) > 0:
        next = queue.get()
        m, n = next[0], next[1]
        # find neighbors
        # push them into queue
        heapq.heappush(min_heap, matrix[i][j])
        if j + 1 < len(matrix[0]):
            heapq.heappush(matrix[i][j + 1])
        

