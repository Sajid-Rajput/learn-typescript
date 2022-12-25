import { type } from "os";

let teacher = {
  name: "Zia Khan",
  experience: "Web 3.0",
};

console.log(teacher.name);
console.log(teacher["experience"]);

// Type Declaration
let student: {
  name: string;
  age: number;
  experience: string;
};

student = {
  name: "Sajid Rajput",
  age: 22,
  experience: "BSCS",
};

console.log(student.name);
console.log(student["experience"]);

//===================================================================================================

// Nested Object

interface Author {
  first_name: string;
  last_name: string;
}

interface Book {
  author: Author;
  name: string;
}

let book: Book = {
  author: {
    first_name: "Sajid",
    last_name: "Rajput",
  },
  name: "The Psychology of Money",
};
//===================================================================================================

// Important Example:
type PoemWithPages = { name: string; pages: number };
type PoemWithRhymes = { name: string; rhymes: boolean };

type Poem = PoemWithPages | PoemWithRhymes;

let poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 100 }
    : { name: "Her Kind", rhymes: true };

if ("pages" in poem) {
  console.log(poem.pages);
} else {
  console.log(poem.rhymes);
}

//===================================================================================================

// Example 2:
type ImranInPakistan = { name: string; age: number; type: "Pakistani" };
type ImranOverseas = {
  name: string;
  age: number;
  type: "Overseas";
  nickname: string;
};

type Imran = ImranInPakistan | ImranOverseas;

let imran: Imran = Math.random()
  ? { name: "Imran", age: 33, type: "Pakistani" }
  : { name: "Imran", age: 33, type: "Overseas", nickname: "Alexander" };

if (imran.type === "Pakistani") {
  console.log(`He is Pakistani, So, we called him ${imran.name}`);
} else {
  console.log(`He is Overseas, So, we called him ${imran.nickname}`);
}

//===================================================================================================

// Example 3:
type SajidType = {
  name: { firstname: string; lastname: string };
  age: number;
  teaching: boolean;
  dob: Date;
  certification: [...string[]];
};

let sajidDetail: SajidType = {
  name: {
    firstname: "Sajid",
    lastname: "Rajput",
  },
  age: 21,
  teaching: false,
  dob: new Date(),
  certification: ["C++", "Python", "Flask", "Machine Learning"],
};
console.log("🚀 ~ file: 02-Objects.ts:109 ~ sajidDetail", sajidDetail);

//===================================================================================================

// Example 4

type Firstname = {
  firstname: string;
};
type Lastname = {
  lastname: string;
};

let fullname = { firstname: "Sajid", lastname: "Rajput" };

let f_name: Firstname = fullname; // { firstname: 'Sajid', lastname: 'Rajput' }
let l_name: Lastname = fullname; // { firstname: 'Sajid', lastname: 'Rajput' }

console.log("🚀 ~ file: 02-Objects.ts:125 ~ f_name", f_name);
console.log("🚀 ~ file: 02-Objects.ts:127 ~ l_name", l_name);

//===================================================================================================

// Excess Property
type ExtraProperty = {
  office_name: string;
  office_pin: number;
};

let office: ExtraProperty = {
  office_name: "Netsol",
  office_pin: 549000,
  // office_city: "Califonia" // Type '{ office_name: string; office_pin: number; office_city: string; }' is not assignable to type 'ExtraProperty'
};

//===================================================================================================

// Union Objects
// type book0 = {
//   name: string;
//   origin: string;
//   pages: number;
//   words?: undefined;
// } | {
//   name: string;
//   origin: string;
//   words: number;
//   pages?: undefined;
// }

type book1 = {
  name: string;
  origin: string;
  pages?: number;
  words?: number;
}

// type book0 and type book1 work same

let pendingBooks: book1 =
  Math.random() > 0.5
    ? {
        name: "The Prince",
        origin: "Italy",
        pages: 400,
      }
    : {
        name: "The Secrets of Self",
        origin: "Pakistan",
        words: 900000,
      };

console.log(pendingBooks.pages);

//===================================================================================================
export {};
