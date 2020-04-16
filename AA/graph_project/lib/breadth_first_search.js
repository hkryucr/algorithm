/*
function breadth_first(root):
  let q = []
  q.push(root);
  breadth_first_recursive(q, targetVal)

function breadth_first_recursive(q, targetVal):
  if (q.empty()) return;
  let curNode = q.pop();
  if(curNode.val === targetVal)
  console.log(curNode) //

  q.push(...curNode.neighbors)

  breadth_first_recursive(q, targetVal)
*/
//maybe come back doing BFS recurr
function breadthFirstSearch(startingNode, targetVal) {

    // if (visited.has(startingNode)) return null;
    // visited.add(startingNode);

    // for (let i = 0; i < startingNode.neighbors.length; i++){
    //     if (startingNode.val === targetVal) return startingNode;
    //     let currBFS = breadthFirstSearch(startingNode.neighbors[i], targetVal, visited);
    //     if (currBFS !== null){
    //         return currBFS;
    //     }
    // }
    let queue = [];
    queue.push(startingNode);
    let visited = new Set();

    while(queue.length){
        let curNode = queue.shift();
        if(visited.has(curNode)) continue;
        if(curNode.val === targetVal) return curNode;
        visited.add(curNode);
        queue.push(...curNode.neighbors);
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};