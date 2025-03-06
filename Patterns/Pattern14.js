// Pattern 14
//
//    1
//   232
//  34543
// 4567654

let line = "";
let k = 0;
for (let i = 1; i <= 4; i++) {
  k = i;
  for (let j = 1; j <= 7; j++) {
    if (j >= 5 - i && j <= 3 + i) {
      line += k;
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
