var maximumWealth = function (accounts) {
  let max = 0,
    sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    sum = accounts[i].reduce((acc, curr) => {
      return (acc += curr);
    }, 0);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);
