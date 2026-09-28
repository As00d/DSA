// 1614. Maximum Nesting Depth of the Parentheses
var maxDepth = function (s) {
  let stk = [],
    c = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      c++;
      if (c > max) {
        max = c;
      }
      stk.push(s[i]);
    } else if (s[i] == ")") {
      c--;
      let j = stk.length - 1;
      while (stk[j] != "(") {
        stk.pop();
        j--;
      }
      stk.pop();
    } else {
      stk.push(s[i]);
    }
  }
  return max;
};
console.log(maxDepth("()(())((()()))"));
