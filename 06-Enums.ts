// https://stackoverflow.com/questions/40227401/const-enum-in-typescript

import { builtinModules } from "module";

//============================================================================================

// Example: 1
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue; // returns 2(number)

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
let c1: string = Color1[2];
console.log(c1);

enum Color2 {
  Red = 1,
  Green = 3,
  Blue = "favourite",
} //Hetrogeneous Enum
let c2: string = Color2["Blue"];
console.log(c2);
