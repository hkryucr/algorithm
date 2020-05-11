// /96. Unique Binary Search Trees
// Medium

// 2848

// 106

// Add to List

// Share
// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Example:

// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3*
// ?

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
};

/*
n = 1

1

n = 2

1
 \ 
  2

  2  
 /
1

n=3     
                        /
//    1         3     3      2      1               2    
//     \       / \    /      / \      \             /  \
//      3     2   4  1      1   3      2           1     3
//     /     /       \                 \              
//    2     1         2                 3*
//   +3     +2         + 2              +4

n = 4

1
 \
  3
  /  
 2   

 if(a node is a left child -> under that node, can't create a new node with a new number n)
1. G(n): the number of unique BST for a sequence of length n.

2. F(i, n): the number of unique BST, where the number i is served as the root of BST (1 <= i <= n ).

F(i, n) =  F(1, i-1) * F(i+1, n);
F(1,2) => F(1,0) * F(2,2);
F(2,2) => F(1,1) * F(3,2);

F(i,n) => if ( i === n) or (i > n)=> 1

F(1, 1) -> 1
F(2, 4)

1
 \
  2

  2 
 / 
1

F(2, 4) = 2

  2 
 / \
1   4
   /  
  3    

  2
 / \
1   4
    /
   3
G(n) = sum from i = 1 to n of F(i, n)
*/

// # (2n)! / ((n+1)! n!)
// class Solution:
//     memo = {0: 1, 1: 1, 2: 2}
    
//     def numCombos(self, i, available) -> int:
//         return self.numTrees(i - 1) * self.numTrees(available - i)

//     def numTrees(self, n: int) -> int:
//         if (n in Solution.memo.keys()):
//             return Solution.memo[n]
//         sum = 0
//         for i in range(n):
//             sum += self.numCombos(i+1, n)
//         Solution.memo[n] = sum
        
//         return sum
          