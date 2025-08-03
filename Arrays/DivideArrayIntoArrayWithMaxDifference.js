// 2966. Divide Array Into Arrays With Max Difference

var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  let finalOutput = [];
  let temp = [];
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    temp.push(nums[i]);
    c++;

    if (c == 3) {
      finalOutput.push(temp);
      temp = [];
      c = 0;
    }
  }
  for (let i = 0; i < finalOutput.length; i++) {
    if (finalOutput[i][finalOutput[0].length - 1] - finalOutput[i][0] > k) {
      return [];
    }
  }

  return finalOutput;
};

console.log(
  divideArray([4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11], 14)
);
