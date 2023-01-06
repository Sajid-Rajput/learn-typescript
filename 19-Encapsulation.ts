// Public: Every property and method in a class is "Public" Default

class PublicCheck {
  public name = "Sajid";

  public getName() {
    return this.name;
  }
}

const pc = new PublicCheck();
console.log("🚀 ~ file: Encapsulation.ts:12 ~ pc", pc);
console.log("🚀 ~ file: Encapsulation.ts:12 ~ pc", pc.name);
console.log("🚀 ~ file: Encapsulation.ts:12 ~ pc", pc.getName);

//============================================================================================

// Private: Any property and method that is private in only accessible inside the class and not even inherited in any other class respectively.

class PrivateCheck {
  private name = "Sajid";

  private getName() {
    return this.name;
  }
}

class PrivateInheritanceCheck extends PrivateCheck {
  //   getName() {
  //   // return this.name; // Property 'name' is private and only accessible within class 'PrivateCheck'.
  //   return "";
  // } // Property 'getName' is private in type 'PrivateCheck' but not in type 'PrivateInheritanceCheck'.
}

const pc1 = new PrivateCheck();
console.log("🚀 ~ file: Encapsulation.ts:12 ~ pc1", pc1); //PrivateCheck { name: 'Sajid' }
// console.log("🚀 ~ file: Encapsulation.ts:12 ~ pc1", pc1.name); //error
// console.log("🚀 ~ file: Encapsulation.ts:12 ~ pc1", pc1.getName); // Property 'getName' is private and only accessible within class 'PrivateCheck'.

// Important Note: There is flaw in private, it is accessible by using the object syntax

console.log("🚀 ~ file: Encapsulation.ts:12 ~ pc1", pc1["name"]);
console.log("🚀 ~ file: Encapsulation.ts:12 ~ pc1", pc1["getName"]);

//============================================================================================

// Protected

// Protected: Any property and method that is Protected in only accessible inside the class and  in other inherited class respectively but not accessible outside the class.

class ProtectedCheck {
  protected name = "Sajid";

  protected getName() {
    return this.name;
  }
}

class ProtectedInheritanceCheck extends ProtectedCheck {
  protected getName(): string {
    return this.name;
  }
}

const pc3 = new ProtectedInheritanceCheck();
// console.log("🚀 ~ file: 19-Encapsulation.ts:66 ~ pc3", pc3.getName); // Property 'getName' is protected and only accessible within class 'ProtectedInheritanceCheck' and its subclasses.

const pc4 = new ProtectedCheck();
// console.log("🚀 ~ file: 19-Encapsulation.ts:69 ~ pc4", pc4.name); // error because the property is protected.

//============================================================================================

// static properties in class

// static property adds inside the class prototype and accessible by using the class name

// Example
class Employee {
  static value: number = 0;
  employeeID: number;
  employeeName: string;

  constructor(name: string) {
    this.employeeID = ++Employee.value;
    this.employeeName = name;
  }
}

const emp1 = new Employee("Sajid");
console.log(
  "🚀 ~ file: 19-Encapsulation.ts:92 ~ emp1",
  emp1.employeeID,
  emp1.employeeName
);

const emp2 = new Employee("Hamza");
console.log(
  "🚀 ~ file: 19-Encapsulation.ts:94 ~ emp2",
  emp2.employeeID,
  emp2.employeeName
);

const emp3 = new Employee("Zain");
console.log(
  "🚀 ~ file: 19-Encapsulation.ts:96 ~ emp3",
  emp3.employeeID,
  emp3.employeeName
);

//============================================================================================

// Generics in Interfaces and Classes

// Note: Generics is used in interfaces and classes when you don't type of any instance

interface FetchVehicleData<Type> {
  sin: Type;
  vehicleName: string;
  vehicleColor: string;
}

const car: FetchVehicleData<number> = {
  sin: 1345644,
  vehicleName: "Mercedes",
  vehicleColor: "Gold",
};

//============================================================================================

// Interface in Classes

class VehicleData<type> {
  sin: type;
  constructor(value: type) {
    this.sin = value;
  }
}

const carData = new VehicleData<number>(126590);
// const carData1 = new VehicleData(126590); type by default is number
console.log("🚀 ~ file: 19-Encapsulation.ts:140 ~ carData", typeof carData.sin); // number
