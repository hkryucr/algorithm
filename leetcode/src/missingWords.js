
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'missingWords' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 */

function missingWords(s, t) {
  // Write your code here
  let sWords = s.split(" ");
  let tWords = t.split(" ");

  let i = 0,
    j = 0;
  let result = [];
  while (i < sWords.length) {
    if (sWords[i].length === 0) {
      i++;
      continue;
    }
    if (sWords[i] === tWords[j]) {
      j++;
    } else {
      result.push(sWords[i]);
    }
    i++;
  }
  return result;
}

