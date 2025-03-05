// Pattern 3
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let line = "";
for (let i = 1; i <= 4; i++) {
  for (j = 1; j <= 4; j++) {
    if (j >= 5 - i) {
      line += "*";
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
