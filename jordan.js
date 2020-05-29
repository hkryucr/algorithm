// Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all 
// unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two 
// or more words have the same count, they should be sorted according to their order in the original sentence. Assume 
// that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” 
// and “perfect” should be considered the same word.

// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.
// Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

// Examples:

// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["youll", "1"], ["only", "1"], 
//           ["get", "1"], ["by", "1"], ["just", "1"] ]
// Important: please convert the occurrence integers in the output list to strings (e.g. "3" instead of 3). We ask this 
// because in compiled languages such as C#, Java, C++, C etc., it’s not straightforward to create mixed-type arrays 
// (as it is, for instance, in scripted languages like JavaScript, Python, Ruby etc.). The expected output will simply be an array of string arrays.


// JUSTIN'S PSUEDOCODE
// iterate over each word (or char)
    // if we iterate over chars instead of words
        // disregard the punctuations and know its a new word when we see a space
// store in hashmap
// charCodeAt()
function wordCountEngine(document) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    let words = document.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = '';
        for (let j = 0; j < word.length; j++) {
            let letter = word[j].toLowerCase();
            if (alpha.includes(letter)) newWord += letter;
        }
        newWords.push(newWord);
    }

    let hash = {};
    for (let i = 0; i < newWords.length; i++) {
        let word = newWords[i];
        if (hash[word]) {
            hash[word] += 1;
        } else {
            hash[word] = 1;
        }
    }

    let ans = [];
    let values = Object.values(hash).sort((a,b) => b-a);
    let keys = [];
    for (let w = 0; w < newWords.length; w++) {
        let word = newWords[w];
        if (!keys.includes(word)) keys.push(word);
    }

    let k = 0;
    while (k < keys.length) {
        let key = keys[k];
        if (hash[key] === values[0]) {
            ans.push([key, values.shift()]);
            keys.splice(k, 1);
            k = 0;
        } else {
            k += 1;
        }
    }

    return ans;
}

let document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"

let document2 = "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors.";
let document3 = "To be, or not to be, that is the question:";
let docs6 =
    "Cause I'm Slim Shady, yes I'm the real Shady, All you other Slim Shadys are just imitating So won't the real Slim Shady, please stand up, Please stand up, Please stand up"
// second [["to", "2"], ["be", "2"], ["or", "1"], ["not", "1"], ["that", "1"], ["is", "1"], ["the", "1"], ["question", "1"]];

// console.log(wordCountEngine(document2));
console.log(wordCountEngine(docs6)); 
//[["and","4"],["every","3"],["is","3"],["a","3"],["quotation","3"],["all","2"],["book","1"],["house","1"],
//["out","1"],["of","1"],["forests","1"],["mines","1"],["stone","1"],["quarries","1"],["man","1"],["from","1"],["his","1"],["ancestors","1"]]