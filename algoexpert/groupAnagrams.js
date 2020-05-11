function groupAnagrams(words) {
    // Write your code here.
    let hash = {};

    for (let i = 0; i < words.length; i++) {
        let cur = words[i];
        cur = cur.split("").sort().join(""); // depends on length of word(#letters), run comparison between chars in ascending order
        if (hash[cur] === undefined) {
            hash[cur] = [];
        } 
        hash[cur].push(words[i]);
    }
    // O(n) * O(m log m) ==> O(m * n * log(n))  where n is gthe length of array and m is the length of string
    return Object.values(hash);
}

let input1 = { "words": ["yo", "act", "flop", "tac", "cat", "oy", "olfp"] };

console.log(groupAnagrams(input1.words));

// Space = O(WN); Time = O( W N log(N) );
// Another Solution is=> Space = O(WN); Time = O(WNlog(N) + NWlog(W));