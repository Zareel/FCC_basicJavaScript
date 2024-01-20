/*
two types of comments
* in-line comment
* multi-line comment

*/

/*
eight datatypes in javascript
* undefined
* boolean
* string
* number
* null
* NaN
* object
* array
*/

var myName; //variable myName is declared using var keyword
myName = "Shon"; // assigned a value to myName

//* one of the biggest problem of var keyword is that we can easily overwrite variable declaration

/*
difference between let and var keyword
* variable declared using var keyword can be reassigned and redeclared
* variable declared using let keyword can be reassigned but cannot be redeclared
* variable declared using const keyword can neither be reassigned nor be redclared. It is read only. They are constant
*/

// Setup
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  food: [],
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line
delete myDog.tails;

let func = (obj, prop) => {
  obj.prop;
};
console.log(func(myDog, "food"));
