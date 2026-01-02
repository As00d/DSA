// 961. N-Repeated Element in Size 2N Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (arr) {
  const hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.get(arr[i])) {
      hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
    } else {
      hashMap.set(arr[i], 1);
    }
  }
  let max = Number.NEGATIVE_INFINITY,
    maxValue;
  for (let [key, value] of hashMap) {
    if (value > max) {
      max = value;
      maxValue = key;
    }
  }
  return maxValue;
};
