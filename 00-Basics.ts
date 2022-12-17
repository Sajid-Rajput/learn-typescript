// Inferred Type: String | Number
let answer = Math.random() > 0.5 ? "True" : 0;
console.log(answer);

//-------------------------------------------------------------------------------------------------//

// Type System
let name = "Sajid Rajput";
// name.length(); //Gives Error because length() is a prototype of function

//-------------------------------------------------------------------------------------------------//

// Types of Errors

// let let name; // This is a Syntax Error.
// console.blub("Hello World!"); //This the type Error.

//-------------------------------------------------------------------------------------------------//

// Type Annotation
let container: any;
container = 19.11; // Number
container.toFixed(2); // Executed because container type is any

container = "Sajid"; // String
container.toUpperCase(); // Executed because container type is any

//-------------------------------------------------------------------------------------------------//

// Type Shape
let rapper = "Slim Shaddy";
rapper.length; // ok

// rapper.push("l");
// Property push does'nt exist in rapper(string)

// Object
let friend = {
  friend1: "Hamza",
  friend2: "Zain",
};

// friend.friend3;
// friend3 does not exist

//-------------------------------------------------------------------------------------------------//

// Example
let number1 = "3";
let number2 = 3;

let sum = number1 + number2; // string 33

// let sum1: number = number1 + number2; // Type 'string' is not assignable to type 'number'.
console.log(typeof sum, sum);

export {}; // Export is just used for creating same variable_name
