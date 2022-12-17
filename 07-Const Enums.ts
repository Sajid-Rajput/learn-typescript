// https://stackoverflow.com/questions/40227401/const-enum-in-typescript

//============================================================================================

// Example: 1
const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue; // returns 2(number)

const enum Color1 {
  Red = 1,
  Green,
  Blue,
}
// let c1: string = Color1[2]; // Error
// console.log(c1);

const enum Color2 {
  Red = 1,
  Green = 3,
  Blue = "favourite",
} //Hetrogeneous Enum
let c2: string = Color2["Blue"];
console.log(c2);
