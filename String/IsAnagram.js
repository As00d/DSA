var isAnagram = function(s, t) {
    let sortedOne = s.split('').sort().join('');
    let sortedTwo =  t.split('').sort().join('');

    if(sortedOne === sortedTwo) {
        return true;
    } else {
        return false;
    }
};

isAnagram("anagram", "nagaram");