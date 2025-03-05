//Pattern 6
//
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

let line = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 9; j++) {
    if (j >= 6 - i && j <= 4 + i) {
      line += "*";
    } else {
      line += " ";
    }
  }
  line += "\n";
}

console.log(line);
