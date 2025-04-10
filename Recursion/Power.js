// Problem :  Given x and n return x power n

function powerX(x, n) {
  if (n == 0) {
    return 1;
  }
  let xnm1 = powerX(x, n - 1);
  let xnm = x * xnm1;

  return xnm;
}

console.log(powerX(2, 5));
