MinMaxStack
-> 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
getMax() -- Retrieve the minimum element in the stack.
 
push(3), push(3), push(-2), pop()

stack: [3, 3, 3], [3,3,3], [-2,3,-2]
[1,2,3,4,5,65,7,8,9,0,10]

snapshot of outlier 
-> []

random sequences: [1,2,3,4,5,65,7,8,9,0,10]
n = total number that random generator generated = 11
k = 5
queue = [...]; O(n)

binary ?
=>     2
      1 3
         5
           10
          8
best case -> logn
worst caset - n
1
 2
  3
   4
    5
     6
AVL tree or red black tree -> logn operation every time
o(n) space
outlierSnapshot = [1,65] => 
outliers = 1 % of number of random sequences largest/smallest numbers
...get(1.,..98)
get(1) outlier = [1] <how do we know the next outlier is 98?>
get(2) outlier = [1, 98]
get(3) outlieter = [1, 98]
get(65) => current Outlier? [65]
get(10) => current outlier ?
get(5)
get(6)
// min number and max number
idx
[  1 undefined      100]

stack
[1,...100];

outlier [1];

histogram map as 2d array
http://tchester.org/sb/plants/guides/long_valley_nature_trail.html

[200, 100, 200]
[200, 100, 0]
[200, 100, 100]

// trail with lowest height
0

100
100
100, 100

  v             v 
1  (200 - 300)  1000

hashmap = {
    1 
    200.
    300.. 
    1000
}