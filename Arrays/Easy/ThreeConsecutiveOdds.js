// 1550. Three Consecutive Odds
var threeConsecutiveOdds = function (arr) {
  if (arr.length == 1 || arr.length == 2) {
    return false;
  } else {
    let i = 0,
      j = 1;
    for (let k = 2; k < arr.length; k++) {
      if (arr[i] % 2 != 0 && arr[j] % 2 != 0 && arr[k] % 2 != 0) {
        return true;
      }
      i++;
      j++;
    }
  }
  return false;
};
