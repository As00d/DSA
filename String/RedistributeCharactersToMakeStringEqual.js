// 1897. Redistribute Characters to Make All Strings Equal
var makeEqual = function (words) {
  if (words.length == 1) {
    return true;
  }
  let arr = new Array(26).fill(0);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    for (let i = 0; i < word.length; i++) {
      arr[word.charCodeAt(i) - 97] += 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      if (arr[i] % words.length !== 0) {
        return false;
      }
    }
  }
  return true;
};
console.log(
  makeEqual([
    "caaaaa",
    "aaaaaaaaa",
    "a",
    "bbb",
    "bbbbbbbbb",
    "bbb",
    "cc",
    "cccccccccccc",
    "ccccccc",
    "ccccccc",
    "cc",
    "cccc",
    "c",
    "cccccccc",
    "c",
  ])
);
