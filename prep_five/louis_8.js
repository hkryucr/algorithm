/*
142. Linked List Cycle II

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) 
in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
//
Input: head = [3,2,0,-4], pos = 1

formula => 
distance between starting and cycle entrance = d
distance between cycle entrance and meeting point = S

distance (slow) = d + s
distance fast = 2 (d + s) // twice faster
fast - slow = cycle
2 (d + s) - d-s = cycle

cycle  = s + d
d = cycle - s
 // slow = 2 / 0 / -4 ->    d (3->2) + s (2 -> 0 -> -4) 
 // fast = 0 / 2 / -4  ->    6 steps = 2 * d + 2 * s
 r(cycle) = fast - slow  = d + s
 one cycle means  = d + s
 distacne between head to entrance = cycle - s;

3
| d 
2(e)             cycle(r)
|  \  (cycle-s)  
0--- -4
fast |  slow
3        3
0        2
2        0
-4       -4
*/

var detectCycle = function (head) {
    let fast = head
    let slow = head

    while(fast.next && fast.next.next) {
        if (fast === slow) {
            return true
        }
        fast = fast.next.next
        slow = slow.next
    }
    return -1
}

// https://leetcode.com/problems/find-the-duplicate-number/