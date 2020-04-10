// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        // curMin and curMax will be set up as linked lists
        this.curMin = null;
        this.curMax = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
            this.curMin = new Node(value);
            this.curMax = new Node(value);
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
            if (this.curMin.value > newNode.value){
                const tempNode = this.curMin;
                this.curMin = new Node(value);  
                this.curMin.next = tempNode;
            }

            if (this.curMax.value < newNode.value) {
                const tempNode = this.curMax;
                this.curMax = new Node(value);
                this.curMax.next = tempNode;
            }
        }
        return ++this.length;
    }
    
    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
            this.top = null;
            this.curMin = null;
            this.curMax = null;
        } else if (this.top !== this.bottom){
            if (this.curMax.value === this.top.value) {
              this.curMax = this.curMax.next;
            } else if (this.curMin.value === this.top.value) {
              this.curMin = this.curMin.next;
            }
            this.top = this.top.next;
        }
        this.length--;
        return temp;
    }

    size() {
        return this.length;
    }

    min() {
        return this.curMin;
    }

    max() {
        return this.curMax;
    }
}

exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
