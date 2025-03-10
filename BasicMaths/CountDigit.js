// Problem Statement: Given an integer N, return the number of digits in N.

let n = 7789;
let count = 0;
while (n > 0) {
  n = Math.trunc(n / 10);
  console.log(n);
  count++;
}
console.log(count);
