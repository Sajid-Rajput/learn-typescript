// Example:1
var tuple: [number, string] = [1, "Sajid"];
var secondIndex: string = tuple[1];
console.log(secondIndex);

//============================================================================================

// Example:2 Creating tuple using javascript
let failingResponse: (number | string)[] = [
  "Sajid",
  10,
  "Wali",
  20,
  "Hamza",
  30,
];

//============================================================================================

// Example:3

const passingResponse: [string, number] = ["{}", 200];

if (passingResponse[1] === 200) {
  const localinfo = JSON.parse(passingResponse[0]);
  console.log(localinfo);
}

// passingResponse[2]; // error

//============================================================================================

// Example:4
type StaffAccount = [number, string, string, string?];

let staff: StaffAccount[] = [
  [0, "Sajid", "sajid.e@"],
  [1, "Hamza", "hamza.e@"],
  [2, "Yasir", "yasir.e@", "supervisor"],
];

type PayStubs = [StaffAccount, ...number[]];

const paystubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[2], 300, 300, 300],
];

const monthOnePayment = paystubs[0][1] + paystubs[1][1] + paystubs[2][1];
const monthSecondPayment = paystubs[1][2] + paystubs[2][2];
const monthThirdPayment = paystubs[2][3];

//============================================================================================

// Example:5

declare function calculatePayForEmployee(
  id: number,
  ...arg: [...number[]]
): number;

calculatePayForEmployee(paystubs[0][1] + paystubs[1][1] + paystubs[2][1]);
calculatePayForEmployee(paystubs[1][2] + paystubs[2][2]);

//============================================================================================

// Example:6 Rest parameters with tuple types

declare function foo(...arg: [number, string, boolean]): void;

// Spread expressions with tuple types

const arg: [number, string, boolean] = [1, "Sajid", true];
foo(1, "Sajid", true);
foo(arg[0], arg[1], arg[2]);
foo(...arg);

// Note
// When a rest parameter has a tuple type, the tuple type is expanded into a sequence of discrete parameters. For example the following two declarations are equivalent:

// declare function foo(...args: [number, string, boolean]): void;
// declare function foo(args_0: number, args_1: string, args_2: boolean): void;

//============================================================================================
