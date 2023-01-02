// Example 1

let friendsforever: () => string[];

friendsforever = () => ["sajid", "zain", "hamza", "talha", "zain-bin-rizwan"];

console.log(friendsforever());

//===================================================================================================

// Example 2: array of functions

let arrayofFunctions: (() => string | number)[];

arrayofFunctions = [() => "sajid", () => 100];

console.log(arrayofFunctions[0]());
console.log(arrayofFunctions[1]());

//===================================================================================================

// Example 3: Array, functions and rest operator

let nicknames: string[] = ["Imran", "Alex", "Alaxander", "Alaxander The Great"];
let preferences: number[] = [1, 2, 3, 4];

function greetingwithpreferences(
  greet: string,
  nicknames: string[],
  ...preferences: number[]
): void {
  for (let index = 0; index < nicknames.length; index++) {
    console.log(`${preferences[index]}) ${greet}, ${nicknames[index]}`);
  }
}

greetingwithpreferences("Hello", nicknames, ...preferences);

//===================================================================================================

export {};
