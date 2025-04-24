const highestLowestFrequency = (arr) => {
  const hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.get(arr[i])) {
      hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
    } else {
      hashMap.set(arr[i], 1);
    }
  }
  let min = Number.POSITIVE_INFINITY,
    max = Number.NEGATIVE_INFINITY,
    minValue,
    maxValue;
  for (let [key, value] of hashMap) {
    if (value > max) {
      max = value;
      maxValue = key;
    }
    if (value < min) {
      min = value;
      minValue = key;
    }
  }
  return [maxValue, minValue];
};

console.log(highestLowestFrequency([2, 2, 3, 4, 4, 2]));
