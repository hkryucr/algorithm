'''
97. Interleaving String
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false

'''

class Solution(object):
    def isInterleave(self, s1, s2, s3):
        if len(s1) + len(s2) != len(s3):
            return False
        dp = [[False for i in range((len(s2)+1))] for j in range((len(s1)+1))] 
        dp[0][0] = True

        for i in range(len(s1)):
            if s3[i] == s1[i] and dp[i][0]:
                dp[i+1][0] = True
        
        for i in range(len(s2)):
            if s3[i] == s2[i] and dp[0][i]:
                dp[0][i+1] = True

        for i in range(len(s1)):
            for j in range(len(s2)):
                if s3[i+j+1] == s1[i] and (dp[i][j+1]):
                    dp[i+1][j+1] = True
                    
                if s3[i+j+1] == s2[j] and (dp[i+1][j]):
                    dp[i+1][j+1] = True
        
        return dp[len(dp)-1][len(dp[0])-1]
    #    v
    # aa dbbb
    # s3[2]
#            "" d b b c a
#         "" T  F F  
#         a  T  *
#         a  T  T
#         b  F  T
#         c  
#         c  
#        v
# s1 = "aa"
      
# s2 = "  ab"
#        v
# s3 = "aa   ba"

# s3 - "aa" - can be formed two different ways 
# s1[0] + s2[0]
# s1[1] + no s2

# s3[i+j+1] <- s1[i] and s2[j] ???

# s3[i] => is this possible to create from s1+s2 ?


# 1) "aa" "ba"
# 2) "ba" "aa"
# 3) "a" "ba" "a"


# [[True,  False, False, False, False, False], 
#  [True,  False, False, False, False, False], 
#  [True,  False, False, False, False, False], 
#  [False, False, False, False, False, False], 
#  [False, False, False, False, False, False], 
#  [False, False, False, False, False, False]]

        