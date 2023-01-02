// Example: 1
let array1: number[] = [5, 6, 7, 8, 9];
console.log(array1[2]);

//--------------------------------------------------------------------------------------------

// Example: 2
let array2: Array<number> = [10, 20, 40];
console.log(array2[1]);

//--------------------------------------------------------------------------------------------

// Example: 3
let array3: number[] = []; // correct syntax to defined the empty array

//--------------------------------------------------------------------------------------------

// Example: 4
// let array4: number[] = new number[2]; //error

//--------------------------------------------------------------------------------------------

// Example: 5
let array5: number[] = [];
array5.push(100);
console.log(array5);

//===================================================================================================

// Example: 6

let data = []; // any[]

data.push("Sajid");

typeof data; // strind

data.push(12);

typeof data; // data: (string | number)[]

// Note: This is considered "bad practice" in typeScript

//===================================================================================================

// Example: 7 Creating two dimensional array

let TwoDimentionalArray: number[][] = [
  [100, 200, 300, 400, 550],
  [200, 400, 600, 800, 1100],
];

console.log(TwoDimentionalArray);

//===================================================================================================

// Example: 8

let covidYears: number[] = [2019, 2020, 2021];
let covidPeakYears = covidYears[1]; // number

let mixedData: (string | number)[] = ["sajid", 1, "raza", 2, "farhan", 3];
let mixedDataType = mixedData[2]; // mixedDataType: string | number
//===================================================================================================

// Example: 9  Spread operator
let nicknames: string[] = ["Imran", "Alex", "Alaxander", "Alaxander The Great"];
let preferences: number[] = [1, 2, 3, 4];

let nicknameAndprefrences = [...nicknames, ...preferences]; // (string | number)[]

//===================================================================================================

export {};
