// 3774. Absolute Difference Between Maximum and Minimum K Elements
var absDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < k; i++) {
    sum1 += nums[i];
  }
  for (let i = nums.length - 1; i > nums.length - 1 - k; i--) {
    sum2 += nums[i];
  }
  console.log(sum2 - sum1);
  return sum2 - sum1;
};
absDifference([100], 1);
