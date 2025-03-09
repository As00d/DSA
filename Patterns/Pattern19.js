// Pattern 19
// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// *********

let line = "";
let k = 9;
for (let i = 1; i <= 9; i++) {
  i >= 6 ? k-- : null;
  for (let j = 1; j <= 9; j++) {
    if (i <= 5) {
      if (j <= 6 - i || j >= 4 + i) {
        line += "*";
      } else {
        line += " ";
      }
    } else {
      if (j <= i - 4 || j >= k) {
        line += "*";
      } else {
        line += " ";
      }
    }
  }
  line += "\n";
}
console.log(line);
