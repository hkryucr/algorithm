/*
1229. Meeting Scheduler

Given the availability time slots arrays slots1 and slots2 of two people and a meeting duration duration, 
return the earliest time slot that works for both of them and is of duration "duration".

If there is no common time slot that satisfies the requirements, return an empty array.

The format of a time slot is an array of two elements [start, end] representing an inclusive time range from start to end.  

It is guaranteed that no two availability slots of the same person intersect with each other. 
That is, for any two time slots [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1.

Example 1:

Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
Output: [60,68]
Example 2:

Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12
Output: []
 
Constraints:
slot1[i][1] < slot1[i+1][0]
slot2[i][1] < slot2[i+1][0]

1 <= slots1.length, slots2.length <= 10^4
slots1[i].length, slots2[i].length == 2
slots1[i][0] < slots1[i][1]
slots2[i][0] < slots2[i][1]
0 <= slots1[i][j], slots2[i][j] <= 10^9
1 <= duration <= 10^6 
*/

var minAvailableDuration = function(slots1, slots2, duration) {
    // sort
    slots1.sort((a,b) => a[0]-b[0]);
    slots2.sort((a,b) => a[0]-b[0]);

    let i = 0;
    let j = 0;

    while(i < slots1.length && j < slots2.length){
        // find the overlap time

        let [slot1Start, slot1End] = slots1[i];
        let [slot2Start, slot2End] = slots2[j];
        let curMin = Math.min(slot1End, slot2End);
        let curMax = Math.max(slot1Start, slot2Start);
        let curDuration = curMin - curMax;
        if(curDuration >= duration) return [curMax, curMax + duration];

        if(slot1End > slot2End){
            j++;
        } else {
            i++;
        }
    }
    return [];    
};

// let slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
let slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12

// let Output: [60,68]
// Example 2:
console.log(minAvailableDuration(slots1, slots2, duration));
