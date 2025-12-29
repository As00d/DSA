// 860. Lemonade Change
var lemonadeChange = function (bills) {
  let i = 0,
    fiveNote = 0,
    tenNote = 0,
    twentyNote = 0;
  while (i < bills.length) {
    let currentRunningAmount = bills[i];
    if (currentRunningAmount === 5) {
      fiveNote++;
      i++;
    } else if (currentRunningAmount === 10) {
      tenNote++;
      if (fiveNote >= 1) {
        currentRunningAmount = 0;
        fiveNote = fiveNote - 1;
        i++;
      } else {
        return false;
      }
    } else if (currentRunningAmount === 20) {
      twentyNote++;
      if (tenNote >= 1 && fiveNote >= 1) {
        currentRunningAmount = 0;
        tenNote = tenNote - 1;
        fiveNote = fiveNote - 1;
        i++;
      } else if (fiveNote >= 3) {
        {
          fiveNote = fiveNote - 3;
          i++;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};
console.log(lemonadeChange([10, 10]));
