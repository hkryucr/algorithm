/*
# 1007
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  
(A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

Input: 
A = [2,1,2,4,2,2], 
B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Input: 
A = [3,5,1,2,3], 
B = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.

1 < element < 6

1,2,3,4,5,6
{
    1: [1],
    2: [0,1,2,3,4,5] === length of the arr -> rotate and make it
    2: []
}
[1,1,1,2,1]
[2,2,2,1,2]
*/

function minDominoRotations(arr1, arr2){
    let checkArr = [];
    for(let i = 1; i <= 6; i++){
        checkArr[i] = [];
    }

    for(let i = 0; i < arr1.length; i++){
        const val1 = arr1[i];
        const val2 = arr2[i];
        checkArr[val1].push(i)
        if(val1 === val2) continue;
        checkArr[val2].push(i)
    }

    let possibleNum = null;
    for(let i = 1; i <= 6; i++){
        if(checkArr[i].length === arr1.length){
            possibleNum = i;
        }
    }
    if (possibleNum === null) return -1;

    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < arr1.length; i++){
        if(possibleNum !== arr1[i]){
            count1++;
        }
        if (possibleNum !== arr2[i]) {
            count2++;
        }
    }

    return (count1>count2) ? count1 : count2;
}

const A3 = [1, 2, 1, 1, 1, 2, 2, 2];
const B3 = [2, 1, 2, 2, 2, 2, 2, 2];

const A = [3, 5, 1, 2, 3]
const B = [3, 6, 3, 3, 4]
const A2 = [2, 1, 2, 4, 2, 2]
const B2 = [5, 2, 6, 2, 3, 2]
console.log(domino(A, B));
console.log(domino(A2,B2));