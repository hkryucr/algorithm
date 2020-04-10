// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(newNode){
        if(newNode.next){
            newNode.next = null;
        }

        if(this.length === 0){
            this.bottom = newNode;
            this.top = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop(){
        const tempNode = this.top;
        if(this.length === 0){
            return null;
        } else if (this.length === 1){
            this.bottom = null;
            this.top = null;       
            this.length--;     
        } else {
            this.top = this.top.next;
            this.length--;     
        }
        return tempNode.value;
    }

    size(){
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = null; // current -> prev
        this.outStack = null; // prev -> current
        this.front = null; // current
        this.back = null; // prev
    }

    enqueue(){

    }

    dequeue(){

    }

    size(){

    }

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
