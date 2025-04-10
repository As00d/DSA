function powerLog(x, n) {
  if (n == 0) {
    return 1;
  }

  if (n % 2 === 0) {
    let powerLognm2 = powerLog(x, Math.trunc(n / 2));
    let powerLognm = powerLognm2 * powerLognm2;
    return powerLognm;
  } else {
    let powerLognm2 = powerLog(x, Math.trunc(n / 2));
    let powerLognm = powerLognm2 * powerLognm2 * x;
    return powerLognm;
  }
}

let ans = powerLog(2, 5);
console.log(ans);
