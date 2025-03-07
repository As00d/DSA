// Pattern 29
//     A
//    CB
//   FED
//  JIHG
// ONMLK

let line = "";
let k = 64;
let m;
for (let i = 1; i <= 5; i++) {
  m = k + i;
  k = m;
  for (let j = 1; j <= 5; j++) {
    if (j >= 6 - i) {
      line += String.fromCharCode(m);
      m--;
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
