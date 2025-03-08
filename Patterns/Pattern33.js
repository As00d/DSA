// Pattern 33
// ABCDEFG
// ABC EFG
// AB   FG
// A     G
let line = "";
let k = 65;
for (let i = 1; i <= 4; i++) {
  k = 65;
  for (let j = 1; j <= 7; j++) {
    if (j <= 5 - i || j >= 3 + i) {
      line += String.fromCharCode(k);
    } else {
      line += " ";
    }
    k++;
  }
  line += "\n";
}
console.log(line);
