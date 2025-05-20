var mostWordsFound = function (sentences) {
  let count = 0;

  for (let i = 0; i < sentences.length; i++) {
    let number = sentences[i].split(" ").length;
    if (number > count) {
      count = number;
    }
  }
  return count;
};

mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
