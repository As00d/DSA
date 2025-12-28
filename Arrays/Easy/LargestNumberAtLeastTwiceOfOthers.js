// 747. Largest Number At Least Twice of Others
var dominantIndex = function (nums) {
  let max = nums[0],
    index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }
  nums.sort((a, b) => a - b);

  if (nums[nums.length - 2] * 2 <= nums[nums.length - 1]) {
    return index;
  } else {
    return -1;
  }
};
console.log(dominantIndex([1, 2, 3, 4]));
