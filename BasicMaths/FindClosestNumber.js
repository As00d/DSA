var findClosest = function (x, y, z) {
  if (Math.abs(z - y) == Math.abs(z - x)) return 0;
  return Math.abs(z - y) > Math.abs(z - x) ? 1 : 2;
};

findClosest(2, 7, 4);
