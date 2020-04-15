class Node {
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  
  insertRecur(word, root=this.root, idx = 0){
    let letter = word[idx];

    if (root.children[letter] === undefined){
        root.children[letter] = new Node()
    }

    if (idx === word.length-1){
        root.children[letter].isTerminal = true;
    } else {
        this.insertRecur(word, root.children[letter], ++idx);
    }
  }

  insertIter(word){
      let root = this.root;
      for(let i = 0; i < word.length; i++){
        const letter = word[i];
        if(root.children[letter] === undefined) root.children[letter] = new Node();        
        root = root.children[letter];
      }
      root.isTerminal = true;      
  }

  searchRecur(word, idx = 0, root = this.root){

    let letter  = word[idx];
    if (root.children[letter] === undefined) return false;
    if (word.length-1 === idx){
        if (root.children[letter].isTerminal){
            return true;
        }else{
            return false;
        }
    }
    
    return this.searchRecur(word, ++idx, root.children[letter])
  }

    searchIter(word){
        let root = this.root;

        for(let i = 0; i < word.length; i++){
            let letter = word[i];
            if(root.children[letter] === undefined) return false;
            root = root.children[letter];
        }
        return (root.isTerminal);        
    }

    wordsWithPrefix(prefix){
        let root = this.root
        let index = 0
        while (index < prefix.length){
            const currChar = prefix[index];
            if (root.children[currChar] === undefined){
                return [];
            }
            root = root.children[currChar]
            index++;
        }

        let res = []
        let stack = [];

        stack.push([prefix, root]);
        while(stack.length > 0){
            let [currPrefix, currNode] = stack.pop();
            if (currNode.isTerminal) res.push(currPrefix);
            for (let key in currNode.children){
                let newPrefix = curPrefix + key;
                stack.push([newPrefix, currNode.children[key]])
            }
        }
        return res;
    }
}

module.exports = {
    Node,
    Trie
};

// if(prefix.length === 0) {
        //     let everyWords = [];
        //     if(root.isTerminal) {
        //         everyWords.push("")
        //     } else {
        //         for(let letter in root.children){
        //             let buildWords = this.wordsWithPrefix(prefix, root.children[letter]);
        //             let fullWord = buildWords.map((word)=> letter + word);
        //             console.log(fullWord)
        //             everyWords.push(...fullWord);
        //             // return everyWords;
        //         }
        //     }
        //      return everyWords;
        // }
        
        //()-> a->b ->c      a->b->c 

