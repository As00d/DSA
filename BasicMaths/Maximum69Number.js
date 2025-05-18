var maximum69Number = function (num) {
  let n = String(num);
  let o = "",
    c = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === "6" && c == 0) {
      o += "9";
      c++;
    } else if (n[i] == "6") {
      o += "6";
    } else {
      o += "9";
    }
  }
  return Number(o);
};

console.log(maximum69Number(9669));
