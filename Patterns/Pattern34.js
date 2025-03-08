// Pattern 34
// 0
// 01
// 024
// 0369
// 0481216
let line = "";
let k = 0;
for (let i = 1; i <= 5; i++) {
  k = 0;
  for (let j = 1; j <= 5; j++) {
    if (j <= i) {
      line += k;
      k = k + i - 1;
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
