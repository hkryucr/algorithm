/*
621. Task Scheduler

Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks. 

Example:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 

Constraints:

The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].

*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let counts = {};
    let maxChar = "";
    let maxCount = 0;
    for(let i = 0; i < tasks.length; i++){
        if(!counts[tasks[i]]) counts[tasks[i]] = 0;
        counts[tasks[i]]++;
        if(counts[tasks[i]] > maxCount){
            maxCount = counts[tasks[i]];
            maxChar = tasks[i];
        }
    }
    
    let same = 0;
    for(let key in counts){
        if(key === maxChar) continue;
        if(counts[key] === counts[maxChar]) same++;
    }
    
    // if maxCount is big enough -> formula would be "(maxCount-1) * n + the number of chars that occur as frequent as the maxCountChar"
    let possible = (counts[maxChar] - 1) * (n + 1) + 1 + same;
    return Math.max(tasks.length, possible);
};
