// Pattern 23
// 1
// 10
// 101
// 1010
// 10101
// 101010

let line = "";
let k = 1;
for (let i = 1; i <= 6; i++) {
  k = 1;
  for (let j = 1; j <= 6; j++) {
    if (j <= i) {
      line += k;
      if (k == 1) {
        k = 0;
      } else {
        k = 1;
      }
    }
  }
  line += "\n";
}

console.log(line);
