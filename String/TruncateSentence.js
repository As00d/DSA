var truncateSentence = function(s, k) {
     let newString = s.split(' ');
    console.log(newString)
    let newArr = [];
    for(let i=0;i<k;i++) {
        newArr.push(newString[i]);
    }
    let str = newArr.join(' ');
    return str;
};