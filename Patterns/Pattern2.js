//Pattern2
// *
// * *
// * * *
// * * * *
// * * * * *

let line = "";
for (let i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    if (j <= i) {
      line += "* ";
    } else {
      line += " ";
    }
  }
  line += "\n";
}
console.log(line);
