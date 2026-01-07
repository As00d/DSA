// 1539. Kth Missing Positive Number
var findKthPositive = function (arr, k) {
  let c = 1,
    missing;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != c) {
      missing = c;
      k--;
      if (k == 0) {
        return missing;
      } else {
        i--;
        c++;
      }
    } else {
      c++;
    }
  }
  while (k) {
    k--;
    c++;
  }
  return c - 1;
};
console.log(findKthPositive([2, 3, 4, 7, 11], 7));
