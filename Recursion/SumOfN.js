// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

function sumOfN(n) {
  if (n == 1) {
    return 1;
  }
  let sumNm1 = sumOfN(n - 1);
  let sumN = n + sumNm1;

  return sumN;
}

let ans = sumOfN(6);
console.log(ans);
