'''
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

'''

class Solution(object):
    def minimumTotal(self, triangle):
        if(len(triangle) == 0):
            return 0
        
        pre_arr = triangle[0]
        
        for i in range(len(triangle)):
            if(i == 0):
                continue
            cur_arr = triangle[i]
            new_arr = [0] * len(cur_arr)

            for j in range(len(cur_arr)):
                if j == 0:
                    new_arr[j] = cur_arr[j] + pre_arr[j]
                elif j == len(cur_arr)-1:
                    new_arr[j] = cur_arr[j] + pre_arr[j-1]
                else: 
                    new_arr[j] = cur_arr[j] + min(pre_arr[j], pre_arr[j-1])
            pre_arr = new_arr
        return min(pre_arr)