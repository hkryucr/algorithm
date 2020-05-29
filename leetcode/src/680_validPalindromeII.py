class Solution(object):  
    def validPalindrome(self,s):
        left, right = 0, len(s) - 1
        while left < right:
            if s[left] != s[right]:
                one, two = s[left:right], s[left + 1:right + 1]
                return one == one[::-1] or two == two[::-1]
            left, right = left + 1, right - 1
        return True
#     def validPalindrome(self, s):
#         left = 0
#         right = len(s) - 1
#         while(left < right):
#             if(s[left] != s[right]):
#                 if(left+1 < len(s) and self.isPalindrome(s, left+1, right)):
#                     return True
                
#                 if(right-1 >= 0 and self.isPalindrome(s, left, right-1)):
#                     return True
#                 return False
#             left += 1
#             right -= 1
#         return True
    
#     def isPalindrome(self, str, left, right):
#         while(left < right):
#             if(str[left] != str[right]):
#                 return False
#             left += 1
#             right -= 1
#         return True
    