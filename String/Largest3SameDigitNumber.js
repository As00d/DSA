var largestGoodInteger = function (num) {
  let potentialOutput = [];
  for (let i = 0; i < num.length - 2; i++) {
    if (
      Number(num[i]) === Number(num[i + 1]) &&
      Number(num[i + 1]) === Number(num[i + 2])
    ) {
      potentialOutput.push(num[i] + num[i] + num[i]);
    }
  }
  let finalOutput = "";
  for (let i = 0; i < potentialOutput.length; i++) {
    let word = potentialOutput[i];
    if (finalOutput <= Number(potentialOutput[i]))
      finalOutput = potentialOutput[i];
  }

  if (!potentialOutput) {
    return "";
  } else {
    return String(finalOutput);
  }
};

largestGoodInteger("6777133339");
