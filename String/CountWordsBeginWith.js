var prefixCount = function (words, pref) {
  let c = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      c++;
    }
  }
  console.log(c);
  return c;
};

prefixCount(["pay", "attention", "practice", "attend"], "at");
