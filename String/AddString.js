// 415. Add Strings
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    carry = 0,
    output = "";
  while (i >= 0 && j >= 0) {
    if (Number(num1[i]) + Number(num2[j]) + carry > 9) {
      output += (Number(num1[i]) + Number(num2[j]) + carry) % 10;
      carry = 1;
    } else {
      output += Number(num1[i]) + Number(num2[j]) + carry;
      carry = 0;
    }
    i--;
    j--;
  }
  while (j >= 0) {
    if (Number(num2[j]) + carry > 9) {
      output += (Number(num2[j]) + carry) % 10;
      carry = 1;
    } else {
      output += Number(num2[j]) + carry;
      carry = 0;
    }
    j--;
  }
  while (i >= 0) {
    if (Number(num1[i]) + carry > 9) {
      output += (Number(num1[i]) + carry) % 10;
      carry = 1;
    } else {
      output += Number(num1[i]) + carry;
      carry = 0;
    }
    i--;
  }
  if (carry) {
    console.log(carry);
    output += carry;
  }
  console.log(output.split("").reverse().join(""));
};

addStrings("0", "0");
