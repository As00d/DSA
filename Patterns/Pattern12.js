// Pattern 12
//
// *
// **
// ***
// ****
// ***
// **
// *

let line = "";
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 4; j++) {
    if (i <= 4) {
      if (j <= i) {
        line += "*";
      } else {
        line += " ";
      }
    } else {
      if (j <= 8 - i) {
        line += "*";
      } else {
        line += " ";
      }
    }
  }
  line += "\n";
}
console.log(line);
