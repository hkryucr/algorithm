/*

Suffix Trie Construction

Write a SuffixTrie class for a Suffix-Trie-Like Data Structure. 
The class should have a root property set to be the root node of the trie and should support:
- Creating the trie from a string: this will be done by calling the populateSuffixTrieFrom method upon class instantiation, 
    which should populate the root of the class.
- Searching for strings in the trie.

Note that every string added to the trie should end with the special endSymbol character "*".

If you're unfamiliar with Suffix Tries, 
we recommnend watching the Conceptual Overview section of this question's video explanation before starting to code

Sample Input(for creation)
string = "babc"

sample output (for creation)
{
    "c": {"*": true},
    "b": {
        "c": {"*": true},
        "a": {"b": {"c": {"*": true}}}
    },
    "a": {"b": {"c": {"*"": true}}}
}

Sample Input (for searching in the suffix trie above);
string= "abc"

Sample Output (for searching in the suffix trie above):
trie;

*/
// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    populateSuffixTrieFrom(string) {
        // Write your code here.
        for(let i = 0; i < string.length; i++){
            let left = i ;
            let right = string.lenght-1;
            createTrie(string, left, right, this.root);
        }


        function createTrie(str, left, right, obj){
            while(left <= right){
                let curStr = str[left];
                obj[curStr] = {};
                obj = obj[curStr];
                if(left === right){
                    obj["*"] = true;
                }
                left ++;
            }
        }

        
    }

    contains(string) {
        // Write your code here.
    }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
