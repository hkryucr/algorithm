
/*
 * Complete the 'isIncluded' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. STRING_ARRAY words
 *  2. STRING query
 */


function isIncluded(words, query) {
    // Write your code here
    if (query.length === 0) return false;

    for (let i = 0; i < words.length; i++) { // m 
        let curWord = words[i];
        if (curWord.length !== query.length) continue;

        let match = true;
        for (let j = 0; j < query.length; j++) { //n
            if (query[j] === "*") continue;
            if (query[j] === curWord[j]) continue;
            match = false; // if the current word is not matched -> incorrect
        }
        if (match) return true;
    }
    return false;
}

var words = ["foo", "bar", "baz"];

console.log(isIncluded(words, "foo"));   // true   (because 'foo' exists in the list of words)
console.log(isIncluded(words, "hello")); // false  (because 'hello' does NOT exists in the list of words)

console.log(isIncluded(words, "f*o"));   // true  (because the '*' matches the first 'o' in foo)
console.log(isIncluded(words, "**"));    // false (no two letter words)

console.log(isIncluded(words, "*az"));   // Is this true or false? true
