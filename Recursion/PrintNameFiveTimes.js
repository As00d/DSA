// Print name 5 times

const printName = (name, n, c) => {
  if (c == n) {
    return;
  }
  console.log(name);
  printName(name, n, c + 1);
};

printName("anki", 6, 0);

// Print N to 1
const printNtoOne = (n) => {
  if (n <= 1) {
    return;
  }
  console.log(n);
  printNtoOne(n - 1);
};
printNtoOne(9);

// Print 1 to N

const printOneToN = (n) => {
  if (n == 0) {
    return;
  }
  printOneToN(n - 1);
  console.log(n);
};

printOneToN(8);
