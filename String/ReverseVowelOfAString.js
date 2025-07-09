var reverseVowels = function(s) {
    let listOfVowels ='';
    for(let i=0;i<s.length;i++) {
        if(s[i]=='a' || s[i]=='A' || s[i]=='e' || s[i]=='E' || s[i]=='i' || s[i]=='I'  || s[i]=='o' || s[i]=='O'  || s[i]=='u' || s[i]=='U') {
            listOfVowels+=s[i];
        }
    }
    let reverseOrder = listOfVowels.split('').reverse().join('');
    let j=0;
    let newString='';
    for(let i=0;i<s.length;i++) {
        if(s[i]=='a' || s[i]=='A' || s[i]=='e' || s[i]=='E' || s[i]=='i' || s[i]=='I'  || s[i]=='o' || s[i]=='O'  || s[i]=='u' || s[i]=='U') {
           newString+= reverseOrder[j];
           j++
        } else {
            newString+=s[i]
        }
    }

    return newString;
};

console.log(reverseVowels("IceCreAm"));

