// 383. Ransom Note
var canConstruct = function (ransomNote, magazine) {
  let ransomeNoteArray = Array(26).fill(0);
  let magazineArray = Array(26).fill(0);
  for (let i = 0; i < ransomNote.length; i++) {
    ransomeNoteArray[ransomNote.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    magazineArray[magazine.charCodeAt(i) - 97] += 1;
  }

  for (let i = 0; i < 26; i++) {
    if (ransomeNoteArray[i] > magazineArray[i]) return false;
  }

  return true;
};

console.log(canConstruct("aa", "aba"));
