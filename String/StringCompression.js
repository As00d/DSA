var compress = function (chars) {
  let output = "",
    c = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == chars[i + 1]) {
      c++;
    } else {
      output += chars[i];
      if (c != 1) {
        output += c;
      }
      c = 1;
    }
  }
  for (let i = 0; i < output.length; i++) {
    chars[i] = output[i];
  }

  return output.length;
};

compress(["a", "b", "c", "c", "d", "d", "d"]);
