
function subsets(array) {
    let sub = [[]];

    for(let i = 0; i < array.length; i++){
        let len = sub.length;
        for(let j = 0; j < len; j++){
            let currentSub = sub[j].slice()
            currentSub.push(array[i]);
            sub.push(currentSub);
        }
    }
    return sub;
}

// 1  []               2
// 2  [] [1]          2
// 4  [] [1] [2 ] [ 1,2]    2
// 8  [] [1] [2 ] [ 1,2] [3] [1,3] [2 3] [ 1,2,3] 2

// 2 to the n where n is the number of array;
// 2^n



let nums = [1, 2, 3]; // 
//                        ^ ^ ^
// [1] [2] [] [1,2]     = [1] [2] [] [1,2]
// [1,3] [2,3] [3] [1,2,3]


// [1] [2] [] [1,2] <=    3 
// [1] [2] [] [1,2] + [1,3] [2,3] [3] [1,2,3]
// [] [1] (first iteration)
// [] [1] + [2] [1,2]
// [1] [2] [] [1,2] + [1,3] [2,3] [3] [1,2,3]

console.log(subsets(nums));