// Pattern 27
//    1
//   212
//  32123
// 4321234

let line = "";
let k = 1;
let m = k;
for (let i = 1; i <= 4; i++) {
  k = m++;
  for (let j = 1; j <= 7; j++) {
    if (j >= 5 - i && j <= 3 + i) {
      line += k;
      if (j >= 4) {
        k++;
      } else {
        k--;
      }
    } else line += " ";
  }
  line += "\n";
}
console.log(line);
