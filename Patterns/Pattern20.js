// Pattern 20
//    A1
//   AB12
//  ABC123
// ABCD1234

let line = "";
let k = 65,
  l = 1;
for (let i = 1; i <= 4; i++) {
  k = 65;
  l = 1;
  for (let j = 1; j <= 8; j++) {
    if (j >= 5 - i && j <= 4 + i) {
      if (j <= 4) {
        line += String.fromCharCode(k);
        k++;
      } else {
        line += l;
        l++;
      }
    } else {
      line += " ";
    }
  }
  line += "\n";
}

console.log(line);
