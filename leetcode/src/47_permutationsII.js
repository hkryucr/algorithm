/*
47. Permutations II
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length === 0) return [];
    if(nums.length === 1) return [nums];
    
    let last = nums.pop();
    let prevPerm = permuteUnique(nums);
    let newArr = [];
    let set = new Set();
    for(let i = 0; i < prevPerm.length; i++){
        let curArr = prevPerm[i];
        for(let j = 0; j < curArr.length; j++){
            let cur = [...curArr.slice(0, j), last, ...curArr.slice(j)];
            let strCur = cur.toString();
            if(!set.has(strCur)){
                newArr.push(cur);
                set.add(strCur)
            };
            
        }
        let lastArr = [...curArr, last];
        let lastArrStr = lastArr.toString();
        if(!set.has(lastArrStr)){
            newArr.push(lastArr);
            set.add(lastArrStr)
        };
    }
    
    return newArr;
};
