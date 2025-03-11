// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

function isPrimeNumber(n) {
  if (n == 1) {
    return false;
  } else if (n == 2) {
    return true;
  } else if (n % 2 == 0) {
    return true;
  } else {
    for (let i = 3; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}

const value = isPrimeNumber(23);
console.log(value);
