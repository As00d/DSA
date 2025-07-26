var findTheDifference = function (s, t) {
  let arr = new Array(26).fill(0);
  let brr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    brr[t.charCodeAt(i) - 97] += 1;
  }

  for (let i = 0; i < 26; i++) {
    if (arr[i] !== brr[i]) {
      return String.fromCharCode(i + 97);
    }
  }
};

findTheDifference("abcd", "abcde");
