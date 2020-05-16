/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/
 /**
 * @param {number} capacity
 */

const doublyLinkedList = function (key,val){
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}

var LRUCache = function(capacity) {
    this.tail = null;
    this.head = null;
    this.capacity = capacity;
    this.hash = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hash[key] === undefined) {
        return -1;
    }

    let targetNode = this.hash[key];
    if(this.head === targetNode) return this.head.val;

    targetNode.prev.next = targetNode.next;
    if(targetNode.next){ 
        targetNode.next.prev = targetNode.prev
    } else {
        this.tail = targetNode.prev;
    }

    let prevHead = this.head;
    this.head = targetNode;
    targetNode.next = prevHead;
    prevHead.prev = targetNode;
    targetNode.prev = null;

    return this.head.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {

    if(this.hash[key]){
        this.hash[key].val = value;
        this.get(key);
        return;
    }

    if(this.head === null){
        this.head = new doublyLinkedList(key,value);
        this.hash[key] = this.head;   
        this.tail = this.head;
        this.capacity--;
    } else {
        // head becomes a new node
        let curNode = new doublyLinkedList(key, value);
        this.hash[key] = curNode;
        let prevHead = this.head;
        this.head = curNode;
        prevHead.prev = this.head;
        this.head.next = prevHead;
        this.capacity--;
    }

    if(this.capacity < 0){ 
        delete this.hash[this.tail.key];
        let beforeTail = this.tail.prev;
        beforeTail.next = null;
        this.tail = beforeTail;
        this.capacity++;
    }
};

var obj = new LRUCache(2);
obj.put(2, 1);
obj.put(1, 1);
obj.put(2, 3);
obj.put(4, 1);

// obj.put(1, 1);
// obj.put(2, 2);
// console.log(obj.get(1)); // 1
// obj.put(3, 3);
// console.log(obj.get(2)); // return -1
// obj.put(4, 4);
// console.log(obj.get(1)); // return -1
// console.log(obj.get(3)); // return 3
// console.log(obj.get(4)); // return 4


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
