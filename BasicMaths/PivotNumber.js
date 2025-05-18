var sum = (n) => {
  return (n * (n + 1)) / 2;
};
var pivotInteger = function (n) {
  let sumN = sum(n);
  for (let i = 1; i <= n; i++) {
    if (sum(i) === sumN - sum(i) + i) {
      return i;
    }
  }
  return -1;
};
console.log(pivotInteger(8));
