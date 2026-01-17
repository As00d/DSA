// 1295. Find Numbers with Even Number of Digits
const countDigit = (num) => {
  let c = 0;
  while (num > 0) {
    num = Math.trunc(num / 10);
    c++;
  }
  if (c % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
var findNumbers = function (nums) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (countDigit(nums[i])) {
      c++;
    }
  }
  return c;
};
findNumbers([12, 345, 2, 6, 7896]);
