// 3551. Minimum Swaps to Sort by Digit Sum
const sumOfDigit = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.trunc(num / 10);
  }
  return sum;
};
const myComp = (a, b) => {
  let digitSum1 = sumOfDigit(a);
  let digitSum2 = sumOfDigit(b);
  if (digitSum1 != digitSum2) {
    return digitSum1 - digitSum2;
  }
  return a - b;
};
var minSwaps = function (nums) {
  let minSwap = 0;
  const expectedOutput = nums.toSorted(myComp);
  // Adding the value to the map
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    myMap.set(nums[i], i);
  }

  for (let i = 0; i < expectedOutput.length; i++) {
    let indexPresentInArray = myMap.get(expectedOutput[i]);
    if (i != indexPresentInArray) {
      let temp = nums[i];
      nums[i] = nums[indexPresentInArray];
      nums[indexPresentInArray] = temp;
      // update value in map
      myMap.set(nums[i], i);
      myMap.set(nums[indexPresentInArray], indexPresentInArray);
      minSwap += 1;
    }
  }
  return minSwap;
};

minSwaps([18, 43, 34, 16]);
