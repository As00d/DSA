// 1390. Four Divisors

const sumIfFour = (num) => {
  let i = 1,
    count = 0,
    sum = 0;
  while (i <= num) {
    if (num % i === 0) {
      count++;
      console.log(num, i);
      sum += i;
    }
    if (count > 4) {
      break;
    }
    i++;
  }
  if (count == 4) {
    return sum;
  } else {
    return 0;
  }
};
var sumFourDivisors = function (nums) {
  let finalOutput = 0;
  for (let i = 0; i < nums.length; i++) {
    finalOutput += sumIfFour(nums[i]);
  }
  return finalOutput;
};

console.log(sumFourDivisors([21, 26, 27]));
