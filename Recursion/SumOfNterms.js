// Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.

function sumOfN(n) {
  if (n == 1) {
    return 1;
  }
  let sumNm1 = sumOfN(n - 1);
  let sumN = Math.pow(n, 3) + sumNm1;

  return sumN;
}

let ans = sumOfN(5);
console.log(ans);
