function permute(array) {
  let permuArr = [[]];
  for (let i = 0; i < array.length; i++) {
    let tempArr = [];
    for (let j = 0; j < permuArr.length; j++) { // 1 // 2 //3
      let curArr = permuArr[j]; //
      for (let k = 0; k < curArr.length; k++) { // 1 // 2 //3
        tempArr.push(
          curArr.slice(0, k).concat(array[i]).concat(curArr.slice(k)) // [2,1]
        );
      }
      tempArr.push(curArr.concat(array[i]));
    }
    permuArr = tempArr;
  }
  return permuArr;
}

// [1, 2, 3]
// 1st
// array [1,2,3]
// permuArr = [[1]]
// curArr [1] => [2,1] [1,2]
// tempArr [[2,1], [1,2]];


// the first round permuArr = [[1]]; => 1
// the first round permuArr = [[2,1], [1,2]]; => 2
// the first round permuArr = [[2,1], [1,2]]; <- 3[[3,2,1], [3,1,2]] [1,2,3] [2,1,3]... => 9

// n! -> (n-1)^2! * n^2

// number of operations
// 1) 1
// 2) 2^2
// 3) 3^2