/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

{ 
1: ""
2: "abc", 
3: "def", 
4: "ghi", 
5: "jkl", 
6: "mno". 
7: "pqrs", 
8: "tuv", 
9: "wxyz"
0: ""
}

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

23
a b c
d e f 

ad ae af
bd be df
cd ce cf

923

w x y x
a b c
d e f

f

letterCombinations("3")     letterCombinations("2") ["a","b","c"]
    ["d","e","f"]       *        ["a","b","c"] =>       letterCombinations("32") => [ad ae af bd be df cd ce cf]
    ["g", "h","i"]       *       ( ["d","e","f"]       *        ["a","b","c"] ) =>       letterCombinations("4     32")


Although the above answer is in lexicographical order, your answer could be in any order you want.

*/

class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> res = new ArrayList<>();
        if(digits==null||digits.length==0) return res;
        //int i = 0
        List<String> ans = new ArrayList<>();
        HashMap<Integer, String> map = new HashMap<>();
        map.put(0, "");
        map.put(1, "");
        map.put(2, "abc")
        map.put(3, "def");
        map.put(4, "abc")


        return backtrack(digits, 0, ans, res, map);

        
    }

    public List<String> backtrack(String digits, String tmpString, int curr, List<String> tmp, List<String> res, HashMap<Integer, String> map){
        if(curr==digits.length()) return res;
        if
        


        // for(int i=0; i<digits.length(); i++){
            // "123" -> "12" ["ab","ba", "ce", "..... "....] backtrack returns arr
            List<String> prevArr = backtrack("12" , )
            // char ch = digits.charAt(i); // 3
            char ch = digits[digits.length()-1; // 3
            int num = Integer.parseInt(ch);
            String mapped = map.get(num); // "def"
            List<String> tempArr = new ArrayList<>();
            for(int j = 0 ; j<prevArr.length(); j++){
                // char ch = prevArr.charAt(0);
                prevArr // "ab"
                for(String word: ans){
                    ans.add(word+ch); // "abd" , "abe", "abf"
                    tempArr.add(word+ch);
                }
            }
            return tempArr;
        // }
    }
}
