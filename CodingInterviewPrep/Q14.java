package collab;

import java.util.HashMap;

/*
767. Reorganize String

Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

aaabe=> aeaba

aaaabez
a:4 b : 1 e:1 z:1
 ^   ^
baaaaez =>



S will consist of lowercase letters and have length in range [1, 500].
*/

class Q14 {
    public String reorganizeString(String S) {
        if(S==null) return S;
        HashMap<Character, Integer> map = new HashMap<>();
        for(char ch : S.toCharArray()){
            map.putIfAbsent(ch, 0);
            int c = map.get(ch);
            map.put(ch, c+1);
        }
        char dc=""; int maxcnt = 0; int oc=0;
        for(char c: map.keySet()){
            maxcnt = Math.max(maxcnt, map.get(c));
        }
        for(char c: map.keySet()){
            if(maxcnt == map.get(c)) dc = c;
            else oc += map.get(c);
        }
        if(maxcnt-oc>1) return "";
        // else{
        //     StringBuilder sb = new StringBuilder(); int j =0;
        //     for(int i = 0 ; i < S.length() && maxcnt >0 && oc>0; i++){
        //         char ch = S.charAt(i);
        //         if(i%2==0) {
        //             sb.append(ch);
        //             maxcnt--;
        //         } else {
        //             sb.append(ch);
        //             oc--;
        //         }
        //         j++;
        //     }
        //     if(j==S.length()) return sb.toString();
        //     else {
        //         for(int k = j ; k<S.length();k++)
        //         sb.append(S.charAt(k));
        //     }
        //     return sb.toString();
        // }
        else{
           StringBuilder sb = new StringBuilder(); int j =0;
           int i = 0;
           int n = S.length();
           while(i<n){
               if(i%2==0)
               sb.append(dc);
           }
        }

    }
}