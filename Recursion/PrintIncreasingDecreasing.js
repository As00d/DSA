//  Problem : Given a number n print all the numbers till 1 and then increase for eg for 5 print 5 4 3 2 1 1 2 3 4 5

function printIncreasingDecreasing(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  printIncreasingDecreasing(n - 1);
  console.log(n);
}

printIncreasingDecreasing(5);
