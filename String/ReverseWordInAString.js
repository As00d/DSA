var reverseWords = function (s) {
  const arr = s.split(" ");
  const out = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) {
      out.push(arr[i]);
    }
  }

  return out.join(" ");
};
