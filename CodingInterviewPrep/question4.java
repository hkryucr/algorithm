/*
75. sort colors
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent,
 with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Dutch national flag problem
Edsger Dijkstra 

Example:
you increment mid you found 1 or 0.
you find 2 -> swap don't increment

               ^                mid
             ^       high
           ^                low

Input:  [0,1,1,2,2,2]

Input:  [2,0,2,1,1,0]
                 ^               low
             ^                mid
               ^ 
        [0,0,1,1,2,2]
        [0,0,2,1,1,2] mid = 0; low = 0; high=4
Output: [0,0,1,1,2,2]

low = 0
high = n-1
while(low<high){
    if(nums[low]=2 && nums[high]=0)
        swap(nums[i])
}

// count array sort
arr = [1,0,0,1,1,2,2]

zero = 2
one = 3
two = 2
[0,0,1,1,1,2,2]

for(let i = 0; i < arr.length; i++){
    if(zero > 0){
        arr[i] = 0
        zero--;
    } else if (one > 0){
        arr[i] = 1
        one--;
    } else {
        arr[i] = 2
        two--;
    }
}
O(n)
*/

class Solution {
    public void sortColors(int[] nums) {
        int mid = 0;
        int low = 0;
        int high = nums.length - 1;

        while(mid<=high){
            if(nums[mid]==2){
                swap(nums, mid, high);
                high--;
            }
            else if(nums[mid]==0){
                swap(nums, low, mid);
                low++;
                mid++;
            }
            else mid++;
        }
    }

    private void swap(int[] nums, int i1, int i2){
        int tmp = nums[i1];
        nums[i1] = nums[i2];
        nums[i2] = tmp;
     }
}