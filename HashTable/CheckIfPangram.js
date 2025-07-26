var checkIfPangram = function (sentence) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < sentence.length; i++) {
    arr[sentence.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < 26; i++) {
    if (arr[i] < 1) {
      return false;
    }
  }
  return true;
};

checkIfPangram("thequickbrownfoxjumpsoverthelazydog");
