/**
 * 
 * 274
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: 
"A scientist has index h 
if h of his/her N papers have at least h citations each, 
and the other N − h papers have no more than h citations each."

Example:

Input: citations = [3,0,6,1,5] // 01356
Output: 3 
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3.
Note: If there are several possible values for h, the maximum one is taken as the h-index.
 * 
 */
/*

n = the length of the array
while(n)
 n--;
// iterate cita array -> count the number of el >= n -> 
    -> if (count >= n)  // count = 3 // n = 3 
    -> return count;

time = O(n^2);
space = contant;
every element is non-negative integer

arr = [1,1,,1,,1,1m,    ,, , ,, , , , .,,,,,1]
arr[1000] = 1 
iterate through this arr => iterate through 10000000
*/

/**
 * @param {number[]} citations
 * @return {number}
 */

var hIndex = function (citations) {
    let countArr = [];

    for(let i = 0; i < citations.length; i++){
        let curVal = citations[i];
        if (curVal > citations.length){
            curVal = citations.length;
        }

        if (countArr[curVal] === undefined) {
            countArr[curVal] = 1;
        } else {
            countArr[curVal]++;
        }
    }

    let countCitation = 0;

    for(let i = countArr.length; i >= 0; i--){
        if (countArr[i] === undefined) continue; 
        countCitation += countArr[i];
        if (i <= countCitation){ // 3
            return i;
        }
    }
    return 0;
}


// var hIndex = function(citations) {
//     if (citations.length === 0) return 0;
//     if (citations.length === 1 && citations[0] >= 1) return 1;
//     if (citations.length === 1) return 0;

//     let len = citations.length;

//     while( len > 0 ){
//         let counter = 0;
//         for(let i = 0; i < citations.length; i++){
//             if(citations[i] >= len){
//                 counter++;
//             }
//         }
//         if (counter >= len) return len;
//         len--;
//     }  
//     return 0;
// };

console.log(hIndex([3, 0, 6, 1, 5]))