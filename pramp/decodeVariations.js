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
	/**
	@param S: string
	@return: integer
	*/
  let counter = 0;
  
  helper(S, 0)
  
  function helper (str, index){

    if(str.length <= index){
      counter++;
      return
    }
    
    if(str.length >=  index+1){
      let strNum = parseInt(str.slice(index, index+2));
      if(strNum <= 26 && strNum > 9 ){
        helper (str, index+2);
      } 
    }
    if((index == str.length-1) && (str[index] =="0")){
        return;  
    } else {
       helper(str, index+1);
    }
  }
  
  return counter;  
}

console.log(decodeVariations("1262"))