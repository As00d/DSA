var findDisappearedNumbers = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length + 1; i++) {
    arr.push(0);
  }

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] += 1;
  }
  let output = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == 0) {
      output.push(i);
    }
  }
  return output;
};

// Time complexity - O(3n) => O(n) Space complexity - O(n)

// Optimised approach

const missingElement = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);

console.log(missingElement);
