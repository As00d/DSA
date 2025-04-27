// Given an array with only 3 values 1,2,3 now you need to sort the array

// brute solution - Time -> O(nlogn) Space O(1)
const sortArrayBrute = (arr) => {
  return arr.sort((a, b) => a - b);
};

// better solution - Time ->  O(n) + O(n) = O(2n) Space O(1)
const sortArrayBetter = (arr) => {
  let c0 = 0,
    c1 = 0,
    c2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      c0++;
    } else if (arr[i] === 1) {
      c1++;
    } else {
      c2++;
    }
  }

  for (let i = 0; i < c0; i++) {
    arr[i] = 0;
  }
  for (let i = c0; i < c0 + c1; i++) {
    arr[i] = 1;
  }
  for (let i = c0 + c1; i < c0 + c1 + c2; i++) {
    arr[i] = 2;
  }
  return arr;
};

// Optimal solution Time complexity O(n) Space complexity O(1)

console.log(sortArrayBetter([1, 1, 0, 0, 1, 2, 2]));
