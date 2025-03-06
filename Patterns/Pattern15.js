// Pattern 15
//
//   6543210
//   543210
//   43210
//   3210
//   210
//   10
//   0

let line = "";
let k = 0;
for (let i = 1; i <= 7; i++) {
  k = i;
  for (let j = 1; j <= 7; j++) {
    if (j <= 8 - i) {
      line += 7 - k;
      k++;
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
