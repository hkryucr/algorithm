/**
 * @param {string[]} words
 * @return {string[]}
 */
// var stringMatching = function (words) {
//   let subStr = [];
//   let trie = new Trie;
//   words.sort((a, b) => b.length - a.length);
//   for(let i = 0; i < words.length; i++){
//     if(trie.findSub(words[i])){
//       subStr.push(words[i]);
//     } 
//     trie.insert(words[i])
//   }

//   return subStr;
// }

// class Trie {
//   constructor() {
//     this.root = {};
//   }

//   insert(str, root = this.root) {
//     for (let i = 0; i < str.length; i++) {
//       let letter = str[i];
//       if (root[letter] === undefined) {
//         root[letter] = {};
//       }
//       root = root[letter];
//     }
//   }

//   findSub(str, root = this.root, continued=false) {        
//     if(str.length === 0) return false;
//     if(str.length === 1 && root[str[0]] !== undefined) return true;
//     if (continued === true && root[str[0]] === undefined) return false;
//     if (root === undefined) return false;

//     let keys = Object.keys(root);
//     let found = false;
//     for(let i = 0; i < keys.length; i++){ 
//       let curChar = keys[i];
//       if(curChar === str[0]){

//         if (this.findSub(str.slice(1), root[curChar], true)){
//           found = true;
//         }        
//       }
//       if (this.findSub(str, root[curChar], false)) found = true;
//     }

//     return found;
//   }
// };

var stringMatching = function (words) {

    let res = [];
    let set = new Set();
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let str = (words[i].length > words[j].length) ? words[i] : words[j];
            let subStr = (words[i].length > words[j].length) ? words[j] : words[i];
            if (checkSubStr(str, subStr)) {
                if (set.has(subStr)) continue;
                set.add(subStr);
                res.push(subStr);
            };
        }
    }
    return res;
};

function checkSubStr(str, subStr) {

    for (let i = 0; i <= str.length - subStr.length; i++) {
        let match = true;
        for (let j = 0; j < subStr.length; j++) {
            if (str[i + j] !== subStr[j]) {
                match = false;
            }
        }
        if (match) return true;
    }
}