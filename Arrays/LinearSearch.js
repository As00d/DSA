const LinearSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
};

console.log(LinearSearch([1, 2, 3, 4, 5], 4));
