'''
718. Maximum Length of Repeated Subarray

Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:

Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
 

Note:

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
'''

class Solution(object):
    def findLength(self, A, B):
        dp = [ [0] * (len(B)+1) for _ in range(len(A) + 1) ]
        max_len = 0
        for a_i, row in enumerate(dp):
            if a_i == 0: continue

            for b_i, ele in enumerate(row):
                if b_i == 0: continue

                if A[a_i - 1] == B[b_i - 1]:
                    dp[a_i][b_i] = dp[a_i-1][b_i-1] + 1
                    max_len = max(max_len, dp[a_i][b_i])

        return max_len
        
class Solution(object):
    def findLength(self, A, B):
        B,A = sorted([A,B], key=len)
        m = len(A)
        n = len(B)
        maxLen = 0
        
        for a in xrange(-n+1, m+n-1):
            cnt = 0
            for ptrB in xrange(n):
                ptrA = a+ptrB
                if ptrA < 0 : continue
                if ptrA >= m : break
                if A[ptrA]==B[ptrB]:
                    cnt += 1
                    if cnt > maxLen: maxLen = cnt
                else:
                    cnt = 0
                    
        return maxLen
