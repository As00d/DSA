// 1304. Find N Unique Integers Sum up to Zero
var sumZero = function (n) {
  let arr = [],
    c = 1;
  if (n % 2 == 0) {
    let v = Math.trunc(n / 2);
    while (v > 0) {
      arr.push(c);
      arr.push(-c);
      c++;
      v--;
    }
  } else {
    let v = Math.trunc(n / 2);
    while (v > 0) {
      arr.push(c);
      arr.push(-c);
      c++;
      v--;
    }
    arr.push(0);
  }
  console.log(arr);
};
sumZero(8);
