var leftRotateArrayByDPlaces = function (nums, k) {
  k = k % nums.length;
  let brr = [],
    crr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - k) brr.push(nums[i]);
    else crr.push(nums[i]);
  }
  for (let i = 0; i < crr.length; i++) {
    nums[i] = crr[i];
  }
  let j = 0;
  for (let i = crr.length; i < nums.length; i++) {
    nums[i] = brr[j];
    j++;
  }
  return nums;
};

console.log(leftRotateArrayByDPlaces([1, 2, 4, 5, 6], 1));
