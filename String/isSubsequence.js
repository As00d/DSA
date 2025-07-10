// Note: Important question with good test cases to handle
var isSubsequence = function(s, t) {
    if(s.length ==0) {
        return true;
    }
    if(t.length ==0 && s.length > 0) {
        return false;
    }
    let i=0,j=0;
    let mark = false;
    while(i!=s.length && j!=t.length) {
        if(s[i]!==t[j]) {
            j++;
        } else {
            if(i==s.length-1) {
            if(s[s.length-1] == t[j]) {
                mark =true;
            }
            }
            i++;
            j++;
        }
    }
    return mark;
};