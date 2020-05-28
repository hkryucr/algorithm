/*
128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    let set = new Set(nums);
    let maxLength = 1;
    for (let i = 0; i < nums.length; i++){
        let cur = nums[i]
        let curLength = 1;
        if(!set.has(cur)) continue;

        let right = cur + 1;
        let left = cur - 1;

        while(set.has(right)){
            curLength++;
            set.delete(right)
            right++;
        }
        while (set.has(left)) {
            curLength++;
            set.delete(left)
            left--;
        }
        maxLength = Math.max(maxLength, curLength);
    }
    return maxLength;
};