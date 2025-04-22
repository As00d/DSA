class Solution {
  largestElement(nums) {
    let number = nums[0];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > number) {
        number = nums[i];
      }
    }
    return number;
  }
}
