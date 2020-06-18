/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    let storage = [1,1];
    let temp
    while(rowIndex > 1){
        temp = [1];
        
        for(let i = 1; i < storage.length;i++){
            temp.push(storage[i] + storage[i-1]);
        }
        temp.push(1);
        storage = temp;
        rowIndex--;
    }
    
    return storage;
};