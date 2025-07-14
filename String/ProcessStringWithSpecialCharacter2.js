var processStr = function (s, k) {
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
  if (k >= result.length) return ".";
  return result[k];
};
console.log(
  processStr(
    "nr#x#gva#jq%yqi%##f###i#u#%##wynnck#reh%u#gv###g#xufhis%l#ng##o%%##v#qt%i",
    415249132440988
  )
);
