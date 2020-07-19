
/**
 * Design a hit counter which counts the number of hits received in the past 5 minutes.
Each function accepts a timestamp parameter (in seconds granularity) and you may assume 
that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). 
You may assume that the earliest timestamp starts at 1.
It is possible that several hits arrive roughly at the same time.

Example:
HitCounter counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
counter.getHits(4);

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
counter.getHits(300);

// get hits at timestamp 301, should return 3.
counter.getHits(301); 

Follow up:
What if the number of hits per second could be very large? Does your design scale?/**
 * Initialize your data structure here.
 */

/**
 * Record a hit.
   @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */

var HitCounter = function() {
   this.dbCount = new Array(300).fill(-301);
   this.dbTS = new Array(300).fill(-301);
};

HitCounter.prototype.hit = function(timestamp) {
       let curIdx = timestamp % 300;
       if (this.dbTS[curIdx] === timestamp){
              this.dbCount[curIdx]++;
       } else {
              this.dbTS[curIdx] = timestamp;
              this.dbCount[curIdx] = 1;
       }
};

/**
 * Return the number of hits in the past 5 minutes.
   3@param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
       let count = 0;
       for(let i = 0; i < this.dbTS.length; i++){
              if (this.dbTS[i] <= timestamp && this.dbTS[i] >= timestamp - 300 + 1){
                     count += this.dbCount[i];
              }
       }
       return count;
};
/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

//  hashmap: (timstamp: node)
//  node(currentCount, total-count)
//  -> node -> node ->
// head = the firstNode
// tail = 

/**
 * ["HitCounter","hit","hit","hit","getHits","hit","getHits","getHits"]
[[],[1],[2],[3],[4],[300],[300],[301]]

Output
[null,null,null,null,NaN,null,NaN,NaN]
Expected
[null,null,null,null,3,null,4,3]
 */
let counter = new HitCounter(); 
console.log(counter.hit(1))
console.log(counter.hit(2))
console.log(counter.hit(3))
console.log(counter.getHits(4))
console.log(counter.hit(300))
console.log(counter.getHits(300)) // 
console.log(counter.getHits(301))

// /**
//  * import java.util.concurrent.atomic.AtomicIntegerArray;

// public class HitCounter {
// 	AtomicIntegerArray time;
// 	AtomicIntegerArray hit;
//     /** Initialize your data structure here. */
//     public HitCounter() {
//         time  = new AtomicIntegerArray(300);
//         hit = new AtomicIntegerArray(300);
//     }
    
//     /** Record a hit.
//         @param timestamp - The current timestamp (in seconds granularity). */
//     public void hit(int timestamp) {
//     	int index = timestamp % 300;
//     	if (time.get(index) != timestamp) {
//     		time.set(index, timestamp);
//     		hit.set(index, 1);
//     	} else {
//     		hit.incrementAndGet(index);//add one
//     	}
        
//     }
    
//     /** Return the number of hits in the past 5 minutes.
//         @param timestamp - The current timestamp (in seconds granularity). */
//     public int getHits(int timestamp) {
//     	int total = 0;
//     	for (int i = 0; i < 300; i++) {
//     		if (timestamp - time.get(i) < 300) {
//     			total += hit.get(i);
//     		}
//     	}
//     	return total;
//     }
// }