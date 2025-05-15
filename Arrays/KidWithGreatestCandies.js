var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  const maxElement = candies.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, candies[0]);
  const out = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxElement) {
      out.push(true);
    } else {
      out.push(false);
    }
  }
  return out;
};
kidsWithCandies([2, 3, 5, 1, 3], 3);
