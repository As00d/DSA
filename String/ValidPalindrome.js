var isPalindrome = function (s) {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s.charCodeAt(i) >= "65" && s.charCodeAt(i) <= "90") ||
      (s.charCodeAt(i) >= "97" && s.charCodeAt(i) <= "122") ||
      (s.charCodeAt(i) >= "48" && s.charCodeAt(i) <= "57")
    ) {
      out += s[i];
    }
  }

  let toLowerCaseString = out.toLowerCase();
  const reversedString = toLowerCaseString.split("").reverse().join("");
  console.log(toLowerCaseString);
  console.log(reversedString);
  if (toLowerCaseString === reversedString) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("0P"));
