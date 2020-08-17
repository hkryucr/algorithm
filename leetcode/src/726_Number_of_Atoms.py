'''
726. Number of Atoms

Given a chemical formula (given as a string), return the count of each atom.

An atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

1 or more digits representing the count of that element may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.

Two formulas concatenated together produce another formula. For example, H2O2He3Mg4 is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.

Given a formula, output the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

Example 1:
Input: 
formula = "H2O"
Output: "H2O"
Explanation: 
The count of elements are {'H': 2, 'O': 1}.
Example 2:
Input: 
formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: 
The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
Example 3:
Input: 
formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation: 
The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
Note:

All atom names consist of lowercase letters, except for the first character which is uppercase.
The length of formula will be in the range [1, 1000].
formula will only consist of letters, digits, and round parentheses, and is a valid formula as defined in the problem.

'''

from collections import defaultdict
class Solution:
    def countOfAtoms(self, formula: str) -> str:
        # atoms = re.findall("[A-Z]{1}[a-z]?|[0-9]+|[\(\)]", formula)
        stack = []
        i = 0
        while i < len(formula):
            char = formula[i]
            if char.isdigit():
                num_str = ""
                while( i < len(formula) and formula[i].isdigit()):
                    num_str += formula[i]
                    i+=1
                stack.append(int(num_str))
                
            elif char.isupper():
                if i-1 >= 0 and not type(stack[-1]) == int and stack[-1] != "(": stack.append(1)
                if i+1 < len(formula) and formula[i+1].islower():
                    stack.append(char+formula[i+1])
                    i+=1
                else:
                    stack.append(char)
                i+=1
            elif char == "(":
                if i-1 >= 0 and not type(stack[-1]) == int and stack[-1] != "(": stack.append(1)
                stack.append(char)
                i+=1
                
            elif char == ")":
                if i-1 >= 0 and not type(stack[-1]) == int and stack[-1] != "(": stack.append(1)
                temp = []
                number = 1
                i+=1
                
                if i < len(formula) and formula[i].isdigit():
                    num_str = ""
                    while(i < len(formula) and formula[i].isdigit()):
                        num_str += formula[i]
                        i+=1
                    number = int(num_str)
                
                while True:
                    popped = stack.pop()
                    if popped == "(": break
                    if type(popped) == int:
                        popped = popped * number
                    temp.append(popped)
                            
                for el in reversed(temp): 
                    stack.append(el)
                
        if type(stack[-1]) != int:
            stack.append(1)
        
        num_dict = defaultdict(lambda: 0)
        for i in range(0,len(stack),2):
            num_dict[stack[i]] += stack[i+1]
        res = ""

        for (char, count) in (sorted(num_dict.items())):
            if count == 1:
                res += char
            else:
                res += (char + str(count))
        return res
        