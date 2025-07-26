var countCharacters = function (words, chars) {
  let arr = new Array(26).fill(0);

  for (let i = 0; i < chars.length; i++) {
    arr[chars.charCodeAt(i) - 97] += 1;
  }
  let out = 0;
  for (let i = 0; i < words.length; i++) {
    let brr = new Array(26).fill(0);
    let word = words[i];
    let ans = true;

    for (let j = 0; j < word.length; j++) {
      brr[word.charCodeAt(j) - 97] += 1;
    }
    for (let k = 0; k < 26; k++) {
      if (arr[k] < brr[k]) {
        ans = false;
      }
    }
    if (ans) {
      out += word.length;
    }
  }

  return out;
};
