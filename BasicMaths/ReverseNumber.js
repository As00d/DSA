// Problem Statement: Given an integer N return the reverse of the given number.

function reverseDigit(n) {
  // handling negative numbers
  let j = n;
  if (n < 0) {
    n = Math.abs(n);
  }
  let lastDigit = 0;
  let finalOutput = 0;
  while (n > 0) {
    lastDigit = n % 10;
    finalOutput = finalOutput * 10 + lastDigit;
    n = Math.trunc(n / 10);
  }
  if (j < 0) {
    finalOutput = "-" + finalOutput;
  }
  return +finalOutput;
}

const value = reverseDigit(-120);
console.log(value);
