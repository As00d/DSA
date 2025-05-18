var minOperations = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum % k;
};

minOperations([3, 9, 7], 5);
