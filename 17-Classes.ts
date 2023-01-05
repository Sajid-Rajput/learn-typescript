import { connected } from "process";

// Example 1
class Human0 {
  name!: string;
}

let sajid = new Human0();
console.log(typeof sajid.name); // undefined
console.log(sajid); // Human0 { name: undefined }

sajid.name = "sajid";
console.log(typeof sajid.name); // string
console.log(sajid); // Human0 { name: undefined }
//============================================================================================

// Example 2: Understand "this" keyword in classes

console.log(this); // undefined

class Human1 {
  name!: string;

  understand_this() {
    console.log(this);
  }
}

const p1 = new Human1();
console.log(p1.understand_this); // [Function: understand_this]
console.log(typeof p1.understand_this); // function

p1.name = "chaudhary";
console.log(p1); // Human1 { name: 'chaudhary' }
console.log(typeof p1); // object

//============================================================================================

// Example 3
class Point {
  x = 0;
  y = 0;
}

let pt = new Point();
pt.x = 10;
// pt.y = "20"; // Type 'string' is not assignable to type 'number'.
console.log(pt);

//============================================================================================

// Example 4
class BadGreeting {
  // name: string; // error
  // Property 'name' has no initializer and is not definitely assigned in the constructor.
}

//============================================================================================

// Example 5
class GoodGreeting {
  name: string;

  constructor(person_name: string) {
    this.name = person_name;
  }

  greeting() {
    console.log(`Good Morning! ${this.name}`);
  }
}

let greet = new GoodGreeting("Sajid");
greet.greeting();

//============================================================================================

// Example 6
class OKGreeter {
  // Not initialized, but no error
  name!: string;
}

//============================================================================================

// Example 7: Readonly

class Greeter {
  readonly name: string = "Sajid";

  constructor(othername?: string) {
    if (othername !== undefined) {
      this.name = othername;
    }
  }
}

const greet1 = new Greeter();
console.log(greet1); // Greeter { name: 'Sajid' }

const greet2 = new Greeter("Zain");
console.log(greet2); // Greeter { name: 'Zain' }

//============================================================================================

// Example 7: Constructor Overloads
class Point1 {
  constructor(x: number, y: string);
  constructor(x: string);
  constructor(x: any, y?: string) {
    // any code
  }
}

// const p2 = new Point1(true) // error
// const p2 = new Point1(19); // error
// const p2 = new Point1(19, "sajid"); // ok
// const p2 = new Point1("ok", 19); // error
const p2 = new Point1("ok"); // ok

//============================================================================================

// Example 8: Getter / Setter
class GetterSetter {
  private _length: number;

  get length(): number {
    return this._length;
  }
}

const gs = new GetterSetter();
console.log("🚀 ~ file: 17-Classes.ts:132 ~ _length", gs.length);

//============================================================================================

// Example 9
class GetterSetter1 {
  _number: number;

  get number(): number {
    return this._number;
  }

  set number(set_number: number) {
    if (set_number < 5) {
      this._number = 0;
      return;
    }
    this._number = 10;
  }
}

const gs1 = new GetterSetter1();
gs1.number = 4;
console.log(gs1.number);

gs1.number = 6;
console.log(gs1.number);

//============================================================================================

// Example 9: Optional Properties

class Optional {
  firstname!: string; // preferred in classes
  lastname?: string;
}

const opt = new Optional();
console.log("🚀 ~ file: 17-Classes.ts:169 ~ opt", opt); // { firstname: undefined, lastname: undefined }

opt.firstname = "Sajid";
opt.lastname = "Rajput";

console.log("🚀 ~ file: 17-Classes.ts:169 ~ opt", opt);

//============================================================================================

// Example 10
class Car {
  constructor(color: string, location: string, vin: string) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }

  color: string;
  location: string;
  owner!: string;
  readonly vin: string;

  power(state: boolean): void {
    if (state === true) {
      console.log("Starting Engine...");
    } else {
      console.log("Shutting Down Engine...");
    }
  }
}

const sajidCar = new Car("Black", "Lahore", "1-L");
const waliCar = new Car("Blue", "Islamabad", "1-I");
sajidCar.owner = "Sajid Rajput";
waliCar.owner = "Wali Rajput";

console.log("🚀 ~ file: 17-Classes.ts:204 ~ sajidCar", sajidCar);
console.log("🚀 ~ file: 17-Classes.ts:206 ~ waliCar", waliCar);

sajidCar.power(true);
waliCar.power(false);

let hamzaCar: Car;
hamzaCar = {
  color: "Red",
  location: "Karachi",
  vin: "1-K",
  power() {},
  owner: "Hamza", // use "?:" in owner if you don't want to give owner property
};

console.log("🚀 ~ file: 17-Classes.ts:215 ~ hamzaCar", hamzaCar);
