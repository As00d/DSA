// 1200. Minimum Absolute Difference
var minimumAbsDifference = function (arr) {
  let output = [];
  arr.sort((a, b) => a - b);
  let diff = arr[1] - arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (diff > arr[i + 1] - arr[i]) {
      diff = arr[i + 1] - arr[i];
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === diff) {
      output.push([arr[i], arr[i + 1]]);
    }
  }
  return output;
};

minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]);
