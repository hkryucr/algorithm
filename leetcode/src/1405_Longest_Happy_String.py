'''
1405. Longest Happy String

A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

Given three integers a, b and c, return any string s, which satisfies following conditions:

s is happy and longest possible.
s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
s will only contain 'a', 'b' and 'c' letters.
If there is no such string s return the empty string "".

Example 1:

Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
Example 2:

Input: a = 2, b = 2, c = 1
Output: "aabbc"
Example 3:

Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It's the only correct answer in this case.
 

Constraints:

0 <= a, b, c <= 100
a + b + c > 0

'''

import heapq
class Solution(object):
    def longestDiverseString(self, a, b, c):
        res_str = ""
        heap = [(-a, "a"), (-b, "b"), (-c, "c")]
        heapq.heapify(heap)
        
        while heap:
            curr_num, curr_char = heapq.heappop(heap)
            if curr_num == 0: break
            curr_num *= -1
            if len(res_str) < 2 or not (res_str[-1] == res_str[-2] and res_str[-1] == curr_char):
                curr_num -= 1
                res_str += curr_char
            else: 
                second, second_char = heapq.heappop(heap)
                if second == 0:
                    break
                second *= -1
                res_str += second_char
                second -= 1
                heapq.heappush(heap, (-second, second_char))
                
            heapq.heappush(heap, (-curr_num, curr_char))
            
        return res_str
        
#         total_len = a+b+c
#         res_str = ""
#         idx = 0
#         first, first_str = a, "a"
#         second, second_str = b, "b"
#         third, third_str = c, "c"
        
#         while len(res_str) <= total_len:
#             arr_sorted = sorted([[first, first_str], [second, second_str], [third, third_str]], key=lambda x:-x[0])
#             [first, first_str] = arr_sorted[0]        
#             [second, second_str] = arr_sorted[1]        
#             [third, third_str] = arr_sorted[2]
            
#             if first == second and second == third and third == 0:
#                 break
                
#             if len(res_str) < 2 or not (res_str[idx-2] == res_str[idx-1] and res_str[idx-1] == first_str):
#                 res_str += first_str
#                 first-=1
#             else:
#                 if second == 0 and third == 0:
#                     break
#                 res_str += second_str
#                 second-=1
#             idx += 1
#         return res_str
            