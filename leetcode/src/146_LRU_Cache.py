'''
146. LRU Cache
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

'''
class LinkedList(object):
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache(object):
    def __init__(self, capacity):
        self.capacity = capacity
        self.dict = {}
        self.head = LinkedList(0,0)
        self.tail = LinkedList(0,0)
        self.head.next = self.tail
        self.tail.prev = self.head
        
    def get(self, key):
        if not key in self.dict: return -1
        
        node = self.dict[key]
        self._remove(node)
        self._add(node)
        return node.val
        
    
    def put(self, key, value):
        node = LinkedList(key, value)
        if key in self.dict:
            node = self.dict[key]
            node.val = value
            self._remove(node)
            self._add(node)
            return
        
        if self.capacity == 0 :
            self._remove(self.tail.prev)
            self._add(node)
            return 

        self._add(node)
        self.capacity -= 1
        
        
    def _remove(self, node):
        del self.dict[node.key]
        prev_node = node.prev
        next_node = node.next
        prev_node.next = None
        next_node.prev = prev_node
        prev_node.next = next_node
        
    def _add(self, node):
        self.dict[node.key] = node
        cur_first = self.head.next
        self.head.next = node
        cur_first.prev = node
        node.prev = self.head
        node.next = cur_first


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)