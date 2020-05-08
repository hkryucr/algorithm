/*
1011. Capacity To Ship Packages Within D Days

example1
Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
carry all weights in the array in D days
1st day: 1, 2, 3, 4, 5        = 15
2nd day: 6, 7 
3rd day: 8
4th day: 9
5th day: 10

output = 15

Example2 
weights = [3,2,2,4,1,4], D = 3
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4

Output = 6

Your goal is to find the least weight capacity of the ship that will result in all the packages being shpped within D days

*/

// D = # days => max number of partitions array

var shipWithinDays = function(weights, D) {
    let totalWeight = weights.reduce((a, b) => a + b);
    let minBound = totalWeight / D;

    let sum = 0;
    let i = 0;

    // using while loop, will increment the minBound until you find the bound satisfies all weights in D days
    // 11 
    // [1,2,3,4,5,6,7,8,9,10]
    // create an array whose length is D
    // push elements while iterating throu into dayArray
    // if exceeding the bound of eacch el in dayArray -> go to next day
    // [11, 11 ,11 ,11 ,11]
    // if you can't make this within D day  => increment your bound ++
    // with iteration, find how many numbers I can ship in 1 day without hitting minBound
    while(D > 0){

    }
}