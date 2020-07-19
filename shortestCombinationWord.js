/*
Give an array of words ["car", "race”, “dog”, “racecar”, “walker”, dogwalker”]. Find the shortest combination word

car dog race walker racecar dogwalker

racecar

rac ecar
race car
racec ar

"ar"
"ecar"
"rac" 
"race"
"racec"
   vvv
"racecar"

*/
const shortestCombinationWord = (array) => {
    let trie = new Trie();
    array.sort((a,b)=>a.length - b.length);
    for(const word of array){
        if(isCombination(word, 0, trie.data, trie.data)) return word;
        trie.insert(word)
    }
    return false;
}

//  v
// "wordwordwordnnnsdfsf" "wordwordwordnnnsdfsf wordwordwordnnnsdfsf wordwordwordnnnsdfsf wordwordwordnnnsdfsf"

function isCombination(word, leftIdx, trie, origTrie){
    if(word.length <= leftIdx) return false;
    const curChar = word[leftIdx];
    if (trie[curChar] === undefined) return false;
    if (trie[curChar].terminal && isCombination(word, leftIdx + 1, origTrie, origTrie)) return true;
    if (trie[curChar].terminal && word.length-1 === leftIdx) return true;
    if(isCombination(word, leftIdx + 1, trie[curChar], origTrie)) return true;
}

const Trie = function(){
    this.data = {};
}
Trie.prototype.insert = function(word){
    let trie = this.data;
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(!(char in trie)){
            trie[char] = {}
        }
        trie = trie[char];
    }
    trie["terminal"] = true;
}

console.log(shortestCombinationWord(["car", "race", "dog", "racecar", "walker", "dogwalker"]));
console.log(shortestCombinationWord(["abc", "d", "ab", "abcd","ca", "aa"]));
