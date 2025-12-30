// 1005. Maximize Sum Of Array After K Negations
var largestSumAfterKNegations = function (nums, k) {
  // Sorting of array is needed
  nums.sort((a, b) => a - b);
  let negativeCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeCount++;
    }
  }
  if (negativeCount <= 0) {
    nums[0] = nums[0] * Math.pow(-1, k);
  } else {
    if (k > negativeCount) {
      let i = 0;
      while (negativeCount) {
        nums[i] = nums[i] * -1;
        negativeCount--;
        k--;
        i++;
      }
      nums.sort((a, b) => a - b);
      nums[0] = nums[0] * Math.pow(-1, k);
    } else {
      let i = 0;
      while (k) {
        nums[i] = nums[i] * -1;
        i++;
        k--;
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};
console.log(largestSumAfterKNegations([-2, 5, 0, 2, -2], 3));
