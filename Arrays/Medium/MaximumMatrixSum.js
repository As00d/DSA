// 1975. Maximum Matrix Sum
var maxMatrixSum = function (matrix) {
  // the flow is to traverse the array check for number of negative elements
  // Check for smallest number no matter positive or negative
  // Calculate the sum of array no matter +ve or -ve
  // case to handle 0
  let countNegative = 0,
    hasZero = 0,
    smallest = Math.abs(matrix[0][0]),
    sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        countNegative++;
      }
      if (matrix[i][j] == 0) {
        hasZero++;
      }
      if (smallest > Math.abs(matrix[i][j])) {
        smallest = Math.abs(matrix[i][j]);
      }
      sum += Math.abs(Math.abs(matrix[i][j]));
    }
  }
  if (hasZero) {
    return sum;
  }
  if (countNegative % 2 !== 0) {
    return sum - 2 * Math.abs(smallest);
  } else {
    return sum;
  }
};

console.log(
  maxMatrixSum([
    [-8, -9, -10, 1],
    [-5, -7, -10, -3],
    [-8, -4, -2, -6],
    [2, -1, 8, -3],
  ])
);
