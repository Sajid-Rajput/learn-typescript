interface Student {
  id: number;
  name: string;
}

interface Teacher {
  teacher_id: number;
  teacher_name: string;
}

type studentDetail = Student & Teacher;

let section: studentDetail = {
  id: 70077855,
  name: "Sajid",
  teacher_id: 899,
  teacher_name: "Zia Khan",
};

console.log(`Student Name: ${section.name}`);
console.log(`Teacher Id: ${section.teacher_id}`);

//===================================================================================================

export {};
