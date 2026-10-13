// 3727. Maximum Alternating Sum of Squares
var maxAlternatingSum = function (nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = Math.abs(nums[i]);
    }
  }
  nums.sort((a, b) => a - b);
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    if (i == j) {
      answer += nums[i] * nums[i];
    } else {
      answer += nums[j] * nums[j] - nums[i] * nums[i];
    }
    i++;
    j--;
  }
  return answer;
};
