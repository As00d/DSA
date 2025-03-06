// Pattern 13
//
// *******
//  *****
//   ***
//    *

let line = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 7; j++) {
    if (j >= i && j <= 8 - i) {
      line += "*";
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
