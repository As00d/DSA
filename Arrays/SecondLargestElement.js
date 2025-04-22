const secondLargestElement = (arr) => {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      largest = arr[i];
    }
  }

  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargestElement([1, 1, 1, 1, 1]));
