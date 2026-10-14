// 3723. Maximize Sum of Squares of Digits
// used greedy so appended 9 to the result and then remainder and finally ended with 0

var maxSumOfSquares = function (num, sum) {
  if (sum > num * 9) {
    return "";
  }
  let outputString = "";
  let numberOf9toAppend = Math.trunc(sum / 9);
  let leftSum = sum % 9;
  for (let i = 0; i < numberOf9toAppend; i++) {
    outputString += "9";
  }
  if (leftSum) outputString += leftSum;

  let remZero = num - outputString.length;
  for (let i = 0; i < remZero; i++) {
    outputString += "0";
  }

  return outputString;
};
