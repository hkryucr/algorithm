'''
415. Add Strings
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

'''

class Solution(object):
    def addStrings(self, num1, num2):
        res = ""
        carry = 0
        num1_idx = len(num1) - 1
        num2_idx = len(num2) - 1
        
        while num1_idx >= 0 or num2_idx >= 0 or carry != 0:
            cur_num1 = int(num1[num1_idx]) if num1_idx >= 0 else 0
            cur_num2 = int(num2[num2_idx]) if num2_idx >= 0 else 0
            cur_sum = carry + cur_num1 + cur_num2
            carry = cur_sum / 10
            cur_sum %= 10
            res = str(cur_sum) + res
            
            num1_idx -= 1
            num2_idx -= 1
            
        return res
    