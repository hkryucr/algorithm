/*

	        		        A
    		B     	                  	 C
    D              E               F             G
H                      I

youngest common ancestor

node1 = D;
node2 = I;
=> B

case1 =>
Node1 = Node2,  Root (Node 1 = Node2 = I, root) => E
To traverse the tree => recursion until node1.ancestor === node2.ancestor OR until !node1.ancestor OR !node2.ancestor
Time complexity: depend on how many nodes we need to travel to hit base cases
	-Worst case = O(N * 2)
	- N = # of nodes traveled; 2 = number of times we travel thru entire tree(node1, node2)
*/

class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    if (descendantTwo.ancestor === descendantOne.ancestor) return descendantTwo.ancestor; // check first if node1 and node2 share common ancestor before traversing
	// let levels = {};
	// levels[descendantOne] = 0;
	// levels[descendantTwo] = 0;
    // levels[topAncestor] = 0;
    let dOneLevel = findLevel(descendantOne, 0);
    let dTwoLevel = findLevel(descendantTwo, 0);
	// Determine levels of descendant1 and descendant2
	while(dOneLevel !== dTwoLevel){
		if(dOneLevel < dTwoLevel){
			// Level 2 is deeper than level 1. Move level 2 up by one level
			descendantTwo = descendantTwo.ancestor;
			dTwoLevel--;
		} else {
			// Level 1 is deeper than level 2. Move level 1 up by one level
			descendantOne = descendantOne.ancestor;
			dOneLevel--;
		}
    }
    
    while(descendantOne.ancestor !== descendantTwo.ancestor){
		// find common ancestor
		descendantOne = descendantOne.ancestor;
		dOneLevel--;
		descendantTwo = descendantTwo.ancestor;
		dTwoLevel--;
    }
	return descendantOne.ancestor;
}

function findLevel(node, level){
    if(!node) return level;
    return findLevel(node.ancestor, level+1);
}