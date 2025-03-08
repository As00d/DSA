// Pattern 18
//      \*****/
//      *\***/*
//      **\*/**
//      ***\***
//      **/*\**
//      */***\*
//      /*****\
let line = "";
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 7; j++) {
    if (j == i) {
      line += "\\";
    } else if (j == 8 - i) {
      line += "/";
    } else {
      line += "*";
    }
  }
  line += "\n";
}
console.log(line);
