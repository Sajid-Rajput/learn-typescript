let myName = "Sajid Rajput";
// name = null; // Type 'null' is not assignable to type 'string'. Null is billion dollar mistake

//-------------------------------------------------------------------------------------------------//

// Example: 1
let container: string | number;
container = 10.110987; // Narrowing
container.toFixed(3);

container = "Sajid Rajput"; // Narrowing
container.includes("Rajput");

//-------------------------------------------------------------------------------------------------//

// Example: 2
let value = Math.random() > 0.6 ? "Khan" : 60;

typeof value === "string"
  ? value.includes("K") // ok: "String"
  : value.toString(); // ok: "Number"

//-------------------------------------------------------------------------------------------------//

//---------------------------------- JavaScript Literals ------------------------------------------//

// There are three types of literals: String, Number, Boolean

// *Example: 1*
let age: number | "unknown" | "died";

age = 20; // ok: Number
age = "unknown"; // ok
age = "died"; // ok

// age = "living" // Error

//-------------------------------------------------------------------------------------------------//

// *Example: 2*
let sajid: "Rajput";

// sajid = "Khan" //Error

//-------------------------------------------------------------------------------------------------//

// *Example: 3*
let yourName = Math.random() > 0.6 ? "Wali Rajput" : undefined;

if (yourName){
    yourName.toString(); // ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName?.toUpperCase();

//-------------------------------------------------------------------------------------------------//

// You can also define a type alias
type RawData = number | string | boolean | undefined | null | symbol;
let data: RawData;

// We can also combined them
type id = number | string;
type idOctober = id | boolean | undefined | null | symbol;

export {};