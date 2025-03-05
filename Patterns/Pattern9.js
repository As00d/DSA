//Pattern 9
//
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1

let line = "";
for (let i = 1; i <= 4; i++) {
  let k = 1;
  for (let j = 1; j <= 7; j++) {
    if (j >= 5 - i && j <= 3 + i) {
      line += k;
      if (j >= 4) {
        k--;
      } else {
        k++;
      }
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
