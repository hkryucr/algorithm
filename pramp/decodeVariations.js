/*
Decode Variations
A letter can be encoded to a number in the following way:

'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.

Examples:

input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.
Constraints:

[time limit] 5000ms

[input] string S

1 ≤ S.length ≤ 12
[output] integer
*/

function decodeVariations(S) {

  let arr = new Array(S.length + 1);
  arr[S.length - 1] = 1;
  arr[S.length] = 1;

  for (let i = S.length - 1; i >= 0; i--) {
    if (i !== 0 && S[i] === "0" && parseInt(S[i - 1]) > 2) return 0;

    if (i === S.length - 1) {
      continue;
    }

    if (parseInt(S.slice(i, i + 2)) <= 26) {
      arr[i] = arr[i + 1] + arr[i + 2];
    } else {
      arr[i] = arr[i + 1];
    }
  }

  return arr[0];
}
