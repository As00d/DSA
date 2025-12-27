// 908. Smallest Range I
var smallestRangeI = function (nums, k) {
  nums.sort((a, b) => a - b);
  nums[0] = nums[0] + k;
  nums[nums.length - 1] = nums[nums.length - 1] - k;

  if (nums[nums.length - 1] > nums[0]) {
    return nums[nums.length - 1] - nums[0];
  } else {
    return 0;
  }
};
console.log(smallestRangeI([1, 3, 6], 2));
