function meeting_rooms(arr){
    if (arr.length == 0){return 0}
    arr.sort(function(a,b){return a[0] - b[0]})
    let endTimeArr = [],
        maxConfNum = 1;
    endTimeArr = [arr[0][1]]
    
    for (let i = 1; i < arr.length; i++){
      if (seeMin(endTimeArr) >= arr[i][0]){
        endTimeArr.push(arr[i][1])
        maxConfNum = Math.max(maxConfNum, endTimeArr.length)
      } else{
        while (endTimeArr.length != 0 && seeMin(endTimeArr) < arr[i][0]){
          endTimeArr.pop()
        }
        endTimeArr.push(arr[i][1])
      }
    }
    return maxConfNum
}
  
function seeMin(arr){
arr.sort(function(a,b){return b-a})  
return arr[arr.length-1]
}

console.log(meeting_rooms([[26,29],[19,26],[19,28],[4,19],[4,25]]))
console.log(meeting_rooms([[13,15],[1,13]]))