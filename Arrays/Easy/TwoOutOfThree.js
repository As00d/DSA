// 2032. Two Out of Three
const getUnique = (arr1, arr2, output) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      output.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    }
  }
};

var twoOutOfThree = function (nums1, nums2, nums3) {
  let output = [];
  getUnique(nums1, nums2, output);
  getUnique(nums2, nums3, output);
  getUnique(nums1, nums3, output);

  console.log(output);
  let finalSet = new Set(output);
  return [...finalSet];
};
