// Basic introduction to map

const myMap = new Map();
myMap.set("bni", 25);
myMap.set("anki", 24);

console.log(myMap.get("anki"));

// Setting map to get the frequency

const hashMap = new Map();
const arr = [1, 2, 3, 4, 2, 4, 1];
for (let i = 0; i < arr.length; i++) {
  if (hashMap.get(arr[i])) {
    hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
  } else {
    hashMap.set(arr[i], 1);
  }
}

//Setting Map to calculate character frequency

const charMap = new Map();
const brr = "adscewqdaooiwdjiqq";
for (let i = 0; i < brr.length; i++) {
  if (charMap.get(brr[i])) {
    charMap.set(brr[i], charMap.get(brr[i]) + 1);
  } else {
    charMap.set(brr[i], 1);
  }
}
for (let [key, val] of charMap) {
  console.log(key, val);
}
