/*
204. Count Primes

Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
[[2, true], [3, true], ..., [9, true]]
*/

var countPrimes = function(n) {
    if (n === 1) return 0
    if (n === 2) return 1
    const primes = [2]
    for (let i = 3; i < n; i++) {
        if (primes.length > 0) {
            let idx = 0
            let isPrime = true
            while (idx < primes.length) {
                if (i % primes[idx] === 0) {
                    isPrime = false
                    break
                }
                idx++
            }
            if (isPrime) {
                primes.push(i)
            }
        }
    }
    return primes.length
}

const Input = 15;
const Output =  4
console.log(countPrimes(Input));

var countPrimes = function (n) {
  var cnt = 0;
  var array = new Array(n).fill(false);
  array[0] = true;
  array[1] = true;
  for (i = 2; i < Math.sqrt(n); i++) {
    if (array[i]) continue;
    for (j = i + i; j <= n; j += i) {
      array[j] = true;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) cnt++;
  }
  return cnt;
};
