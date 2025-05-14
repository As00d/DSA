var finalPrices = function (prices) {
  const output = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        output.push(prices[i] - prices[j]);
        break;
      } else if (j == prices.length - 1) {
        output.push(prices[i]);
        break;
      }
    }
  }
  output.push(prices[prices.length - 1]);
  return output;
};

finalPrices([8, 4, 6, 2, 3]);
