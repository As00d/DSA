var runningSum = function (nums) {
  let c = 0;
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    c += nums[i];
    arr.push(c);
  }
  return arr;
};

runningSum([1, 1, 1, 1, 1]);
