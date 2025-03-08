// Pattern 30
//        *
//       **
//      ***
//      1**
//   *  1 *
//   ** 1
//   ***
//   **
//   *

let line = "";
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i < 5) {
      if (j >= 6 - i) {
        if (i >= 3) {
          if (j == 3 && i == 4) {
            line += "|";
          } else if (j >= i) line += "*";
          else line += " ";
        } else {
          line += "*";
        }
      } else {
        line += " ";
      }
    }
    if (i == 5) {
      if (j == 1 || j == 5) {
        line += "*";
      } else if (j == 3) {
        line += "|";
      } else {
        line += " ";
      }
    }
    if (i > 5) {
      if (j <= i - 4) {
        if (i >= 8) {
          if (j <= 10 - i) {
            line += "*";
          } else {
            line += " ";
          }
        } else {
          line += "*";
        }
      }
      if (i == 6 && j == 3) {
        line += "|";
      }
    }
  }
  line += "\n";
}
console.log(line);
