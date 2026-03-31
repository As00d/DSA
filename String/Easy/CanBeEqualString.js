// 2839. Check if Strings Can be Made Equal With Operations I
var canBeEqual = function (s1, s2) {
  let flag1 = false,
    flag2 = false;
  if (
    s1[0] === s2[0] &&
    s1[1] === s2[1] &&
    s1[2] === s2[2] &&
    s1[3] === s2[3]
  ) {
    return true;
  }
  if (s1[0] != s2[0]) {
    if (s1[2] === s2[0] && s1[0] === s2[2]) {
      flag1 = true;
    }
  }
  if (s1[0] == s2[0] && s2[2] == s1[2]) {
    flag1 = true;
  }

  if (s1[1] != s2[1]) {
    if (s1[1] === s2[3] && s1[3] === s2[1]) {
      flag2 = true;
    }
  }
  if (s1[1] == s2[1] && s1[3] == s2[3]) {
    flag2 = true;
  }
  if (flag1 && flag2) {
    return true;
  } else {
    return false;
  }
};
