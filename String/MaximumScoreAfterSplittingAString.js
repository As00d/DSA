// 1422. Maximum Score After Splitting a String
var maxScore = function (s) {
  if (s == "00" || s == "11") {
    return 1;
  } else if (s == "01") {
    return 2;
  }
  let leftArray = [],
    rightArray = [];
  let zeroValue = 0,
    oneValue = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "0") {
      zeroValue += 1;
    }
    leftArray.push(zeroValue);
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "1") {
      oneValue += 1;
    }
    rightArray.unshift(oneValue);
  }
  let max = 0;
  for (let i = 1; i < leftArray.length - 1; i++) {
    if (leftArray[i] + rightArray[i] > max) {
      max = leftArray[i] + rightArray[i];
    }
  }
  return max;
};

console.log(maxScore("00"));
