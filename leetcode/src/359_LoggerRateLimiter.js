
/**
359 Logger Rate Limiter    
Design a logger system that receive stream of messages along with its timestamps,
 each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity), 
return true if the message should be printed in the given timestamp, otherwise returns false.

It is possible that several messages arrive roughly at the same time.

Example:

Logger logger = new Logger();

// logging string "foo" at timestamp 1
logger.shouldPrintMessage(1, "foo"); returns true; 

in my data structure -> this will be saved there?

// logging string "bar" at timestamp 2
logger.shouldPrintMessage(2,"bar"); returns true;

// logging string "foo" at timestamp 3
logger.shouldPrintMessage(3,"foo"); returns false;

// logging string "bar" at timestamp 8
logger.shouldPrintMessage(8,"bar"); returns false;

// logging string "foo" at timestamp 10
logger.shouldPrintMessage(10,"foo"); returns false;

// logging string "foo" at timestamp 11
logger.shouldPrintMessage(11,"foo"); returns true;

constraints

*/


/**
 * Initialize your data structure here.
 */
var Logger = function () {
    this.hash = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
If this method returns false, the message will not be printed.
The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    // never called before
    if (this.hash[message] === undefined) {
        this.hash[message] = timestamp;
        return true;
    }

    if (timestamp - this.hash[message] < 10) {
        return false;
    }

    this.hash[message] = timestamp;
    return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp, message)
 */