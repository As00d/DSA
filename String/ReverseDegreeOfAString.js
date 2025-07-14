var reverseDegree = function(s) {
    let arr = [], output =0;
    for(let i=0;i<26;i++) {
        arr.push(26 - i);
    }
    let sum =0;
    for(let i=0;i<s.length;i++) {
      let val = arr[s.charCodeAt(i) - 97 ] * (i+1);
      sum +=val;
    }
    return sum;
};

reverseDegree("zaza");