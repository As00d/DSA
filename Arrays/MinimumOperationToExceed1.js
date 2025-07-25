var minOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      c++;
    } else {
      break;
    }
  }
  return c;
};

minOperations([2, 11, 10, 1, 3], 10);
