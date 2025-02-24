let arr = [13, 46, 24, 52, 20, 9, 45, 23, 12, 33];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const sortedArray = selectionSort(arr);
console.log(sortedArray);
