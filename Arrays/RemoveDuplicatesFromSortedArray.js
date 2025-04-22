var removeDuplicates = function (nums) {
  let trackIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[trackIndex]) {
      nums[trackIndex + 1] = nums[i];
      trackIndex++;
    }
  }
  return trackIndex + 1;
};

console.log(removeDuplicates([12, 12, 45, 45, 45, 89, 89]));
