/*
https://leetcode.com/problems/validate-stack-sequences/
946. Validate Stack Sequences

when do you make a wrong move(action)?
=> how do you know the arrays are invalid?

Given two sequences pushed and popped with distinct values, 
return true if and only if this could have been the result of a sequence of 
push and pop operations on an initially empty stack.

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true

Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
pushed : [1,2]
pop:[4,3,5]

0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed is a permutation of popped.
pushed and popped have distinct values.

topA

a = [1,2,3,4,5,6] topA = 1
b = [4,5,3,2,1,6] topB = 1
st = [1,2,3,4] peekSt = = b => popSt and topB++
               [1,2,3,4,5] peekSt == b ==> popSt and topB++
                [1,2,3,4,6] topB = 2
*/

public boolean validateStackSequences(int[] a, int[] b){
    Stack<Integer> st = new Sta

}  