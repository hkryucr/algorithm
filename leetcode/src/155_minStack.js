/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 
Constraints:

Methods pop, top and getMin operations will always be called on non-empty stacks.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    
    let curVal = {min: x, val: x};
    let prevVal = this.stack[this.stack.length-1];
    if(prevVal){
        curVal.min = Math.min(prevVal.min, curVal.min);

    }
    this.stack.push(curVal)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length !== 0){
        return this.stack.pop().val;
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length !== 0){
        return this.stack[this.stack.length-1].val;
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return (this.stack.length !== 0) ? this.stack[this.stack.length-1].min : null
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */