# can you hear me?
def prisonAfterNDays(cells, N):
    """
    :type cells: List[int]
    :type N: int
    :rtype: List[int]
    """
    
    tomorrow = []
    for i in range(len(cells)):
        tomorrow.append(0)
    for day in range (N):
        print('cell:',len(cells))
        #for index, cell in enumerate(cells[1:len(cells)-2]):
        for i in range(len(cells)):
            if i == 0:
                continue
            if i == len(cells) - 1:
                break
            p, q = [cells[i - 1], cells[i + 1]]
            print('p',p,'q',q)
            if p == q:
                tomorrow[i] = 1
            else:
                tomorrow[i] = 0
            cells = tomorrow
    return tomorrow

cells = [0,1,0,1,1,0,0,1]
-> cell shapes -> 2^8 =256
# keep cache variable size size = 8
# for ever window of 8 
# keep the result in a cache 
# where the key is that window of 8
dict - [0,0,1,1,0,0,0,0] N = 15
# -> N 24 cycle 
dict - [0,0,1,1,0,0,0,0] N = 39

N = 7
# expect Output: [0,0,1,1,0,0,0,0]

print(prisonAfterNDays(cells, N))

'''
There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

Example 1:

Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]
Explanation: 
The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

Example 2:

Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
Output: [0,0,1,1,1,1,1,0]
 

Note:

cells.length == 8
cells[i] is in {0, 1}
1 <= N <= 10^9

[0, 1, 0, 1,  1, 0, 0, 1]
                    [x  x  x ]
           y
0  1   1  0 0   0  0  0

for number of days
    iterate over the array with a window size of 3
    make sure w/n bounds 1 and n-2
    i-1, i, i+1
    p    q   r
    if p == r 
    next day index i = 1
    else 
    next day index i = 0
return day array

'''
