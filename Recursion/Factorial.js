// Problem - given a value return its factorial

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  let fnm1 = factorial(n - 1);
  let fn = n * fnm1;
}

console.log(factorial(5));
