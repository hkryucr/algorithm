/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.
*/

const uniqueMorseRepresentations = (words) => {
  // Create obj with alphabetical order keys
  const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const morse =  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let ref = {}
  for (let i=0; i<letter.length; i++) {
    ref[letter[i]] = morse[i]
  }
  
  let finalArr = []
  // convert each element in array to morse symbols
  words.forEach((el) => {
    let elMorsed = ([...el].map(c => ref[c])).join('');

    // Get unique elements
    if (finalArr.indexOf(elMorsed) === -1){
      finalArr.push(elMorsed);
    }
  })
  return finalArr.length
};

// Cleaner Solution
const uniqueMorseRepresentations2 = (words) => {
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  
  // create a mapper to convert each character to index number
  // a,b,c,d -> a starts from 0 and below starts from 97 so <'a'.charCodeAt(0) - 97>
  const mapper = char => morse[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  
  return words.map((word)=>{return word.split('').map(mapper).join('')})
    .reduce((set, cur)=>set.add(cur), new Set()).size   
}
