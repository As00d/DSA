//  Problem : Given a number n print all the numbers till 1 for eg for 5 print 5 4 3 2 1

function printDecreasing(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  printDecreasing(n - 1);
}

printDecreasing(5);
