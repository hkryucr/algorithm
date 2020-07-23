/*
648. Replace Words
In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

Example 1:

Input: dict = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"

Constraints:

The input will only have lower-case letters.
1 <= dict.length <= 1000
1 <= dict[i].length <= 100
1 <= sentence words number <= 1000
1 <= sentence words length <= 1000

*/

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
// var replaceWords = function(dict, sentence) {
//     let dictSet = new Set(dict);
//     let sentenceArr = sentence.split(" ");
//     let res = [];
//     for (const word of sentenceArr){
//         let found = false;
//         for(let i = 0; i < word.length; i++){
//             let str = word.slice(0, i) + word.slice(i+1,0);
//             if(dictSet.has(str)){
//                 res.push(str);
//                 found = true;
//                 break;
//             }
//         }
//         if(!found) res.push(word);
//     }
//     return res.join(" ");
// };

var replaceWords = function(dict, sentence) {
    let trie = new Trie();
    let curNode = trie.data;
    for(let word of dict){ trie.insert(word); }
    let setenceArr = sentence.split(" ");
    let res = [];
    for(let word of setenceArr){
        let curWord = trie.search(word);
        if(curWord){
            res.push(curWord)
        } else {
            res.push(word);
        }
    }
    return res.join(" ");
}

const Trie = function (){
    this.data = {};
}

Trie.prototype.insert = function (word){
    let node = this.data;
    for(let i = 0; i < word.length; i++){
        if(node[word[i]] === undefined) node[word[i]]= {}
        node = node[word[i]];
    }
    node["terminal"] = true;
}

Trie.prototype.search = function (word){
    let node = this.data;
    let str = "";
    for(let i = 0; i < word.length; i++){
        if(node.terminal) return str;
        if(node[word[i]] === undefined) return false;
        node = node[word[i]];
        str += word[i];
    }
    return false;
}