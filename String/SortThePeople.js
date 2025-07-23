var sortPeople = function (names, heights) {
  return names
    .map((name, i) => [name, heights[i]])
    .sort((a, b) => b[1] - a[1]) // sort by height descending
    .map((pair) => pair[0]);
};

sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
