function x() {
  console.log("Hello i am ordinary function");
}

// Here y is a high order function
function y(x) {
  x();
}

const radius = [2, 6, 3, 9];
// Task at hand to calculate the area of the circle - Now this way is perfectly fine but as our code grows we will see this will create issues.

function area(radius) {
  let areaRadius = [];
  for (let i = 0; i < radius.length; i++) {
    areaRadius.push(Math.PI * radius[i] * radius[i]);
  }
  return areaRadius;
}

const areaOfCircle = area(radius);
console.log(areaOfCircle);

// Lets say now you have to calculate circumference

const circum = (radius) => {
  let circumF = [];
  for (let i = 0; i < radius.length; i++) {
    circumF.push(Math.PI * radius[i] * 2);
  }
  return circumF;
};

const circumferenceOfCircle = circum(radius);
console.log(circumferenceOfCircle);

// lets say we have to now calculate the diameter of the circle

const diameter = (radius) => {
  let diameter = [];
  for (let i = 0; i < radius.length; i++) {
    diameter.push(radius[i] * 2);
  }
  return diameter;
};

const diameterOfCircle = diameter(radius);
console.log(diameterOfCircle);

// so the question is what is the issue with this kind of code ?
// 1. In programming world we have a principle called do not repeat your self

// Let us see how we can improve our above code

const optimiseRadius = [2, 6, 3, 9];

const calculateArea = (radius) => {
  return Math.PI * radius * radius;
};

const calculateDiameter = (radius) => {
  return radius * 2;
};

const calculateCircum = (radius, logic) => {
  return Math.PI * 2 * radius;
};

// I was using arrow function - which later realised this keyword is not supported in arrow functions
// This is a pollyfill for map function

Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

// Let us try to create a pollyfill for map function

console.log(optimiseRadius.calculate(calculateArea));

console.log(optimiseRadius.map(calculateArea));
