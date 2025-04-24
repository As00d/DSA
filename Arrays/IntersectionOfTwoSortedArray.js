const intersection = (arr, brr) => {
  let i = 0,
    j = 0;
  let output = [];
  while (i != arr.length && j != brr.length) {
    if (arr[i] < brr[j]) {
      i++;
    } else if (arr[i] > brr[j]) {
      j++;
    } else {
      if (output.length == 0) {
        output.push(arr[i]);
      } else if (arr[i] !== output[output.length - 1]) {
        output.push(arr[i]);
      }
      i++;
      j++;
    }
  }

  return output;
};

console.log(intersection([1, 2, 2, 3, 4, 4, 5], [2, 3]));
