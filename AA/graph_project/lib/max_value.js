function maxValue(node, visited=new Set()) {
    let maxValue = -Infinity;
    let queue = [];
    queue.push(node);

    while(queue.length){
        let curNode = queue.shift();
        if(visited.has(curNode)) continue;
        if(curNode.val > maxValue){
            maxValue = curNode.val;
        }
        visited.add(curNode);
        queue.push(...curNode.neighbors);
    }
    return maxValue;
}

module.exports = {
    maxValue
};