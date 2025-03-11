// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

function isArmstrong(n) {
  let numberOfDigit = 0;
  let k = n,
    m = n;
  while (k > 0) {
    k = Math.trunc(k / 10);
    numberOfDigit++;
  }
  let sumOfNumber = 0,
    lastDigit = 0;
  while (m > 0) {
    lastDigit = Math.trunc(m % 10);
    m = Math.trunc(m / 10);
    sumOfNumber += Math.pow(lastDigit, numberOfDigit);
  }
  return sumOfNumber === n ? true : false;
}

const value = isArmstrong(3271);
console.log(value);
