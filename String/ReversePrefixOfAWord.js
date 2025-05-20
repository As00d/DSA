var reversePrefix = function (word, ch) {
  let newReverse = "";
  let counter = 0,
    flag = false;
  for (let i = 0; i < word.length; i++) {
    newReverse += word[i];
    counter = i + 1;
    if (word[i] === ch) {
      flag = true;
      break;
    }
  }
  console.log(newReverse);
  let reverse = newReverse.split("").reverse().join("");

  let out = "";
  out += reverse;
  for (let i = counter; i < word.length; i++) {
    out += word[i];
  }
  if (flag) return out;
  else return word;
};
