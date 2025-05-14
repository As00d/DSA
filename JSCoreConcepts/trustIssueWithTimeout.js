console.log("Hello my name is anki");

setTimeout(function () {
  console.log("Hello I am in timeout function");
}, 5000);

console.log("I am in main thread");

// let startDate = new Date().getTime();
// let endDate = startDate;

// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("after while expires");

// Confusion about 0 second callback

console.log("Hello my name is anki and this is second ");

setTimeout(function () {
  console.log("Hello I am in timeout function 2");
}, 0);

console.log("test");
