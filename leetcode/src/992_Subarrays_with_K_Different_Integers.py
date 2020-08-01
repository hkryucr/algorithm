'''
992. Subarrays with K Different Integers

Given an array A of positive integers, call a (contiguous, not necessarily distinct) subarray of A good if the number of different integers in that subarray is exactly K.

(For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.)

Return the number of good subarrays of A.

Example 1:

Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
Example 2:

Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 

Note:

1 <= A.length <= 20000
1 <= A[i] <= A.length
1 <= K <= A.length

'''

from collections import deque, defaultdict

class Solution(object):
    def subarraysWithKDistinct(self, A, K):
        return self.find_k_most_subarr(A, K) - self.find_k_most_subarr(A, K-1)
        
    def find_k_most_subarr(self, A, K):
        num_dict = defaultdict(lambda: 0)
        counter = 0
        left = 0
        
        for i, cur_number in enumerate(A):
            num_dict[cur_number]+=1
            while len(num_dict) > K:
                num_dict[A[left]] -= 1
                if num_dict[A[left]] == 0:
                    del num_dict[A[left]]
                counter += (i - left)
                left += 1

        while left < len(A):
            num_dict[A[left]] -= 1
            if num_dict[A[left]] == 0:
                del num_dict[A[left]]
            counter += (len(A) - left)
            left += 1    

        return counter
        
        
    
        