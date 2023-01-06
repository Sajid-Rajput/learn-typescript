// Example 1

class Car {
  constructor(color: string, location: string, vin: string | number) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }

  color: string;
  location: string;
  owner!: string;
  vin: string | number;

  power(state: boolean): string {
    if (state === true) {
      return "Starting Engine...";
    } else {
      return "Shutting Down Engine...";
    }
  }
}

class Mercedes extends Car {
  alloyWheels: boolean;
  adjustableSuspension: boolean = true;

  // Constructor Overriding
  constructor(
    color: string,
    location: string,
    vin: number,
    alloyWheels: boolean
  ) {
    super(color, location, vin);
    this.alloyWheels = alloyWheels;
  }

  // Method Overriding
  power(state: boolean): string {
    if (state === true) {
      return "Starting Mercedes Engine...";
    } else {
      return "Shutting Down Mercedes Engine...";
    }
  }
}

const carMercedes = new Mercedes("Silver", "Dubai", 157575, true); // Mercedes(color: string, location: string, vin: number, alloyWheels: boolean)
console.log("🚀 ~ file: 18-Inheritance.ts:50 ~ carMercedes", carMercedes);

const simpleCAR = new Car("Black", "Pakistan", "1-P"); // Car(color: string, location: string, vin: string | number)
console.log("🚀 ~ file: 18-Inheritance.ts:53 ~ simpleCAR", simpleCAR);

//============================================================================================

// Example 2: Index Signature
// Note: Because the index signature type needs to also capture the types of methods, it’s not easy to usefully use these types. Generally it’s better to store indexed data in another place instead of on the class instance itself.

class Myclass {
  [s: string]: boolean | ((s: string) => boolean); // index signature

  firstname: boolean = true;
  lastname: boolean = false;

  check(s: string): boolean {
    return this[s] as boolean; // this = {firstname: true, lastname: true}, So "this[s]" return the value of firstname and lastname
  }
}

let obj = new Myclass();
console.log(obj.check("firstname")); // true
console.log(obj.check("lastname")); // false

//============================================================================================

// Example 3: Implements Clauses

interface Pingball {
  ping(): void;
}

class Sonar implements Pingball {
  ping(): void {
    console.log("Ping!!!");
  }
}

// class Ball implements Pingball {
//   pong(): void {
//     console.log("Pong!!!");
//   }
// } // Class 'Ball' incorrectly implements interface 'Pingball'. Property 'ping' is missing in type 'Ball' but required in type 'Pingball'

class Ball implements Pingball {
  pong(): void {
    console.log("Pong!!!");
  }
  ping(): void {
    console.log("Ping!!!");
  }
} // class ball fullfill the requirement of Pingable interface with the ping function, extras you add as many you want

//============================================================================================

// Example: 2
// Note: It’s important to understand that an implements clause is only a check that the class can be treated as the interface type. It doesn’t change the type of the class or its methods at all. A common source of error is to assume that an implements clause will change the class type - it doesn’t!

interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s: any) {
    return s.toLowerCase() === "ok";
  }
}

//============================================================================================

// Example: 3

interface A {
  x: number;
  y?: number;
}

class C implements A {
  x = 10;
}

const c = new C();
// c.y;  // y does'nt exist

//============================================================================================

// extends clauses

// Example 1
class Base {
  greet() {
    console.log("Hello World");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(name.toUpperCase());
    }
  }
}

const greeting = new Derived();
greeting.greet();
greeting.greet("Hello! Sajid");

// Alias the derived instance through a base class reference
const b: Base = greeting; // no error
// b.greet("Hello Sajid"); //error
b.greet(); // ok

//============================================================================================

// Example 2

class Animal {
  move() {
    console.log("Moving along!!!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log("Woooff!!!");
    }
  }
}

const d = new Dog();

d.move();
d.woof(3);
//============================================================================================

// Example 3: What if Derived didn’t follow Base’s contract?

class Base1 {
  greet(): void {
    console.log("Hello! World!");
  }
}

class Derived1 extends Base1 {
  // greet(name?:string): void // works fine
  // greet(name: string): void {
  //   console.log(`Hello! ${name.toUpperCase()}`);
  // }
} // Error: Type '(name: string) => void' is not assignable to type '() => void'

// If we compiled this code despite the error, this sample would then crash:

// const b1: Base1 = new Derived1(); // Types of property 'greet' are incompatible. Type '(name: string) => void' is not assignable to type '() => void'.

//============================================================================================

// Example 4
interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;

  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  declare resident: Dog; // error
  constructor(dog: Dog) {
    super(dog);
  }
}

//============================================================================================

// Initialization Order

class Base2 {
  name: string = "base";

  constructor() {
    console.log(`Hello! My name is ${this.name} class`);
  }
}

class Derived2 extends Base2 {
  name: string = "derived";
}

const d2 = new Derived2(); // Hello! My name is base class

/*The order of class initialization, as defined by JavaScript, is:

The base class fields are initialized
The base class constructor runs
The derived class fields are initialized
The derived class constructor runs
This means that the base class constructor saw its own value for name during its own constructor, because the derived class field initializations hadn’t run yet.*/

//============================================================================================

// Inheriting Built-in Types

class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }

  sayHello() {
    return "Hello! " + this.message;
  }
}

const msg1 = new MsgError("Error 404!!!");
console.log(
  "🚀 ~ file: 18-Inheritance.ts:276 ~ msg1.sayHello();",
  msg1.sayHello()
);

// Set the Prototype Explicitly
class MsgError1 extends Error {
  constructor(m: string) {
    super(m);

    Object.setPrototypeOf(this, MsgError1.prototype);
  }
  sayHello() {
    return "Hello! " + this.message;
  }
}

const error2 = new MsgError1("Error 403: Forbidden Error");

//============================================================================================

// Class is itself a interface

class Base3 {
  name: string;

  showName(): string {
    return this.name;
  }
}

class Derived3 implements Base3 {
  name = "sajid";

  showName(): string {
    return this.name;
  }
}

//============================================================================================

// Stale and Fresh Objects

class WildAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is a Wild Animal and is eating.`);
  }
}

class Human {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is a Human and is eating.`);
  }
}

class Robot {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let h = new Human("Hamza");
let w = new WildAnimal("Snake");
let r = new Robot("Alexa");

// coping object
const h2 = h;
console.log(h2.name); // Hamza

h = w;
console.log(h); // WildAnimal { name: 'Snake' }
h.eat(); // Snake is a Wild Animal and is eating.

r = h;
console.log(r.name); // Snake
// r.eat(); // error

let r0: Robot = new WildAnimal("Donkey");
console.log("🚀 ~ file: 18-Inheritance & Polymorphism.ts:367 ~ r0", r0.name);

let isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot) // false


let isItWildAnimal = r0 instanceof WildAnimal;
console.log("Is Donkey a WildAnimal: " + isItWildAnimal); // true