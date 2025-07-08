var mergeAlternately = function (word1, word2) {
  let lengthWord1 = word1.length;
  let lengthWord2 = word2.length;

  let shorterLength = lengthWord1 > lengthWord2 ? lengthWord2 : lengthWord1;
  let s = "";
  for (let i = 0; i < shorterLength; i++) {
    s += word1[i];
    s += word2[i];
  }

  for (let i = shorterLength; i < lengthWord1; i++) {
    s += word1[i];
  }
  for (let i = shorterLength; i < lengthWord2; i++) {
    s += word2[i];
  }

  return s;
};

console.log(mergeAlternately("anki", "banni"));
