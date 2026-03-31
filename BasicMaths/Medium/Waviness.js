// 3751. Total Waviness of Numbers in Range I
var totalWaviness = function (num1, num2) {
  let wavy = 0;
  for (let i = num1; i <= num2; i++) {
    let arr = String(i).split("");
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[j] > arr[j - 1] && arr[j] > arr[j + 1]) {
        wavy++;
      }
      if (arr[j] < arr[j - 1] && arr[j] < arr[j + 1]) {
        wavy++;
      }
    }
  }
  return wavy;
};
