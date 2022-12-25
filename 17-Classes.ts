import { constants } from "buffer";

// Example 1:
class Point {
  x: number;
  y: number;
}

const pt = new Point();

pt.x = 0;
pt.y = 0;

//============================================================================================

// Example 2:
class Point1 {
  x: number = 0;
  y: number = 0;
}

const pt1 = new Point1();

// pt1.x = "90"; // Type 'string' is not assignable to type 'number'.
pt1.x = 8;
pt1.y = 9;

console.log(`${pt1.x}, ${pt1.y}`);

//============================================================================================

// Example 3: class BadGreeter
class BadGreeter {
  name: string;
  // Property 'name' has no initializer and is not definitely assigned in the constructor.
}

//============================================================================================

// Example 4: class GoodGreeter
class GoodGreeter {
  name: string;

  constructor() {
    this.name = "Sajid Rajput";
  }
}

//============================================================================================

// Example: 5
class OKGreet {
  name!: string;
  // Not initialized, but no error
}

//============================================================================================

// Example: 6 Readonly
class Greeter {
  readonly name: string = "Sajid";

  constructor(othername?: string) {
    if (othername !== undefined) {
      this.name = othername;
    }
  }

  err() {
    //    this.name = "Not OK"; // Cannot assign to 'name' because it is a read-only property.
  }
}

const g = new Greeter();
// g.name = "Rajput"; // Error: Cannot assign to 'name' because it is a read-only property.

//============================================================================================

// Example: 6 Constructor with default parameters

class myPoint {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

//============================================================================================

// Example: 7
class Panaverse {
  name: string;
  roll_no: number;
  city: string;

  constructor(name: string, roll_no: number, city: string) {
    this.name = name;
    this.roll_no = roll_no;
    this.city = city;
  }
}

const student1 = new Panaverse("Sajid", 70077989, "Lahore");
const student2 = new Panaverse("Zain", 70077757, "Kasur");

console.log(`${student1.name}, ${student1.roll_no}, ${student1.city}`);
console.log(`${student2.name}, ${student2.roll_no}, ${student2.city}`);

//============================================================================================

// Example: 7 Constructor Overloading
class myPoint1 {
  // Overloads
  constructor(x: number, y: number);
  constructor(s: string);
  constructor(x: any, y?: number) {
    // code
  }
}

//============================================================================================

// Example: 8 Super Calls
class Base {
  k = 8;
}

class Derived extends Base {
  constructor() {
    super();
    console.log(this.k);
  }
}

const obj = new Derived();

//============================================================================================

// Example: 9 Getter / Setter
class Length {
  _measure = 0;

  set measure(value: number) {
    this._measure = value;
  }

  get measure() {
    return this._measure;
  }
}

let L1 = new Length();

L1.measure = 555;
console.log(L1.measure);

//============================================================================================