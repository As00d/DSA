var createTargetArray = function (nums, index) {
  const arr = [];
  let i = 0;
  while (arr.length != nums.length) {
    if (i > nums.length - 1 && i != 0) {
      i = 0;
    } else {
      arr.splice(index[i], 0, nums[i]);
      i++;
    }
  }
  return arr;
};
createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
