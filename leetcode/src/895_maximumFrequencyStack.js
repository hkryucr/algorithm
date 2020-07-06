/*
895. Maximum Frequency Stack
Implement FreqStack, a class which simulates the operation of a stack-like data structure.

FreqStack has two functions:

push(int x), which pushes an integer x onto the stack.
pop(), which removes and returns the most frequent element in the stack.
If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.
 

Example 1:

Input: 
["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
Output: [null,null,null,null,null,null,null,5,7,5,4]
Explanation:
After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

pop() -> returns 5, as 5 is the most frequent.
The stack becomes [5,7,5,7,4].

pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
The stack becomes [5,7,5,4].

pop() -> returns 5.
The stack becomes [5,7,4].

pop() -> returns 4.
The stack becomes [5,7].
 

Note:

Calls to FreqStack.push(int x) will be such that 0 <= x <= 10^9.
It is guaranteed that FreqStack.pop() won't be called if the stack has zero elements.
The total number of FreqStack.push calls will not exceed 10000 in a single test case.
The total number of FreqStack.pop calls will not exceed 10000 in a single test case.
The total number of FreqStack.push and FreqStack.pop calls will not exceed 150000 across all test cases.
 
*/

var FreqStack = function() {
    this.freq = {};
    this.hashArr = {};
    this.maxFreq = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(this.freq[x] === undefined){
        this.freq[x] = 1;
        if(this.hashArr[1] === undefined) this.hashArr[1] = [];
        this.hashArr[1].push(x);
        this.maxFreq = Math.max(this.maxFreq, 1);
    } else {
        this.freq[x]++;
        let curFreq = this.freq[x];
        if(this.hashArr[curFreq] === undefined) this.hashArr[curFreq] = [];
        this.hashArr[curFreq].push(x);
        this.maxFreq = Math.max(this.maxFreq, curFreq);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {    
    let curLevelArr = this.hashArr[this.maxFreq];
    let curVal = curLevelArr.pop();
    this.freq[curVal]--;
    if(curLevelArr.length === 0){
        delete this.hashArr[this.maxFreq];
        this.maxFreq--;
    }
    return curVal;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */