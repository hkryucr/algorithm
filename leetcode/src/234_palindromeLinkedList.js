/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// var isPalindrome = function(head) {
//     if(!head || !head.next) return true;
//     let root = head;
//     // let root = head;
    
//     function dfs(node){
//         if(node === null) return;
//         if(dfs(node.next) === false) return false;
        
//         if(node.val !== head.val){
//             return false;
//         }
//         head = head.next;
//         return true;
//     }
    
//     return dfs(root)
// };

var isPalindrome = function(head) {
    let slow = head
    let fast = head
    
    while (fast && fast.next != null) {
        slow = slow.next
        fast = fast.next
        fast = fast.next
    }

    let reverse = null
    
    while (slow != null) {
        let next = slow.next
        slow.next = reverse
        reverse = slow
        slow = next
    }
    
    let p1 = head
    let p2 = reverse
    
    while (p1 != null && p2 != null) {
        if (p1.val != p2.val) return false
        p1 = p1.next
        p2 = p2.next
    }
    
    return true
}; 