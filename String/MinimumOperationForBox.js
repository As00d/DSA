var minOperations = function (boxes) {
  let output = [];
  for (let i = 0; i < boxes.length; i++) {
    let sum = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] == "1" && i !== j) {
        sum += Math.abs(j - i);
      }
    }
    output.push(sum);
  }
  console.log(output);
};
minOperations("001011");
