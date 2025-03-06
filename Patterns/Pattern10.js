// Pattern 10
//
// A B C D C B A
// A B C   C B A
// A B       B A
// A           A

let line = "";
for (let i = 1; i <= 4; i++) {
  let k = 65;
  for (let j = 1; j <= 7; j++) {
    if (j <= 5 - i || j >= 3 + i) {
      line += String.fromCharCode(k);
    } else {
      line += " ";
    }
    if (j < 4) k++;
    else k--;
  }
  line += "\n";
}

console.log(line);
