/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.

*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

var findItinerary = function(tickets) {
    let map = {};
    let result = [];
    
    for(var i=0; i<tickets.length; i++) {
        let depart = tickets[i][0]
        let destination = tickets[i][1]
        if(map[depart])  map[depart].push(destination)
        else map[depart] = [destination]
    }
    
    for(let depart in map) map[depart].sort()
    
    const dfs = function(depart) {
        let destination = map[depart];
        while(destination && destination.length>0) {
            dfs(destination.shift());
        }
        result.push(depart);
    }
    dfs('JFK');
    return result.reverse()
};
