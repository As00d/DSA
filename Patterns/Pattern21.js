// Pattern 21
//    *****
//   *****
//  *****
// *****

let line = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 8; j++) {
    if (j >= 5 - i && j <= 9 - i) line += "*";
    else line += " ";
  }
  line += "\n";
}

console.log(line);
