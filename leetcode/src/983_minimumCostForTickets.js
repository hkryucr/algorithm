/*
In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.

Train tickets are sold in 3 different ways:

a 1-day pass is sold for costs[0] dollars;
a 7-day pass is sold for costs[1] dollars;
a 30-day pass is sold for costs[2] dollars.
The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

Return the minimum number of dollars you need to travel every day in the given list of days.



Example 1:

Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total you spent $11 and covered all the days of your travel.
Example 2:

Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
Output: 17
Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
In total you spent $17 and covered all the days of your travel.


Note:

1 <= days.length <= 365
1 <= days[i] <= 365
days is in strictly increasing order.
costs.length == 3
1 <= costs[i] <= 1000

*/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

var mincostTickets = function (days, costs) {
    let dp = new Array(366);
    days.sort((a, b) => a - b);
    let dayExists = [];
    for (let i = 0; i < days.length; i++) {
        let cur = days[i];
        dayExists[cur] = true;
    }

    let right = days[days.length - 1];
    let left = days[0];
    dp[left - 1] = 0;
    dp[left] = Math.min(costs[0], costs[1], costs[2]);

    for (let i = left; i <= right; i++) {
        if (dayExists[i]) {
            let daily = (i - 1 < left) ? 0 : dp[i - 1];
            let weekly = (i - 7 < left) ? 0 : dp[i - 7];
            let monthly = (i - 30 < left) ? 0 : dp[i - 30];
            dp[i] = Math.min(Math.min(daily + costs[0], weekly + costs[1]), monthly + costs[2]);
        } else {
            dp[i] = dp[i - 1];
        }
    }

    return dp[right];
}
// var mincostTickets = function(days, costs) {
//     const queue7 = [];
//     const queue30 = [];
//     let currCost = 0;
//     for(let i = 0; i < days.length; i++){
//         while(queue7.length && queue7[0][0] + 6 < days[i] ){
//             queue7.shift();
//         }
//         while(queue30.length && queue30[0][0] + 29 < days[i]){
//             queue30.shift();
//         }
//         queue7.push([days[i], currCost + costs[1]]);
//         queue30.push([days[i], currCost + costs[2]]);
//         currCost = Math.min(currCost + costs[0], queue7[0][1], queue30[0][1])
//     }
//     return currCost;
// };

/*
365 days
find the ways to accomodate all days in days array

[1,2,3,4,5,6,7,8,,,,,,,,]
[2,7,-,-,-,-,-,-,15,-,-,-,--,-,-,-]

for every single day
1) day1
2) day7
3) day30

- length -> between first element of days to last element of days
dp = [ , , , ,7, , , , , ];
days = [ , , , , , , , , ,9 ,10 ,30, 31]

days = [1,2,3,4,5,6,7,8]
       [1] -> 3 different choices
    costs = [2,7,15]

    [1, 4, 6,7,8,20]
     2  4 -6 8
        9 -9 9 9 11
     7  7  7 7 9.11
     15 15 15
                    ->

    [2,7,15]
helper - DFS(array, idx, validDay, )


function DFS(array, idx, validDay, prevDay){

    one = DFS(array, idx+1, 1, curDay);
    seven = DFS(array, idx+1, 7, curDay);
    thirty = DFS(array, idx+1, 30, curDay);

    return
}


*/