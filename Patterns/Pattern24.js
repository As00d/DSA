// Pattern 24
// * * * * * * *
// *           *
// *   * * *   *
// *   *   *   *
// *   * * *   *
// *           *
// * * * * * * *

let line = "";

for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 7; j++) {
    if (
      i == 1 ||
      j == 1 ||
      j == 7 ||
      i == 7 ||
      (i >= 3 && i <= 5 && j >= 3 && j <= 5 && (i != 4 || j != 4))
    ) {
      line += "*";
    } else {
      line += " ";
    }
  }
  line += "\n";
}

console.log(line);
