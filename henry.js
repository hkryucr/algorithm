/*
https://leetcode.com/problems/subarray-sum-equals-k/
https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
Given an array of integers and an integer k, you need to find the total number of continuous subarrays 
whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2

 0 1
[1,1]
 1 2
[1,1]
   v v
         v 
[1,2,3,4,5,6]
k = 5
2

// el in the array can be any integer;
// k can be any integer;

Naive approach -> use nested for loop -> find all continuous subarrays and find elements whose sum is K

i = 0
j = 1 
=> [1,2] -> see its sum
n^2 * n => n^3
no space required for this.

[1,2,3,4,5,6]

[1,2,3]
              1 2 3 4   3  5 
Input:nums = [1,1,1,1, -1, 2,1], k = 2
=> 3
nums =     [1, 1, 1] k = 2
            i     j 
         0  1  2  3
         0 1 2 3 4 3 4

prefix =[0, 1, 2, 3, 1, 3, 1]
prefix[i] - k =  prefix[j];
 i > j
i < j < n < l
sum(nums[i:l]) == k
sum(nums[j:n]) == k
k = 2
hash = {
    0: 1
    1: 1,
    2: 2
    3: 2
}

prefix[3] = sum of all number in nums 0 to 2
prefix[1] = sum of all number in nums 0 to 0

prefix[i] = sum(nums[0:i])
prefix[j] = sum(nums[0:j])

can you get sum(nums[i:j]) using prefix?

sum(nums[i:j]) == k

sum(nums[i:j]) = prefix[i], prefix[j]
i = 6 j = 3
            v   v v  v v v v
prefix = > [5,-10,6,-1,5,6,7]

hashmap ={
    value: counts
}
Tabulation
  0 1 2  i
0 1 0 0  
1 3 2
2 6 5 3 
j

*/

