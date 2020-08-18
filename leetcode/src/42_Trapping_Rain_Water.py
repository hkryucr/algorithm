'''
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

'''
class Solution:
    def trap(self, height: List[int]) -> int:
#         # brute force
#         left_bound = [0] * len(height)        
#         right_bound = [0] * len(height)
        
#         max_height = 0
#         for i, h in enumerate(height):
#             max_height = max(max_height, h)
#             left_bound[i] = max_height
       
#         max_height = 0
#         for i, h in reversed(list(enumerate(height))):
#             max_height = max(max_height, h)
#             right_bound[i] = max_height
            
#         water = 0
#         for i, h in enumerate(height):
#             cur_height = min(left_bound[i], right_bound[i])
#             if (cur_height - h) > 0:
#                 water += cur_height - 
#         return water

        # two pointers
        
        left_max = 0        
        right_max = 0
        left = 0
        right = len(height)-1
        
        water = 0
        while left < right:
            cur_left = height[left]
            cur_right = height[right]
            left_max = max(cur_left, left_max)
            right_max = max(cur_right, right_max)
            cur_min_max = min(right_max, left_max)  
            cur_min_ele = min(cur_left, cur_right)
            
            if cur_min_max - cur_min_ele > 0:
                water += (cur_min_max - cur_min_ele)
            
            if height[left] < height[right]:
                left+=1
            else: 
                right-=1
            
        return water
        