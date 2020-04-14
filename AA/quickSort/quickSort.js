

const partition = (arr, start, end) => {
    // swap elements 
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            [ arr[swapIdx], arr[i] ] = [ arr[i], arr[swapIdx] ]
        }
    }
    // return the pivot position
    [ arr[start], arr[swapIdx] ] = [ arr[swapIdx], arr[start] ]
    return swapIdx;
}

const quickSort = (arr, start = 0, end = arr.length - 1)=>{
    if(start >= end) return;
   //run pivot to find pivot position
   let pivot = partition(arr, start, end)
   // left half
   quickSort(arr, 0, pivot - 1);
   // right half
   quickSort(arr, pivot + 1, end);
   return arr;
}

let inputArr = [101, 1, 7, 8, 5, 1, 2, 9, 3, 4, 6, 10,100];
console.log(quickSort(inputArr));
// let inputArr = [6, 5, 1,2,3,4,   /  7 /   ,9,8,10];
/*
-> pivot (random)
-> place it in a right position
ex) chose 7 -> partition

[1,2,6,4,5, |7| ,8,9, 10]
quicksort(1-5) quick (8-10);
.....
....basecase (only one el)

return arr;
*/