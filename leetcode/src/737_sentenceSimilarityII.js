/**
 * 737. Sentence Similarity II

Given two sentences words1, words2 (each represented as an array of strings), and a list of similar word pairs pairs, determine if two sentences are similar.

For example, words1 = ["great", "acting", "skills"] and words2 = ["fine", "drama", "talent"] are similar, 
if the similar word pairs are pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]].

Note that the similarity relation is transitive. For example, if "great" and "good" are similar, and "fine" and "good" are similar, 
then "great" and "fine" are similar.

Similarity is also symmetric. For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.

Also, a word is always similar with itself. For example, the sentences words1 = ["great"], words2 = ["great"], pairs = [] are similar, 
even though there are no specified similar word pairs.

Finally, sentences can only be similar if they have the same number of words. 
So a sentence like words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].

Note:

The length of words1 and words2 will not exceed 1000.
The length of pairs will not exceed 2000.
The length of each pairs[i] will be 2.
The length of each words[i] and pairs[i][j] will be in the range [1, 20].


   ["great"," good"],["great" : "fine",]
    
    "good" : "fine"
    "fine" : "good"

to build similiarity dictionary first
    "great": set("good", "fine", "great")
    "good": set()
    "fine": set("excellent")
    "excellent": set(""excellent"") <- add it
    "excellent"

{
    "great": set(great, good, fine),
    "good" : set(great. good, fine) <- push new word "good"
    "fine" : set(great. good, fine) <- push "fine"
}
*/

/**
* @param {string[]} words1
* @param {string[]} words2
* @param {string[][]} pairs
* @return {boolean}
*/
var areSentencesSimilarTwo = function (words1, words2, pairs) {
    if (words1.length !== words2.length) return false;
    let hash = {};
    for (let i = 0; i < pairs.length; i++) {
        let [first, second] = pairs[i];
        if (hash[first] !== undefined && hash[second] !== undefined) {
            let firstSet = hash[first];
            let secondSet = hash[second];
            let merged = new Set([...firstSet, ...secondSet]);
            hash[first] = merged;
            hash[second] = merged;
        } else if (hash[first] !== undefined || hash[second] !== undefined) {
            if (hash[first] !== undefined) {
                let curSet = hash[first];
                curSet.add(second);
                hash[second] = curSet;
            } else {
                let curSet = hash[second];
                curSet.add(first);
                hash[first] = curSet;
            }
        }
        else {
            hash[first] = new Set();
            let newSet = hash[first];
            newSet.add(first);
            newSet.add(second);
            hash[second] = newSet;
        }
    }

    for (let i = 0; i < words1.length; i++) {
        if (words1[i] === words2[i]) continue;
        if (hash[words1[i]] === undefined) return false;
        if (!hash[words1[i]].has(words2[i])) return false;
    }
    return true;
};


let word1 = ["a", "very", "delicious", "meal"];
let word2 = ["one", "really", "delicious", "dinner"]
let pairs = [["great", "good"], ["extraordinary", "good"], ["well", "good"], ["wonderful", "good"], ["excellent", "good"], ["fine", "good"], ["nice", "good"], ["any", "one"], ["some", "one"], ["unique", "one"], ["the", "one"], ["an", "one"], ["single", "one"], ["a", "one"], ["truck", "car"], ["wagon", "car"], ["automobile", "car"], ["auto", "car"], ["vehicle", "car"], ["entertain", "have"], ["drink", "have"], ["eat", "have"], ["take", "have"], ["fruits", "meal"], ["brunch", "meal"], ["breakfast", "meal"], ["food", "meal"], ["dinner", "meal"], ["super", "meal"], ["lunch", "meal"], ["possess", "own"], ["keep", "own"], ["have", "own"], ["extremely", "very"], ["actually", "very"], ["really", "very"], ["super", "very"]]

console.log(areSentencesSimilarTwo(word1, word2, pairs));
/**
 * ["this","summer","thomas","get","really","very","rich","and","have","any","actually","wonderful","and","good","truck","every","morning","he","drives","an","extraordinary","truck","around","the","nice","city","to","eat","some","extremely","extraordinary","food","as","his","meal","but","he","only","entertain","an","few","well","fruits","as","single","lunch","he","wants","to","eat","single","single","and","really","healthy","life"]
["this","summer","thomas","get","very","extremely","rich","and","possess","the","actually","great","and","wonderful","vehicle","every","morning","he","drives","unique","extraordinary","automobile","around","unique","fine","city","to","drink","single","extremely","nice","meal","as","his","super","but","he","only","entertain","a","few","extraordinary","food","as","some","brunch","he","wants","to","take","any","some","and","really","healthy","life"]
[["good","nice"],["good","excellent"],["good","well"],["good","great"],["fine","nice"],["fine","excellent"],["fine","well"],["fine","great"],["wonderful","nice"],["wonderful","excellent"],["wonderful","well"],["wonderful","great"],["extraordinary","nice"],["extraordinary","excellent"],["extraordinary","well"],["extraordinary","great"],["one","a"],["one","an"],["one","unique"],["one","any"],["single","a"],["single","an"],["single","unique"],["single","any"],["the","a"],["the","an"],["the","unique"],["the","any"],["some","a"],["some","an"],["some","unique"],["some","any"],["car","vehicle"],["car","automobile"],["car","truck"],["auto","vehicle"],["auto","automobile"],["auto","truck"],["wagon","vehicle"],["wagon","automobile"],["wagon","truck"],["have","take"],["have","drink"],["eat","take"],["eat","drink"],["entertain","take"],["entertain","drink"],["meal","lunch"],["meal","dinner"],["meal","breakfast"],["meal","fruits"],["super","lunch"],["super","dinner"],["super","breakfast"],["super","fruits"],["food","lunch"],["food","dinner"],["food","breakfast"],["food","fruits"],["brunch","lunch"],["brunch","dinner"],["brunch","breakfast"],["brunch","fruits"],["own","have"],["own","possess"],["keep","have"],["keep","possess"],["very","super"],["very","actually"],["really","super"],["really","actually"],["extremely","super"],["extremely","actually"]]

class Solution {
    public boolean areSentencesSimilarTwo(String[] words1, String[] words2, String[][] pairs) {
        if (words1.length != words2.length) {
            return false;
        }

        Map<String, Set<String>> graph = new HashMap<>();
        for (String[] p : pairs) {
            graph.putIfAbsent(p[0], new HashSet<>());
            graph.putIfAbsent(p[1], new HashSet<>());
            graph.get(p[0]).add(p[1]);
            graph.get(p[1]).add(p[0]);
        }

        for (int i = 0; i < words1.length; i++) {
            if (words1[i].equals(words2[i])) continue;
            if (!graph.containsKey(words1[i])) return false;
            if (!dfs(graph, words1[i], words2[i], new HashSet<>())) return false;
        }

        return true;
    }

    private boolean dfs(Map<String, Set<String>> graph, String source, String target, Set<String> visited) {
        if (graph.get(source).contains(target)) return true;

        if (visited.add(source)) {
            for (String next : graph.get(source)) {
                if (!visited.contains(next) && dfs(graph, next, target, visited))
                    return true;
            }
        }
        return false;
    }
}

class Solution {
    public boolean areSentencesSimilarTwo(String[] a, String[] b, String[][] pairs) {
        if (a.length != b.length) return false;
        Map<String, String> m = new HashMap<>();
        for (String[] p : pairs) {
            String parent1 = find(m, p[0]), parent2 = find(m, p[1]);
            if (!parent1.equals(parent2)) m.put(parent1, parent2);
        }

        for (int i = 0; i < a.length; i++)
            if (!a[i].equals(b[i]) && !find(m, a[i]).equals(find(m, b[i]))) return false;

        return true;
    }

    private String find(Map<String, String> m, String s) {
        if (!m.containsKey(s)) m.put(s, s);
        return s.equals(m.get(s)) ? s : find(m, m.get(s));
    }
}
 */