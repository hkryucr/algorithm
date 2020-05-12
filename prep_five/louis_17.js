/*
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

var permuteUnique = function(nums) {
  var permute = function(nums) {
    if (nums.length === 1) {
      return [nums]
    }
    let result = []
    for (let i = 0; i < nums.length; i++) {
      var rest = []
      for (let j =0; j < nums.length; j++) {
        if (i !== j) {
          rest.push(nums[j])
        }
      }
      rest = permute(rest)
      for (let k = 0; k < rest.length; k++) {
        result.push([nums[i], ...rest[k]])
      }
    }
    return result
  }
  const s = new Set()
  const result = []
  const permutations = permute(nums)
  for (let i = 0; i < permutations.length; i++) {
    if (!s.has(permutations[i].toString())) {
      s.add(permutations[i].toString())
      result.push(permutations[i])
    }
  }
  return result
}
console.log(permuteUnique([1,1,2]))