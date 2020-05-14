/*
131. Palindrome Partitioning

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
aabaa
a + partition(abaa)
aa + partition(baa)
aab -> no
aaba -> no
aabaa

Output:
[
  ["aa","b"],
  ["a","a","b"]
]

*/


var partition = function(s) {
    function isPalindrome(s) {
        for (let i = 0; i <= Math.floor(s.length / 2); i++) {
            let j = s.length - 1 - i;
            if (s[i] !== s[j]) return false
        }
        return true
    }
    let i = 1;
    let partitions = []
    while (i < s.length) {
        let firstPart = s.slice(0, i)
        let rest = s.slice(i)
        if (isPalindrome(firstPart)) {
            let restPartitions = partition(rest)
            for (let i = 0; i < restPartitions.length; i++) {
                partitions.push([firstPart, ...restPartitions[i]])
            }
        } 
        i++
        
    }
    return partitions
    
}