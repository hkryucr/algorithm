'''
273. Integer to English Words
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

'''

class Solution:
    def numberToWords(self, num):
        if num == 0: return "Zero"
        huge_num_dict = { 1000000000: 'Billion', 1000000: 'Million', 1000: 'Thousand'}
        res = []

        for huge_num in [1000000000, 1000000, 1000]:
            if num >= huge_num:
                digit = num / huge_num
                num %= huge_num
                self.convert_char(digit, res)
                res.append(huge_num_dict[huge_num])

        self.convert_char(num, res)
        return " ".join(res)
      
    def convert_char(self, cur_num, res):
        if 100 <= cur_num:
            digit = cur_num / 100
            cur_num %= 100
            self.convert_char(digit, res)
            res.append("Hundred")

        if 10 <= cur_num <= 19:
            res.append(self.two_less_20(cur_num))
        elif 0 < cur_num < 10:
            res.append(self.one(cur_num))
        elif 0 == cur_num:
            return
        else:
            digit = cur_num / 10
            cur_num %= 10
            
            if digit > 0:
                res.append(self.ten(digit))
            if cur_num != 0:  
                res.append(self.one(cur_num))
      
    def one(self, num):
        switcher = { 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine' }
        return switcher[num]

    def two_less_20(self, num):
        switcher = { 10: 'Ten', 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen' }
        return switcher[num]

    def ten(self, num):
        switcher = { 2: 'Twenty', 3: 'Thirty', 4: 'Forty', 5: 'Fifty', 6: 'Sixty', 7: 'Seventy', 8: 'Eighty', 9: 'Ninety' }
        return switcher[num] 
