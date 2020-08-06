'''
227. Basic Calculator II
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.

'''

import re
class Solution(object):
    def calculate(self, s):
        num_stack = []
        ope_stack = []

        for cur_str in re.split(r'(\D)', s):
            if cur_str == " " or cur_str == "":
                continue
            if not cur_str.isdigit():
                ope_stack.append(cur_str)
            elif len(ope_stack) == 0 or ope_stack[-1] == "+":
                num_stack.append(int(cur_str))
            elif len(ope_stack) > 0:
                prev_ope = ope_stack.pop()
                prev = num_stack.pop()
                if prev_ope == "*":
                    cur_str = (prev) * int(cur_str)
                elif prev_ope == "/":
                    if prev < 0:
                        cur_str = -(prev) / int(cur_str)
                        cur_str = -cur_str
                    else:
                        cur_str = (prev) / int(cur_str)
                elif prev_ope == "-":
                    num_stack.append(prev)
                    cur_str = -int(cur_str)
                num_stack.append(int(cur_str))

        return sum(num_stack)
            
        
        