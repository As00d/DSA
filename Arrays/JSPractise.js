// array methods
// push - adds an element to the array end and return the new length of the array
const friends = ["albin", "namya", "ragav", "vineeth", "namya"];
const value = friends.push("anki");
console.log(value);
console.log(friends);

// unshift - adds an element to the array start and return the new length of the array
const newFriend = friends.unshift("bni");
console.log(newFriend);
console.log(friends);

// pop - remove element from the array and return the popped element;
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift - remove element from the array from the start and return the popped element

const startElem = friends.shift();
console.log(startElem);
console.log(friends);

// indexOf - this method returns the index of first occurrence of the element else returns -1
console.log(friends.indexOf("namya"));

// includes - which return true or false based on if there in array or not
const isAnkiAFriend = friends.includes("anki");

console.log(isAnkiAFriend);
