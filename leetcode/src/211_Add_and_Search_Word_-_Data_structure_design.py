'''
211. Add and Search Word - Data structure design
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.

'''

class WordDictionary(object):
    def __init__(self):
        self.trie = {}
        
    def addWord(self, word):
        node = self.trie
        for char in word:
            if not char in node:
                node[char] = {}
            node = node[char]
        node["terminal"] = True

    def search(self, word, idx=0, node=None):
        if node == None:
            node = self.trie
            
        if len(word) == idx and "terminal" in node: 
            return True
        if len(word) == idx: 
            return False
        
        if word[idx] == ".":
            for next_key in node:
                if next_key == "terminal": continue
                if self.search (word, idx+1, node[next_key]) == True:
                    return True                
                
        elif word[idx] in node:
            if self.search(word, idx+1, node[word[idx]]) == True:
                return True
        else:
            return False
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)