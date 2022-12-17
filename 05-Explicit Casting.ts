let myname: unknown = "Sajid Rajput";
console.log((myname as string).length);

//============================================================================================

// Example: 1
let x: unknown = 10;
console.log((x as string).length); // prints undefined since numbers don't have a length

//============================================================================================

// Example: 2
// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

//============================================================================================

// Example: 3
let name2: unknown = "Wali Rajput";
console.log((<string>name2).length);

//============================================================================================

// Example: 4
let variable1 = "1";
console.log((variable1 as unknown as number).toFixed); //Property 'length' does not exist on type 'number'

//============================================================================================

// Example 5:
let variable2: unknown = 1.98989899;
console.log((variable2 as any as string).length);

//============================================================================================

// Note: It only convert the valid datatypes, not valid data types cause undefined

//============================================================================================
export {};
