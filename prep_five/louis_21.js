/*
239. Sliding Window Maximum

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

Follow up:
Could you solve it in linear time?

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3  [1, 3, -1]
 1 [3  -1  -3] 5  3  6  7       3  [1, 3, -3]
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 
 1  3  -1   9  5  3  6  7
Constraints:

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length

 1 [3  -1  -3] 5  3  6  7 
 1  3 [-1  -3  5] 3  6  7       

 queue = [the maximum value only or the values coming after maximum value]

 if a new value is greater than all values -> for the next k times, this 5 would be greatest unless coming new values are greater than this 5

*/

var maxSlidingWindow = function(nums, k) {

}