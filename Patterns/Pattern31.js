// Pattern 31

//     1
//    A B
//   1 2 3
//  A B C D

let line = "";
let k = 1,
  m = 65;
for (let i = 1; i <= 4; i++) {
  k = 1;
  m = 65;
  for (let j = 1; j <= 7; j++) {
    if (j >= 5 - i && j <= 3 + i) {
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          line += " ";
        } else {
          line += String.fromCharCode(m);
          m++;
        }
      } else {
        if (j % 2 != 0) {
          line += " ";
        } else {
          line += k;
          k++;
        }
      }
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
