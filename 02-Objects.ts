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
export {};
