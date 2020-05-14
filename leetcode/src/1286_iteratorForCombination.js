/*
1286. Iterator for Combination
Medium

143

18

Add to List

Share
Design an Iterator class, which has:

A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
A function next() that returns the next combination of length combinationLength in lexicographical order.
A function hasNext() that returns True if and only if there exists a next combination.


Example:

CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

iterator.next(); // returns "ab"
iterator.hasNext(); // returns true
iterator.next(); // returns "ac"
iterator.hasNext(); // returns true
iterator.next(); // returns "bc"
iterator.hasNext(); // returns false


Constraints:

1 <= combinationLength <= characters.length <= 15
There will be at most 10^4 function calls per test.
It's guaranteed that all calls of the function next are valid.

*/

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
    this.outcome = [];
    this.length = combinationLength;
    this.index = 0;
    this.createSubString("", characters, 0, combinationLength);
};

CombinationIterator.prototype.createSubString = function (prevStr, str, curIdx, len) {
    if (len <= 0) {
        if (prevStr.length === this.length) this.outcome.push(prevStr);
        return;
    }
    for (let i = curIdx; i < str.length; i++) {
        this.createSubString(prevStr + str[i], str, i + 1, len - 1);
    }
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
    return this.outcome[this.index++]
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
    return this.outcome[this.index] ? true : false;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 // we should have the data
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

