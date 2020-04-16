
//recurssively 
function numRegions(graph) {
    let letters = new Set(); 
    let count = 0;
    for (let key in graph){
        if (letters.has(key)) continue;
        helper(key, graph, letters);
        count++;
    }
    return count
}

function helper(key, graph, letters) {
    if (letters.has(key)) return;
    letters.add(key)

    if(graph[key] === undefined) return;
    for(let i = 0; i < graph[key].length; i++){
        helper(graph[key][i], graph, letters);
    }
}

// //iter
// function numRegions(graph) {
//     let letters = new Set();

//     let count = 0;
//     for (let key in graph){
//         if (letters.has(key)) continue;

//         let stack = [key]; 
//         while (stack.length) {
//           let currChar = stack.pop();
//           if (letters.has(currChar)) continue;
//           letters.add(currChar);
//           stack.push(...graph[currChar])
//         }

//         count++
//     }
//     return count;
// }

module.exports = {
    numRegions
};  