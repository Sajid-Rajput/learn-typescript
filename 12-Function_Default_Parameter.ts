// Example1: Default parameters with function name

function fullname(firstname: string, lastname = "Khan"): string {
  if (lastname) {
    return lastname;
  } else {
    return firstname;
  }
}

fullname("Sajid");
// fullname("Sajid", "Ali", "Khan"); //Error
fullname("Sajid", "Rajput");

//============================================================================================

// Example2: Anonymous Function with default parameters
let myname: (firstname: string, lastname: string) => string = function (
  firstname: string,
  lastname = "Khan"
): string {
  if (lastname) {
    return lastname;
  } else {
    return firstname;
  }
};

//============================================================================================
export {};