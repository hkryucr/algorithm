/*
380. Insert Delete GetRandom O(1)
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();

*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.hash = {};
    this.array = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.hash[val] !== undefined) {
        return false;
    } else {
        this.array.push(val);
        let idx = this.array.length - 1;
        this.hash[val] = idx;
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.array.length === 0) return false;
    let valIdx = this.hash[val];
    if (valIdx === undefined) return false;

    let lastIdx = this.array.length - 1;
    let lastVal = this.array[lastIdx];
    [this.array[valIdx], this.array[lastIdx]] = [this.array[lastIdx], this.array[valIdx]];
    this.hash[lastVal] = valIdx;
    delete this.hash[val];
    this.array.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    // if(this.array.length === 0) return false;

    let len = this.array.length;
    let getRanIdx = Math.floor(Math.random() * len);
    return this.array[getRanIdx]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */