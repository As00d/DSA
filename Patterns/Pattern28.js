// Pattern 28
//   1
//   3*2
//   4*5*6
//   10*9*8*7
//   11*12*13*14*15

let line = "";
let k = 1;
let m = 0;
for (let i = 1; i <= 5; i++) {
  m = k + i - 1;
  for (let j = 1; j <= 9; j++) {
    if (j <= 2 * i - 1) {
      if (j % 2 == 0) {
        line += "*";
      } else {
        if (i % 2 == 0) {
          line += m;
          m--;
        } else {
          line += k;
        }
        k++;
      }
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
