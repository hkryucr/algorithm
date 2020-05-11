/*
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    /*
    DP(start, end) => gicen start, end num -> the number of possible tree

            node1         node2             node3
    DP(1, 3) = DP(2,3) + DP(1,1) * DP(3,3) + DP(1,2);
                2            2         30       2

    for(let i = left; i <= right; i++){
        // current i is node
        DP(left, right) += DP(left, i-1) * DP(i+1, right)
                            DP(1, 2) * DP(4, 3)=1
                              = 2
        }
          1 2 3   
        1 1 2 0
        2 0 1 2 
        3 0 0 1 
        
        everynode between 1 to 3 => 
        node 2  => 
        node 3  =>
          =>
    */

    let arr = Array.from({length: n}, () => new Array(n).fill(0));
    for(let i = arr.length-1; i >= 0; i--){
        for(let j = 0; j < arr.length; j++){
            if(i > j){
                arr[i][j] = 0;
            } else if( i === j){
                arr[i][j] = 1; 
            } else{
                for(let k = i; k <=j; k++){ // i = 1    j = 3 k = 1
                    let left = (k-1 < i) ? 1 : arr[i][k-1];   //  = 1
                    let right = (k+1 > j) ? 1 : arr[k+1][j] ; // arr[2][3] = 2
                    arr[i][j] += (left * right); //add 2 + add 1 + add 2 => into arr[1][3] = 5
                }
            }
        }
    }
    return arr[0][arr.length-1]
}

numTrees(3);