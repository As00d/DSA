// Problem - Print GFG n times without the loop.

function printName(n) {
  if (n == 0) {
    return;
  }
  console.log("anki");
  printName(n - 1);
}

printName(5);
