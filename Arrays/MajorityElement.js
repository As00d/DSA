// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const Majority = (arr) => {
  let candidate = arr[0];
  let c = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == candidate) {
      c++;
    } else if (c > 1) {
      c--;
    } else {
      candidate = arr[i];
      c = 1;
    }
  }
  return candidate;
};

console.log(Majority([2, 2, 1, 1, 1, 2, 2]));
