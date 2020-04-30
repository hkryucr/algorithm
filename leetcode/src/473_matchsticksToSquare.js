/*
473. Matchsticks to Square

Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, please find out a way you can make one square by using up all those matchsticks. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Your input will be several matchsticks the girl has, represented with their stick length. Your output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has.

Example 1:
Input: [1,1,2,2,2]
Output: true

Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:
Input: [3,3,3,3,4]
Output: false

Explanation: You cannot find a way to form a square with all the matchsticks.
Note:
The length sum of the given matchsticks is in the range of 0 to 10^9.
The length of the given matchstick array will not exceed 15.

*/
var makesquare = function (nums) {
    // sum = ... && oneSide
    // side1
    // side2
    // side3
    // side4
    // [[1,1],[2],[2],[2]];
    // break the problem into subproblems
    // snapshot of something
    // what if nums[i] === oneSide
    // what if nums[i] < oneSide
    // what if nums[i] > oneSide
    // [111111115555]
    // [1111] => false
    // [1,1,1,1] + 1 [2,3,4,1] +2 ->  3 -> 
    // [5,5,5,5,4,4,4,4,3,3,3,3]
    // [4,4,4,4,3,3,3,3,2,2,2,2,1,1,1,1]
    // [555511111111111]
    // amount = [0,1,,,,,,,,]
    // minChange = [0,1,2,,,] amount

    nums.sort((a, b) => b - a)
    let table = new Array(4).fill(0);
    let sum = nums.reduce((a, b) => a + b);
    for(let i = 0; i < nums.length; i++){
        let curMinIdx = findSmallest(table);
        table[curMinIdx] += nums[i];
    }
    return table.every(ele => ele === (sum / 4));
}

function findSmallest(arr){
    let min = arr[0];
    let minIdx = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minIdx = i;
        }
    }
    return minIdx;
}
let input1 = [1, 1, 2, 2, 2]
let input2 = [3, 3, 3, 3, 4]
let input3 = [5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]
let input4 = [5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2]
let input5 = [10, 6, 5, 5, 5, 3, 3, 3, 2, 2, 2, 2]
// console.log(makesquare(input1));
// console.log(makesquare(input2));
// console.log(makesquare(input3));
// console.log(makesquare(input4));
console.log(makesquare(input5));



/*
var makesquare = function (nums) {
    if (nums.length === 0) return false;
    nums.sort((a, b) => b - a)
    let oneSideSum = nums.reduce((a, b) => a + b) / 4;

    function helper(arr, sum1, sum2, sum3, sum4, idx) {

        if (sum1 < 0 || sum2 < 0 || sum3 < 0 || sum4 < 0) return false;

        if (idx < 0 && sum1 === 0 && sum2 === 0 && sum3 === 0 && sum4 === 0) {
            return true;
        }

        if (idx < 0) return false;

        let curEl = arr[idx];

        const s1 = helper(arr, sum1 - curEl, sum2, sum3, sum4, idx - 1)
        const s2 = helper(arr, sum1, sum2 - curEl, sum3, sum4, idx - 1)
        const s3 = helper(arr, sum1, sum2, sum3 - curEl, sum4, idx - 1)
        const s4 = helper(arr, sum1, sum2, sum3, sum4 - curEl, idx - 1)

        if (s1 || s2 || s3 || s4) {
            return true;
        } else {
            return false;
        }
    }

    return helper(nums, oneSideSum, oneSideSum, oneSideSum, oneSideSum, nums.length - 1);
};
*/