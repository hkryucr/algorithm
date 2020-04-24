/*
1408
Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

Example 1:
Input: words = ["mass", "as", "hero", "superhero"]
Output: ["as", "hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Example 2:
Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

Example 3:
Input: words = ["blue","green","bu"]
Output: []

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 30
words[i] contains only lowercase English letters.
It's guaranteed that words[i] will be unique.
*/
/**
 * Have a set which contains all the words in the list
 * while into the set , calculate which is the longest string among the words in the list.
 * Find the substrings of the longest word, and check if thats there in the set.
 * Superhero
 * Superher
 * Superhe
 * erh
 * 
 * words - length n
 * word length - k 
 * n*k^2
 */
class Solution {

    private Set<String> findSubstring(String word){
        Set<String> res = new HashSet<>();
        int n = word.length();
        for(int i=0; i < word.length; i++ ){
            for(int j = n; j >=0;j--){
                String s = word.subString(i, j)
                res.add(s);
            }
        }
        return res;
    }
    public List<String> stringMatching(String[] words) {
        HashSet<String> res = new HashSet<>();
        List<String> ans = new ArrayList<>();
        if(words==null || words.length==0) return ans;
        HashSet<String> hs = new HashSet<>();

        String longestWord = "";
        for(String word : words){
            hs.add(word);
        }
        HashSet<String> ss = new HashSet<>();

        Arrays.sort(words, (a,b -> b.length()-a.length()))
        for(String eachWord : words){
            ss = findSubstring(eachWord);
            for(String subss: ss){
                if(hs.contains(subss))
                    res.add(subss);
            }
        }

        for(String s: res)
            ans.add(s);
        return ans;
    }
}