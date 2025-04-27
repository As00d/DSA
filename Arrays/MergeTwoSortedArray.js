// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

var merge = function (arr, n, brr, m) {
  let j = 0;
  for (let i = n; i < m + n; i++) {
    arr[i] = brr[j];
    j++;
  }
  arr.sort((a, b) => a - b);
};

merge([1, 2, 3, 0, 0, 0], 6, [2, 5, 6], 3);
