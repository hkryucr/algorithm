/*
981. Time Based Key-Value Store
Create a timebased key-value store class TimeMap, that supports two operations.

1. set(string key, string value, int timestamp)

Stores the key and value, along with the given timestamp.
2. get(string key, int timestamp)

Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
If there are multiple such values, it returns the one with the largest timestamp_prev.
If there are no values, it returns the empty string ("").


Example 1:

Input: inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
Output: [null,null,"bar","bar",null,"bar2","bar2"]
Explanation:
TimeMap kv;
kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
kv.get("foo", 1);  // output "bar"
kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
kv.set("foo", "bar2", 4);
kv.get("foo", 4); // output "bar2"
kv.get("foo", 5); //output "bar2"

Example 2:

Input: inputs = ["TimeMap","set","set","get","get","get","get","get"], inputs = [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
Output: [null,null,null,"","high","high","low","low"]
*/

/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
    this.db = {};
    return null;
};

TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.db[key] === undefined) {
        this.db[key] = [];
    }
    this.db[key].push([value, timestamp]);
    return null;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (this.db[key] === undefined) return "";

    let arr = this.db[key];
    let found = this.BS(arr, timestamp);
    if (found === null) return "";
    return found[0];
};

TimeMap.prototype.BS = function (array, timestamp) {
    let left = 0;
    let right = array.length - 1;
    if (array[left][1] > timestamp) return null;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let curTime = array[mid][1]

        if (curTime === timestamp) {
            return array[mid];
        } else if (mid + 1 < array.length && array[mid][1] < timestamp && array[mid + 1][1] > timestamp) {
            return array[mid];
        } else if (curTime < timestamp) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return array[right];
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */