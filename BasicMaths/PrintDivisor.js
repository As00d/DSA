// Problem Statement: Given an integer N, return all divisors of N.

// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

function divisor(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

const value = divisor(12);
console.log(value);
