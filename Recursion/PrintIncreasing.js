//  Problem : Given a number n print all the numbers till 1 for eg for 5 print 5 4 3 2 1

function printIncreasing(n) {
  if (n == 0) {
    return;
  }
  printIncreasing(n - 1);
  console.log(n);
}

printIncreasing(5);
