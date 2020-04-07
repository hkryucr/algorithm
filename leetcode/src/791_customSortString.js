/*
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
 

Note:

S has length at most 26, and no character is repeated in S.
T has length at most 200.
S and T consist of lowercase letters only.
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    /* my way
    let temT = T;
    let arr = [];
    for(let i = 0; i<S.length; i++){
        let index = 0;
        while(temT.length > index){
            if(S[i] == temT[index]){
                arr.push(temT[index]);
                temT = temT.slice(0, index) + temT.slice(index+1);    
            } else {
                index++;
            }            
        }
    }
    return temT + arr.join('');
    */
    
    /*
    hashtable
    by index, make a hashtable for S
    hashS = {}
    
    make loop by using this hashtable
    from 0 to last;
    if it's not there, don't add any otherwise add them into arr;
        lastly if it exist add all
    */
    
    let hashS = {}
    for(let i = 0; i<S.length; i++){
        hashS[S[i]] = 0
    }
    
    let res = [];
    for (let i = 0; i < T.length; i++){
        if(hashS.hasOwnProperty(T[i])){      
            hashS[T[i]]++;
        } else {
            res.push(T[i]);
        }
    }
    let result = res.join('');
    for(let key in hashS){
        result += key.repeat(hashS[key]);        
    }
    return result;
};