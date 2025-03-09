// Pattern 25
//    0
//   121
//  23432
// 3456543
//  23432
//   121
//    0

let line = "";
let k = 7,
  m = -1;
for (let i = 1; i <= 7; i++) {
  i >= 5 ? k-- : null;
  i >= 5 ? (m = m - 2) : null;
  for (let j = 1; j <= 7; j++) {
    if (i <= 4) {
      if (j >= 5 - i && j <= 3 + i) {
        if (j > 4) {
          m--;
        } else {
          m++;
        }
        line += m;
      } else {
        line += " ";
      }
    } else {
      if (j >= i - 3 && j <= k) {
        if (j > 4) {
          m--;
        } else {
          m++;
        }
        line += m;
      } else {
        line += " ";
      }
    }
  }
  line += "\n";
}

console.log(line);
