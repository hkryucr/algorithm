// Absolute Value Sort
// Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.

// Examples:

// input:  arr = [2, -7, -2, -2, 0]
// output: [0, -2, -2, 2, -7]

function absSort(arr){
 // nlogn
 // constant
 
    for(let i=0; i < arr.length; i++){
        arr[i] = arr[i] + 0.1;
    }

    arr.sort((a,b)=>{
        // if (Math.abs(a) === Math.abs(b)){
        //     console.log(a, b , "a", "b")
        //     return (a > 0) ? b : a;
        // }
        // return Math.abs(a) - Math.abs(b);
        // return a === b ? 0 :  (a > b ? 1 : -1)
        return Math.abs(a) - Math.abs(b);
    })

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] - 0.1;
    }

    // arr.sort((a,b)=>a-b);

    return arr;
}


console.log(absSort([2, -7, -2, -2, 0]));