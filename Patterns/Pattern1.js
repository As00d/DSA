// Pattern 1
// * * * *
// * * * *
// * * * *
// * * * *
let line = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    line += "* ";
  }
  line += "\n";
}

console.log(line);
