/*
Medium

A self-dividing number is a number that is divisible by every digit it contains. 
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number,
 including the bounds if possible.

Example

Input: left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

*/

function selfDividingNumber(left, right){
    if(left > right) return [];
    let result = [];
    while(left <= right){
        if(isSelfDivisible(left)){
            result.push(left);
        };
        left++;
    }
    return result;
}

function isSelfDivisible(num){
    let str = num.toString();
    for(let i = 0; i < str.length; i++ ){ // 11
        if(str[i] === "0") return false;
        if(num % parseInt(str[i]) !== 0) return false;
    }
    return true;
}


/*

Hard

In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. 
We are allowed to increase the height of any number of buildings, 
by any amount (the amounts can be different for different buildings). 
Height 0 is considered to be a building as well.

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, 
must be the same as the skyline of the original grid. 
A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. 
See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35

Explanation

The grid is:

[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]
The skyline viewed from top or bottom is: [9, 4, 8, 7] The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

horizontal skyline = [9, 4, 8, 7]; -> points / x coordinate
vertical skyline = [8, 7, 9, 3]; -> points / y coordinate

1) vPoints / hPoints -> can't increment
2) elements at the same line of vPoints / hPoints can't increment more than that current level elemens

*/

// grid(n x m) O(n * m)

const maxIncreaseKeepingSkyline = grid => {
    // 1) create xCor/yCor
    let xCor = [];
    let yCor = [];
    for (let i = 0; i < grid.length; i++) {
        let xCorMax = -Infinity;
        for (let j = 0; j < grid[0].length; j++){
            xCorMax = Math.max(xCorMax, grid[i][j]);
       
        }
        xCor.push(xCorMax);
    }
    for (let j = 0; j < grid[0].length; j++) {
        let yCorMax = -Infinity;
        for (let i = 0; i < grid.length; i++) {
            yCorMax = Math.max(yCorMax, grid[i][j]);
        }
        yCor.push(yCorMax);
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let curEl = grid[i][j];
            let maxX = xCor[i];
            let maxY = yCor[j];
            let min = Math.min(maxX, maxY);
            count += (min - curEl);
        }
    }
    return count;
};

let grid2 = [[3, 0, 8, 4],
            [2, 4, 5, 7],
            [9, 2, 6, 3],
            [0, 3, 1, 0]];
            
console.log(maxIncreaseKeepingSkyline(grid2));


const maxIncreaseKeepingSkyline = grid => {
    const maxXArr = [];
    const maxYArr = [];
    const length = grid.length;
    let maxIncrease = 0;
    
    for (let i = 0; i < length; ++i) {
        let rowMax = 0;
        let colMax = 0;
        
        for (let j = 0; j < length; ++j) {
            const row = grid[i][j];
            const col = grid[j][i];
            
            rowMax = row > rowMax ? row : rowMax;
            colMax = col > colMax ? col : colMax;
        }
        
        maxXArr.push(rowMax);
        maxYArr.push(colMax);
    }
    
    for (let i = 0; i < length * length; ++i) {
        const x = i % length;
        const y = Math.floor(i / length);
        
        const minMaxHeight = Math.min(maxXArr[y], maxYArr[x]);
        
        maxIncrease += minHeight - grid[x][y];
    }
    
    return maxIncrease;
};