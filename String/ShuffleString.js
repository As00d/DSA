var restoreString = function (s, indices) {
  let map = new Map();
  for (let i = 0; i < indices.length; i++) {
    map.set(indices[i], s[i]);
  }
  let output = "";
  const mapSort1 = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));
  console.log(mapSort1);
  for (let [_, value] of mapSort1) {
    output += value;
  }
  console.log(output);
  return output;
};

restoreString("vttqexwqgdc", [9, 5, 8, 0, 4, 3, 6, 10, 1, 2, 7]);
