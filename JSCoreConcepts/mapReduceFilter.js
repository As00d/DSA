// Map function - which is used to transform the array elements
const arr = [1, 3, 0, 5, 6, 2];

const output = arr.map((x) => x.toString(2));
console.log(output);

// filter function
const oddValue = arr.filter((x) => x % 2 != 0);
console.log(oddValue);

console.log(arr);

// reduce - sum, max, min
const sum = arr.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log(sum);

// reduce function to find the

const maxValue = arr.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, arr[0]);
console.log(maxValue);

// some real world example using map, reduce, filter

const users = [
  {
    firstName: "anki",
    lastName: "sood",
    age: 24,
  },
  {
    firstName: "bni",
    lastName: "sood",
    age: 25,
  },
  {
    firstName: "bishu",
    lastName: "patel",
    age: 28,
  },
  {
    firstName: "albin",
    lastName: "saju",
    age: 28,
  },
];

// list of full name of user
const fullNameList = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNameList);

// age frequency
// {24 :1 , 25:1, 28:2}

const ageFreq = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageFreq);

// give the userName of all the people whose age is less than 26

const filterAge = users
  .filter((elem) => {
    if (elem.age < 26) {
      return elem;
    }
  })
  .reduce(function (acc, curr) {
    acc.push(curr.firstName);
    return acc;
  }, []);
console.log(filterAge);
