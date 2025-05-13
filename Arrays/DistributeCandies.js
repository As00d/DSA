var distributeCandies = function (candyType) {
  const candySet = new Set([...candyType]);

  return candySet.size < candyType.length / 2
    ? candySet.size
    : candyType.length / 2;
};

console.log(distributeCandies([6, 6, 6, 6]));
