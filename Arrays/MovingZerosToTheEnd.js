const moveZeroToEnd = (arr) => {
  let j = 0,
    c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[j] = arr[i];
      j++;
    } else {
      c++;
    }
  }
  for (let i = arr.length - 1; i >= arr.length - c; i--) {
    arr[i] = 0;
  }
  return arr;
};

console.log(moveZeroToEnd([1, 2, 0, 3, 1, 0, 0, 2, 1, 1]));
