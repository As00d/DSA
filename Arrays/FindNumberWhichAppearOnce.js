var singleNumber = function (nums) {
  let out = 0;
  for (let i = 0; i < nums.length; i++) {
    out = out ^ nums[i];
  }
  return out;
};

console.log(singleNumber([1, 2, 2, 5, 5, 1, 9]));
