// 1291. Sequential Digits

var sequentialDigits = function (low, high) {
  let final = [];
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  while (arr.length != 0) {
    if (arr[0] >= low && arr[0] <= high) {
      final.push(arr[0]);
    }
    let lastDigit = arr[0] % 10;
    let newDigit = 1;
    if (lastDigit === 9) {
      arr.shift();
      continue;
    } else {
      newDigit = arr[0] * 10 + (lastDigit + 1);
      console.log(newDigit);
      if (newDigit <= high) {
        arr.push(newDigit);
      }
    }
    arr.shift();
  }
  return final;
};
console.log(sequentialDigits(1000, 13000));
