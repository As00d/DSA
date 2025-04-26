const maxOnes = (arr) => {
  let c = 1,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      max = 1;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i] && arr[i] == 1) {
      c++;
      if (max < c) {
        max = c;
      }
    } else {
      c = 1;
    }
  }
  return max;
};

console.log(maxOnes([1, 0, 1, 1, 0, 1]));
