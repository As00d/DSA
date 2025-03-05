//Pattern 7
//
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

let line = "";
for (let i = 1; i <= 5; i++) {
  let k = 1;
  for (let j = 1; j <= 9; j++) {
    if (j >= 6 - i && j <= 4 + i && k) {
      line += "*";
      k = 0;
    } else {
      line += " ";
      k = 1;
    }
  }
  line += "\n";
}

console.log(line);
