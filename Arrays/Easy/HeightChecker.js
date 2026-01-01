// 1051. Height Checker
var heightChecker = function (heights) {
  let originalHeight = [...heights];

  heights.sort((a, b) => a - b);
  let c = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != originalHeight[i]) {
      c++;
    }
  }
  return c;
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
