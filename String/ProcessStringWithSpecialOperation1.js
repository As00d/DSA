var processStr = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      result += s[i];
    } else if (s[i] === "*") {
      let val = result.split("");
      val.pop();
      val = val.join("");
      result = val;
    } else if (s[i] === "#") {
      result += result;
    } else {
      result = result.split("").reverse().join("");
    }
  }
};

processStr("a#b%*");
