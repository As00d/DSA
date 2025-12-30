// 945. Minimum Increment to Make Array Unique
var minIncrementForUnique = function (nums) {
  // sort the array
  nums.sort((a, b) => a - b);
  let i = 0,
    c = 0;
  while (i <= nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      nums[i + 1]++;
      c++;
    } else if (nums[i] > nums[i + 1]) {
      c += nums[i] - nums[i + 1] + 1;
      nums[i + 1] = nums[i] + 1;
    }
    i++;
  }
  return c;
};

console.log(minIncrementForUnique([8]));
