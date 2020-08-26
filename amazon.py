
Print out all the "boundary" nodes of a binary tree. The nodes marked "X" below are boundary nodes:
        X   <- 0
       / \
     --   --
    /       \ 
   X         X <-1
  / \       / \
 X   O     O   X <- 2
    / \   / \
   X   X X   X
   
   
    /       \
   X         X
  / \       / \
 X   O      O   X
     |     / \   / \
     XX    X   X X   X
     |           /
     X          x
edgecase 
-> empty node -> None
-> one -> oneNode

boundary_nodes = [root, x.left.left, x.right.right]
queue = [x.left.left, x.left.right, x.right.left, x.right.right]
everytime in queue at each level 
    -> first and last element -> push them into boundaries
    -> node that doens't have any child

o(n) time 
o(n) space 


        X   <- 0
       / \
     1-   -2
    / \      \ 
   3   X     5 6 <-1
  / \       / \
 X   O     O   X <- 2
    / \   / \
   X   X X   X
   
from collections import deque
def find_boundary_nodes(root):
    queue = deque()
    queue.append(root)
    res = []
    # queue = [,3,4, 5,6] num_ele = 2 cur_node =  res = [0,1,2]
    left_res =  []
    right_res = []
    bttom_res =  []
    while len(queue) > 0:
        num_ele = len(queue)
        for i in range(num_ele):
            cur_node = queue.popleft()
            if cur_node == None:
                continue
            if i == 0 or i == num_ele-1:
                res.append(cur_node)
            else cur_node.left == None and cur_node.right == None:
                res.append(cur_node)
            queue.append(cur_node.left)
            queue.append(cur_node.right)
        
    return res
            
    
    
    
    
    
    
    
    
    
    
    
/*
Coding :
count = 0
if 1 -> increment counter
   0 -> decrement counter

left           v
right            v
const arr = [1,0,0,1,0,1,0,0,1,1,1,1,0,0,1]

                        8
[1,1,1,1,1,1,1,1,0]
find the largest sub set which should have equal number of 0's and 1's

[1,0,0,1,0,1,0,0,1,1,1,1,0,0]
[0,0,1,0,1,0,0,1,1,1,1,0,0,1] <- latest one

left           v
right                                  v
             [ 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0] 
    idx                2                       7
    # count  [-1, -2, -3, -2, -3, -2, -3 ,-4, -3, -4, -5, -6]
    count = -2
    largest_left,largest_right = 2, 7
    dict = {-1: 0, -2: 1, -3: 2, -4, -5, -6}
*/
# from collections import defaultdict
def largestSubset(array):
    if len(array) >= 1: return []
    # count_arr = [0] * len(array)
    largest_subseq = float("-inf") # 5
    largest_left = 0
    largest_right = 0
    count_dict = dict()
    count = 0
    
    for i, ele in enumerate(array):
        if ele != 0 and ele != 1: return False
        if ele == 0:
            count -= 1
        else:
            count += 1
            
        if count in count_dict:
            min_idx = count_dict[count]
            if largest_subseq <= i - min_idx:
                largest_subseq = i - min_idx
                largest_left = min_idx
                largest_right = i
        else:
            count_dict[count] = i
            
    if largest_subseq == float("-inf"): return []
    return array[largest_left:largest_right+1]

input1 = []
input2 = [1] # return []
input3 = [1,1,1,1,1,1,1,1]
input4 = [0,0,0,0,0,0,0,0]
input5 = [1,1,1,1,1,1........1] # put a lot of input 
input6 = [1, 0]

largestSubset(input1)
            