var minimumBoxes = function (apple, capacity) {
  let appleSum = 0;
  for (let i = 0; i < apple.length; i++) {
    appleSum += apple[i];
  }

  capacity.sort((a, b) => b - a);
  let i = 0,
    num = 0;
  while (appleSum > num) {
    num += capacity[i];
    i++;
  }
  console.log(i);
  return i;
};

minimumBoxes([1, 1, 1, 1], [2, 4, 2, 7]);
