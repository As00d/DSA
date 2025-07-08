var gcdOfStrings = function (str1, str2) {
  // check if output exists or not
  if (str1 + str2 === str2 + str1) {
    let lengthOfString1 = str1.length;
    let lengthOfString2 = str2.length;

    const gcd = gcdOfTwoNumber(lengthOfString1, lengthOfString2);
    return str1.slice(0, gcd);
  } else {
    return "";
  }
};

function gcdOfTwoNumber(num1, num2) {
  let smallNumber = num1 > num2 ? num2 : num1;
  console.log(smallNumber);
  for (let i = smallNumber; i >= 1; i--) {
    if (num1 % i == 0 && num2 % i == 0) {
      return i;
    }
  }
  return 1;
}

console.log(gcdOfStrings("ABABAB", "ABAB"));
