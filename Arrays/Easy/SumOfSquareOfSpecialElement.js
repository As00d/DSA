// 2778. Sum of Squares of Special Elements
var sumOfSquares = function (nums) {
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) == 0) {
      output += nums[i] * nums[i];
    }
  }
  return output;
};

sumOfSquares([2, 7, 1, 19, 18, 3]);
