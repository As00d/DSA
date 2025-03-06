// Pattern 17
//         A
//        ABA
//       ABCBA
//      ABCDCBA

let line = "";
let k = 65;
for (let i = 1; i <= 4; i++) {
  k = 65;
  for (let j = 1; j <= 7; j++) {
    if (j >= 5 - i && j <= 3 + i) {
      line += String.fromCharCode(k);
      if (j < 4) {
        k++;
      } else {
        k--;
      }
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
