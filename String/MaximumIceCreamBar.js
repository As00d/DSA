var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let c = 0;
  for (let i = 0; i < costs.length; i++) {
    if (coins >= costs[i]) {
      c += 1;
      coins -= costs[i];
    }
  }
  return c;
};
