var largestOddNumber = function (num) {
  let output = "";
  let odd = false;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0 || odd) {
      output += num[i];
      odd = true;
    }
  }
  return output.split("").reverse().join("");
};
