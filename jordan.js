/*
332. Reconstruct Itinerary
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. 
All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. 
For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]

JFK -> SFO v
    -> ATL v
SFO -> ATL v
ATL -> JFK v
    -> SFO v

Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.


Exampl3 = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
JFK =>  KUL
    => NRT
NRT => JFK

*/

var findItinerary = function(tickets) {
    let pos = {}
    let output = [];

    for(let i = 0; i < tickets.length; i++) {
        let key = tickets[i][0];
        let destination = tickets[i][1]

        if(pos[key]) {
            pos[key].push(destination);
        } else {
            pos[key] = [destination];
        }
    }

    for(let key in pos){
        pos[key].sort();
    }
    
    traverse('JFK', pos, output)

    return output.reverse();
};

function traverse(curCity, pos, output) {
  let destinations = pos[curCity];
  while (destinations && destinations.length > 0) {
    let nextDest = destinations.shift();
    traverse(nextDest, pos, output);
  }
  // push the valu here
  output.push(curCity);
}

// Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
    /*
        pos = {
            JFK: []
            SFO: []
            ATL: []
        }
        Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]

            <-
        JFK -> ATL 
         |   //
         v  //
        SFO    

        Example 3

        JFK =>  KUL
            =>  NRT
        NRT =>  JFK

        [ "JFK" , "NRT", "JFK", "KUL"]
    */

var findItinerary = function(tickets) {
    let pos = {};
    let ans = [];

    for(let i = 0; i < tickets.length; i++) {
        let key = tickets[i][0];
        let dest = tickets[i][1];

    }
}