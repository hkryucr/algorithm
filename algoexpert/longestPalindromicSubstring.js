/*
"bab"
=> iterate through all char (O(n))
=> see possible palindrom by incremenging left && right (O(n/2))

Input: "baba d dddd"
Output: "bab"

*/
function longestPalindromicSubstring(string) {
    // Write your code here.
    if (string.length === 0) return "";
    let leftIdx = 0;
    let rightIdx = 0;

    for (let i = 0; i < string.length; i++) {
        // two different palindrome (Even Number Palindrom)
        // i = 0 
        // string[i]
        let left = i;
        let right = i + 1;
        while (left >= 0 && right < string.length && string[left] === string[right]) {
            if (right - left > rightIdx - leftIdx) {
                rightIdx = right;
                leftIdx = left;
            }
            left--;
            right++;
        }

        // two different palindrome (Odd Number Palindrom)
        left = i - 1;
        right = i + 1;
        while (left >= 0 && right < string.length && string[left] === string[right]) {
            if (right - left > rightIdx - leftIdx) {
                rightIdx = right;
                leftIdx = left;
            }
            left--;
            right++;
        };
    }

    return string.slice(leftIdx, rightIdx + 1);
}



/*
function longestPalindromicSubstring(string) {
// Write your code here.
    let palindromes = [];
    for(let i = 0; i < string.length; i++){
        for(let j = string.length - 1; j >= 0; j--){ //(O(n^2)) => 4n^3
            let substring = string.slice(i, j + 1); // O(n)
            if(isPalindrome(substring)) palindromes.push(substring); // O(3n)
        }
    }
    let sortPal = palindromes.sort((a, b) => b.length - a.length); O(m log m), where m is number of substring palindromes
    return sortPal[0];
}

function isPalindrome(str){
    return str === str.split('').reverse().join(''); (3n)
}
*/