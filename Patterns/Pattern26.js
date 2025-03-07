// Pattern 26
// A
// BA
// CBA
// DCBA

let line = "";
let k = 64;
let m = 65;
for (let i = 1; i <= 4; i++) {
  m = ++k;
  for (let j = 1; j <= 4; j++) {
    if (j <= i) {
      line += String.fromCharCode(m);
      m--;
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
