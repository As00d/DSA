var maxFreqSum = function(s) {
    let maxVowel = 0, maxConst = 0;
    let arr = new Array(26).fill(0);
    for(let i=0;i<s.length;i++) {
        arr[s.charCodeAt(i)-97] +=1;
    }
    for(let i=0;i<26;i++) {
        if(i==0 || i==4 || i==8 || i==14 || i==20) {
            if(maxVowel < arr[i]) {
                maxVowel = arr[i];
            }
        } else {
            if(maxConst < arr[i]) {
                maxConst = arr[i];
            }
        }
    }
    return maxVowel + maxConst;
    
};

maxFreqSum("successes");
