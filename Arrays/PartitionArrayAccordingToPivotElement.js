var pivotArray = function (nums, pivot) {
  let small = [],
    big = [],
    pivotEl = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      small.push(nums[i]);
    } else if (nums[i] > pivot) {
      big.push(nums[i]);
    } else {
      pivotEl.push(nums[i]);
    }
  }
  return [...small, ...pivotEl, ...big];
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
