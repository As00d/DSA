// Pattern 5
//
// * * * * *
// * * * *
// * * *
// * *
// *

let line = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j <= 6 - i) {
      line += "* ";
    } else {
      line += "";
    }
  }
  line += "\n";
}

console.log(line);
