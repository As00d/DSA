const leftRotateByOnePlace = (arr) => {
  let firstElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = firstElement;

  return arr;
};

console.log(leftRotateByOnePlace([8, 3, 4, 5, 3, 2]));
