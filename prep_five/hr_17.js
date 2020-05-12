// 146. LRU Cache
// Design and implement a data structure for Least Recently Used (LRU) cache. 
// It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. 
// When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */

// doubly linked list => next/prev
// hash

// hash = { idx: node}
// {
//     1: node(1) (next=node2; prev = null),
//     2: node(2) (next = null, prev =node1)
// }
// this.capacity = capacity (decrement every time I put)
// this.head = node1
// newNode (2)
// newNode.prev = this.head;
// this.head.next = newNode;
// this.head = newNode; 

// GET() => get the one

// node1.prev.next = node1.next;
// node1.next.prev = node1.prev;

// node1.next = null
// node1.prev = this.head;
// this.head = node1;
// push

var doublyLinkedList = function(key, val){
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;    
    this.hash = {}
    this.head = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.hash[key] !== undefined) {
        this.hash[key].val = value;
        return ;
    }
    if(this.capacity > 0){
        let curNode = new doublyLinkedList(key, val);
        this.hash[key] = curNode;
        this.head.next = curNode;
        curNode.prev = this.head;
        this.head = curNode;
        this.capacity--;
    } else {
        // evict
        let curKey = this.head.key ;
        delete this.hash[curKey];
        let curNode = new doublyLinkedList(key, val);
        let prevHead = this.hash.prev;
        prevHead.next = curNode;
        curNode.prev = prevHead;
        this.head = curNode;
        this.hash[key] = curNode;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */