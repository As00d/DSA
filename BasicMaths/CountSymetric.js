// 2843. Count Symmetric Integers
var countSymmetricIntegers = function (low, high) {
  let finalOutput = 0;
  for (let i = low; i <= high; i++) {
    let length = 0,
      numberProc = i,
      numFin = i;
    while (numberProc > 0) {
      length++;
      numberProc = Math.trunc(numberProc / 10);
    }
    if (length % 2 === 0) {
      let halfLength = length / 2,
        suma = 0,
        sumb = 0,
        c = 1;
      while (numFin > 0) {
        if (c <= halfLength) {
          suma = suma + (numFin % 10);
        } else {
          sumb = sumb + (numFin % 10);
        }
        numFin = Math.trunc(numFin / 10);
        c++;
      }
      if (suma === sumb) {
        finalOutput++;
      }
    }
  }
  return finalOutput;
};
