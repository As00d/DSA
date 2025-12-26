// 2483. Minimum Penalty for a Shop
var bestClosingTime = function (customers) {
  let yprefix = [],
    nprefix = [],
    sumArr = [];
  // Counting Y count
  yprefix.push(0);
  let counterY = 0,
    counterN = 0;
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i] == "Y") {
      counterY++;
    }
    yprefix.push(counterY);
  }
  yprefix.reverse();
  // Counting N count
  nprefix.push(0);

  for (let i = 0; i < customers.length; i++) {
    if (customers[i] == "N") {
      counterN++;
    }
    nprefix.push(counterN);
  }
  // calculating the sum of the two array
  for (let i = 0; i < yprefix.length; i++) {
    sumArr.push(yprefix[i] + nprefix[i]);
  }
  // find minimum index
  let smallValue = sumArr[0],
    index = 0;
  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] < smallValue) {
      index = i;
      smallValue = sumArr[i];
    }
  }

  return index;
};

bestClosingTime("YYYY");
