// Note: All parameters are required

//--------------------------------------------------------------------------------------------

// Example1: Named Function

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(10, 20));

//--------------------------------------------------------------------------------------------

// Example2: Anonymous Function
let myadd = function (x: string, y: string): string {
  return x + y;
};

console.log(myadd("1", "2"));

//--------------------------------------------------------------------------------------------

// Example3: Anonymous Function with explicit type
let myadd2: (x: number, y: number) => number = function (x, y) {
  return x + y;
};

console.log(myadd2(10, 30));

//--------------------------------------------------------------------------------------------

// Example4: Type name does'nt matter
let myadd3: (baseline: string, upperline: string) => string = function (x, y) {
  return x + y;
};

console.log(myadd3("2", "0"));

//--------------------------------------------------------------------------------------------

// Example5: Lambda Functions
let myadd4 = (a:number, b:number) => a+b;

console.log(myadd4(11, 99));

//--------------------------------------------------------------------------------------------

// Example6: Void(means function returns nothing)
type GreetFunction = (a: boolean) => void;

let myadd5: GreetFunction = function (a) {
    console.log(a);
}

console.log(myadd5(true));

//--------------------------------------------------------------------------------------------

// Example7: Callback Functions
type multiple = (a:number, b:number) => number;

function addition(Callback: multiple) {
    Callback(10, 20);
}