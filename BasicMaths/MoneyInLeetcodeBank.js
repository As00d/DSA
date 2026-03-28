// 1716. Calculate Money in Leetcode Bank
var totalMoney = function (n) {
  let moneyPot = 0,
    t = 0;
  for (let i = 1; i <= n; i++) {
    let c = i;
    if (i % 7 == 0) {
      moneyPot += 7 + t;
      t = t + 1;
    } else {
      moneyPot += (c % 7) + t;
    }
  }
  return moneyPot;
};
