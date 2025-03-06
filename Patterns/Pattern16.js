// Pattern 16
//         1
//        12
//       123
//      1234
//     12345
//      1234
//       123
//        12
//         1

let line = "";
let k;
for (let i = 1; i <= 9; i++) {
  k = 1;
  for (let j = 1; j <= 5; j++) {
    if (i <= 5) {
      if (j >= 6 - i) {
        line += k;
        k++;
      } else {
        line += " ";
      }
    } else {
      if (j >= i - 4) {
        line += k;
        k++;
      } else {
        line += " ";
      }
    }
  }
  line += "\n";
}
console.log(line);
