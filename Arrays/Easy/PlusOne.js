// 66. Plus One
var plusOne = function (digits) {
  let carry = 0,
    output = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    console.log(i, digits.length - 1);
    if (i == digits.length - 1) {
      if (digits[i] + 1 > 9) {
        output.push(0);
        carry = 1;
      } else {
        output.push(digits[i] + 1);
        carry = 0;
      }
    } else {
      if (digits[i] + carry > 9) {
        carry = 1;
        output.push(0);
      } else {
        output.push(digits[i] + carry);
        carry = 0;
      }
    }
  }
  if (carry) {
    output.push(1);
  }
  return output.reverse();
};
console.log(plusOne([9, 9, 9, 9, 9]));
