// Pattern 21
//    1
//   12A
//  123AB
// 1234ABC

let line = "";
let k = 1;
let m = 65;
for (let i = 1; i <= 4; i++) {
  k = 1;
  m = 65;
  for (let j = 1; j <= 7; j++) {
    if (j >= 5 - i && j <= 3 + i) {
      if (j <= 4) {
        line += k;
        k++;
      } else {
        line += String.fromCharCode(m);
        m++;
      }
    } else line += " ";
  }
  line += "\n";
}

console.log(line);
