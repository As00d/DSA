var reverseVowels = function (s) {
  let listOfVowels = "";
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "A" ||
      s[i] == "e" ||
      s[i] == "E" ||
      s[i] == "i" ||
      s[i] == "I" ||
      s[i] == "o" ||
      s[i] == "O" ||
      s[i] == "u" ||
      s[i] == "U"
    ) {
      listOfVowels += s[i];
    }
  }
  let reverseOrder = listOfVowels.split("").reverse().join("");
  let j = 0;
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "A" ||
      s[i] == "e" ||
      s[i] == "E" ||
      s[i] == "i" ||
      s[i] == "I" ||
      s[i] == "o" ||
      s[i] == "O" ||
      s[i] == "u" ||
      s[i] == "U"
    ) {
      newString += reverseOrder[j];
      j++;
    } else {
      newString += s[i];
    }
  }

  return newString;
};

console.log(reverseVowels("IceCreAm"));

// Two pointer approach to reverse vowel in a string
const isVowel = (char) => {
  return "aeiouAEIOU".includes(char);
};
const reverseVowelsInAString = (str) => {
  let arr = str.split("");
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (isVowel(arr[i]) && isVowel(arr[j])) {
      console.log(arr[i], arr[j]);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    } else if (!isVowel(arr[i])) {
      i++;
    } else if (!isVowel(arr[j])) {
      j--;
    }
  }
  return arr.join("");
};

console.log(reverseVowelsInAString("leetcode"));
