var transformArray = function (nums) {
  let ceven = 0,
    codd = 0;
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      ceven++;
    } else {
      codd++;
    }
  }
  for (let i = 0; i < ceven; i++) {
    output.push(0);
  }
  for (let i = 0; i < codd; i++) {
    output.push(1);
  }
  return output;
};

transformArray([4, 3, 2, 1]);
