// 3745. Maximize Expression of Three Elements
var maximizeExpressionOfThree = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] + nums[nums.length - 2] - nums[0];
};
console.log(maximizeExpressionOfThree([1, 4, 2, 5]));
