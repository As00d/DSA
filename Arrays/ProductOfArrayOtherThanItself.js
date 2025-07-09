var productExceptSelf = function (nums) {
  let prefix = [1],
    suffix = [1];
  product = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    product = nums[i] * product;
    prefix.push(product);
  }
  product = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    product = nums[i] * product;
    suffix.unshift(product);
  }

  let finalOutput = [];
  for (let i = 0; i < nums.length; i++) {
    if (suffix[i] * prefix[i] == -0) {
      finalOutput.push(0);
    } else {
      finalOutput.push(suffix[i] * prefix[i]);
    }
  }
  console.log(finalOutput);
  return finalOutput;
};

productExceptSelf([-1, 1, 0, -3, 3]);
