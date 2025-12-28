// 1351. Count Negative Numbers in a Sorted Matrix
var countNegatives = function (grid) {
  let c = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        c++;
      }
    }
  }
  return c;
};
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
);
