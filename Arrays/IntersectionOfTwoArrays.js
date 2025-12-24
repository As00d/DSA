var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0,
    output = [];
  while (i <= nums1.length - 1 && j <= nums2.length - 1) {
    console.log(i, j);
    console.log(nums1[i], nums2[j]);
    if (nums1[i] === nums2[j]) {
      output.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return output;
};
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
