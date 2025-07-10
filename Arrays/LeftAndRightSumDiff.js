var leftRightDifference = function (nums) {
  let leftArray = [0],
    rightArray = [0],
    leftSum = 0,
    rightSum = 0;
  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    leftArray.push(leftSum);
  }

  for (let i = nums.length - 1; i > 0; i--) {
    rightSum += nums[i];
    rightArray.unshift(rightSum);
  }
  const outputArray = [];
  for (let i = 0; i < nums.length; i++) {
    outputArray.push(Math.abs(leftArray[i] - rightArray[i]));
  }

  return outputArray;
};

console.log(leftRightDifference([10, 4, 8, 3]));
