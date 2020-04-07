/* 
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

const numJewelsInStones = function(J, S) {

  // convert string to array;
  const arrayS = S.split('');
  const arrayJ = J.split('')

  let numofJ = 0;
  // Loop through array
  for(let i = 0; i < arrayS.length; i++){

    if(arrayJ.indexOf(arrayS[i]) > -1){
       numofJ = numofJ + 1;
  }}

  return numofJ
};
