// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return all possible palindrome partitioning of s.

// Example:

// Input: "aab"
// Output:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

var partition = function(s) {
    if(s.length < 2) return [[s]];
    let partitions = [];
    let temp = [];
    getPartition(s, partitions, temp, s);
    return partitions;
};

const getPartition = function(str, partitions, temp, substr){
    if(temp.join('') === str){ // [a, a, b].join('') === 'aab'
        partitions.push(temp.slice());
        return;
    }
    
    for(let i = 1; i <= substr.length; i++){
        let sub = substr.slice(0, i);
        if(isPalindrome(sub)) {
            temp.push(sub);
            getPartition(str, partitions, temp, substr.slice(i))
            temp.pop();
        }
    }
}

const isPalindrome = function(str){
    return str === str.split('').reverse().join('');
}