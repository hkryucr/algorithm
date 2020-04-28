// 332. Reconstruct Itinerary

// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], 
// reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

// Note:

// If there are multiple valid itineraries, you should return the itinerary 
// that has the smallest lexical order when read as a single string. 
// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.
// Example 1:

// Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
// Example 2:

// Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
//              But it is larger in lexical order.

/*
{
    JFK: [, ] // alphabetically ordered
    SFO: [],
    ATL: [, ]
}
{
    JFK: ["ATL", "SFO"] // alphabetically ordered
    SFO: ["ATL"],
    ATL: ["JFK", "SFO"]
}

no tickets -> 
*/
/* PYTHON SOLUTION:
class Solution:
    def itineraryHelper(self, start, tickets):
        if len(tickets) == 0:
            return []
        elif len(tickets) == 1:
            return tickets[0]
        for idx, ticket in enumerate(tickets):
            if ticket[0] == start:
                restItinerary = self.itineraryHelper(ticket[1], tickets[0:idx] + tickets[idx + 1:])
                if restItinerary is not None:
                    return [ticket[0]] + restItinerary
        return None
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        if len(tickets) == 1:
            return tickets[0]
        tickets.sort()
        for idx, ticket in enumerate(tickets):
            if ticket[0] == 'JFK':
                restItinerary = self.itineraryHelper(ticket[1], tickets[0:idx] + tickets[idx + 1:])
                if restItinerary is not None:
                    return [ticket[0]] + restItinerary
*/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // if(tickets.length === 0) return [];
    let graph = {}
    // create a graph
    for(let i = 0; i < tickets.length; i++){
        const [ori, des] = tickets[i];
        if (graph[ori] === undefined){
            graph[ori] = [des];
        } else {
            graph[ori].push(des);
        }
    }
    for(let key in graph){
        graph[key].sort();
    }

    // traverse a graph
    let node = "JFK"
    let result = [];
    while(true){
        result.push(node);
        if (graph[node] === undefined) break;
        let curNode = graph[node].shift();
        if(!curNode) break;
        node = curNode;
    }
    return result;
};

console.log(findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]));
// console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
// console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]));

