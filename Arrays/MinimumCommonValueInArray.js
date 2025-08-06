// 2540. Minimum Common Value

var getCommon = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  while (i != nums1.length && j != nums2.length) {
    if (nums1[i] == nums2[j]) {
      return nums1[i];
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return -1;
};
console.log(getCommon([3, 5], [2]));
