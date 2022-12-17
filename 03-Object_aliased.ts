// Anonymous
let teacher: { name: string; experience: number } = {
  name: "Zia Khan",
  experience: 20,
};

//-------------------------------------------------------------------------------------------------//

// Aliased Object Type
type Student = {
  name: string;
  age?: Number; // Optional
};

let student1: Student = {
  name: "Sajid Rajput",
  age: 21,
};

console.log(student1.name);
console.log(student1["age"]);

//-------------------------------------------------------------------------------------------------//

// Interfaces
interface Manager {
  name: string;
  subOrdinates?: number;
}

let manager: Manager = {
  name: "Muhammad Hamza",
  subOrdinates: 10,
};

//===================================================================================================

// Structural Typing

// Example: 1
interface Ball {
  diameter: number;
}

interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 33 };

ball = sphere;
// console.log(ball); // { diameter: 33 }

// Example: 2
interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = { diameter: 200, length: 450 };

ball = tube;
// Assigning the tube into the ball does'nt mean that tube changes the ball structure
console.log(ball);

// Example: 3
let myType = {
  name: "Muhammad Sajid",
  id: 70078655,
};

myType = {
  id: 40055000,
  name: "Muhammad Hamza",
};

// myType = {
//     id: 2,
//     my_name: "Wali Khan"
// }
// Error, for changing the property name

myType = {
  id: 900,
  name: "Raza",
  // greeting: "Hello" // Error: Extra Property
};

// Example: 4
interface x {
  name: string;
  [x: string]: any; // Using this write any key of your choice
}

let data: x = {
  name: "sajid",
  fullname: "sajid rajput",
};

// Example: 4 - Case when STALE object literal are assigned to a variable

// Reference Object: let myType = {
//    name: "Muhammad Sajid",
//    id: 70078655
//};

let myType2 = {
  id: 890,
  name: "Khan",
};

myType = myType2;
myType2 = myType;

let myType3 = {
  id: 456,
  myName: "Abdullah",
};

// myType = myType3; //Error: Error, renamed or missing property, rule same for stale and fresh object

let myType4 = {
  id: 456,
  name: "Abdullah",
  position: "Manager",
};

myType = myType4; // ok
myType2 = myType4; // ok

// Example: 5 - A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects
var x: { id: number; [x: string]: any };

let y = { id: 567, fullname: "Talha Nisar Mughal" };

x = y;

let z = {
  id: 567,
  fullname: "Talha Nisar Mughal",
  working_area: "Artificial Intelligence",
};
x = z; // Excess properties allowed

//===================================================================================================

var student: { id: number };
// student = {id: 7800, name: "Sajid"} // Error: Excess Property

let student2: { id: number; name?: string };
// student2 = {id: 453, named: "Sajid"} Error: Excess Property
student2 = { id: 453, name: "Sajid" }; // ok

var teacher1: { certification: string };
var teacher2 = { name: "Yasir Niaz Khan", certification: "AI" };
teacher1 = teacher2;

let song: { singer: string; no_of_tracks?: number };
let song1 = { singer: "Atif Aslam", Published_By: "T-series" };
song = song1;

//===================================================================================================

export {};