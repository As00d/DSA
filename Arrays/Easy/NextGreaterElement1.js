// 496. Next Greater Element I
var nextGreaterElement = function (nums1, nums2) {
  let output = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let found = false;
      if (nums1[i] == nums2[j]) {
        for (let k = j; k < nums2.length; k++) {
          if (nums2[k] > nums1[i]) {
            output.push(nums2[k]);
            found = true;
            break;
          }
        }
        if (!found) {
          output.push(-1);
        }
      }
    }
  }
  console.log(output);
};

nextGreaterElement([2, 4], [1, 2, 3, 4]);
