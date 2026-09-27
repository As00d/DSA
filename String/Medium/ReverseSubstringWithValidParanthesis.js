// 1190. Reverse Substrings Between Each Pair of Parentheses
var reverseParentheses = function (s) {
  let arr = [],
    temp = "";
  for (let i = 0; i < s.length; i++) {
    temp = "";
    arr.push(s[i]);
    if (arr[arr.length - 1] == ")") {
      let j = arr.length - 1;
      j--;
      arr.pop();
      while (arr[j] != "(") {
        temp += arr[j];
        arr.pop();
        j--;
      }
      arr.pop();
      console.log(temp);
      console.log(arr);

      // Now we need to put the string back in array
      for (let i = 0; i < temp.length; i++) {
        arr.push(temp[i]);
      }
    }
  }
  return arr.join("");
};
reverseParentheses("(ed(et(oc))el)");
