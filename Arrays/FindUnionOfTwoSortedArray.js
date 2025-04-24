// this works for positive numbers
const unionOfTwoSortedArray = (arr, brr) => {
  let output = [];
  let i = 0,
    j = 0;
  if (arr[i] <= brr[j]) {
    output.push(arr[i]);
    i++;
  } else {
    output.push(brr[j]);
    j++;
  }

  while (i != arr.length && j != brr.length) {
    if (arr[i] < brr[j]) {
      if (output[output.length - 1] !== arr[i]) {
        output.push(arr[i]);
      }
      i++;
    } else if (arr[i] > brr[j]) {
      if (output[output.length - 1] !== brr[j]) {
        output.push(brr[j]);
      }
      j++;
    } else {
      if (output[output.length - 1] !== brr[j]) {
        output.push(brr[j]);
      }
      i++;
      j++;
    }
  }
  if (i == arr.length) {
    for (let m = j; m < brr.length; m++) {
      if (output[output.length - 1] !== brr[m]) {
        output.push(brr[m]);
      }
    }
  } else if (j == brr.length) {
    for (let m = j; m < arr.length; m++) {
      if (output[output.length - 1] !== arr[m]) {
        output.push(arr[m]);
      }
    }
  }
  return output;
};
console.log(unionOfTwoSortedArray([1], [2, 3, 4, 4, 5, 6, 6, 8]));
