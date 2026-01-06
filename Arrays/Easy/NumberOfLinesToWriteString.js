// 806. Number of Lines To Write String
var numberOfLines = function (widths, s) {
  let line = 1,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (count + widths[s.charCodeAt(i) - 97] > 100) {
      count = widths[s.charCodeAt(i) - 97];
      line++;
    } else {
      count += widths[s.charCodeAt(i) - 97];
    }
  }
  return [line, count];
};
numberOfLines(
  [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
  ],
  "abcdefghijklmnopqrstuvwxyz"
);
