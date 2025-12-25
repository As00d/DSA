// 3075. Maximize Happiness of Selected Children
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => a - b);
  let happinessLength = happiness.length - 1;
  let position = 0,
    sum = 0;
  for (let i = happinessLength; i > happinessLength - k; i--) {
    if (happiness[i] - position > 0) {
      happiness[i] = happiness[i] - position;
      sum += happiness[i];
      position += 1;
    }
  }
  return sum;
};

maximumHappinessSum([2, 3, 4, 5], 1);
