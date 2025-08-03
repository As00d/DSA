// 1758. Minimum Changes To Make Alternating Binary String

var minOperations = function (s) {
  let startWithOne = 0,
    startWithZero = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      if (s[i] == "1") {
        startWithOne++;
      }
      if (s[i] == "0") {
        startWithZero++;
      }
    } else {
      if (s[i] == "1") {
        startWithZero++;
      }
      if (s[i] == "0") {
        startWithOne++;
      }
    }
  }
  return startWithOne > startWithZero ? startWithZero : startWithOne;
};

console.log(minOperations("1111"));
