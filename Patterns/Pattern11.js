// Pattern 11
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

let line = "";
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 7; j++) {
    if (i <= 4) {
      if (j >= 5 - i && j <= 3 + i) {
        line += "*";
      } else {
        line += " ";
      }
    } else {
      if (j >= i - 3 && j <= 11 - i) {
        line += "*";
      } else {
        line += " ";
      }
    }
  }
  line += "\n";
}

console.log(line);
