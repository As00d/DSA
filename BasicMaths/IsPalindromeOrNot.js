function isPalindrome(n) {
  let originalNumber = n;
  if (n < 0) {
    return false;
  } else {
    let reverseNumber = 0;
    let lastDigit = 0;
    while (n > 0) {
      lastDigit = n % 10;
      reverseNumber = reverseNumber * 10 + lastDigit;

      n = Math.trunc(n / 10);
    }

    console.log(reverseNumber);
    return reverseNumber === originalNumber ? true : false;
  }
}

const n = isPalindrome(1234321);
console.log(n);
