/*
strictly decreasing?

[1,4,10,2] this is a peak
[4,0,10] are not peak
[1,2,2,0] are not a peak

where the peak starts and ends
              v
[1,2,3,3,4,0,10,6,5,-1,-3,2,3]

*/
// increasing or decreasing
// [1,2,3, 2, 1]

// // need to keep track of increasing or decreasing numbers

// 1) itereate through the arr
// 2) whether the current status incresing or not (keep track of increasing or decreasing)

// increasing = 0
// decreasing = 0

// -> 
// 1,2,3

// 3 different cases (current element with the previous element)
//   1) increasing number 
//     -> if there are decreasing numbers & increasing number -> calcualte the the length of current peak
//     -> increment increasing
//   2) decreasing number 
//     -> if there's no increasing number before -> continue;
//     -> increment decreasing

//   3) same number -> increasing / decreasain = 0;

// at the end of the iteration -> if still increasing & decreasing -> calculate calcualte the the length of current peak

// [1,2,3,2,1] 
// len = 5
// increasing = 2
// decreasing = 2

// -> calculate len and update it

function longestPeak(arr) {
    let increasing = 0, decreasing = 0, maxPeak = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            // increasing
            if (increasing > 0 && decreasing > 0) {
                maxPeak = Math.max(maxPeak, increasing + decreasing + 1);
                increasing = 0;
                decreasing = 0;
            }
            increasing++;
        } else if (arr[i - 1] > arr[i]) {
            // decreasing
            if (increasing === 0) continue;
            decreasing++;
        } else {
            if (increasing > 0 && decreasing > 0) {
                maxPeak = Math.max(maxPeak, increasing + decreasing + 1);
                increasing = 0;
                decreasing = 0;
            }
            increasing = 0;
            decreasing = 0;
        }
    }
    if (increasing && decreasing) maxPeak = Math.max(maxPeak, increasing + decreasing + 1);
    return maxPeak;
}
const testOne = [1, 2, 3, 2, 1, 1] // 5
const testTwo = [
    1,
    1,
    1,
    2,
    3,
    10,
    12,
    -3,
    -3,
    2,
    3,
    45,
    800,
    99,
    98,
    0,
    -1,
    -1,
    2,
    3,
    4,
    5,
    0,
    -1,
    -1
] // 9
console.log(longestPeak(testOne)) // 5
console.log(longestPeak(testTwo)) // 9
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])) // 6