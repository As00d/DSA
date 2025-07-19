var arrayStringsAreEqual = function (word1, word2) {
  let str1 = word1.join("");
  let str2 = word2.join("");

  if (str1 === str2) return true;

  return false;
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
