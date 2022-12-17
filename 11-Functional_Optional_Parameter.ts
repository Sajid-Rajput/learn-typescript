// Example1: Name function with Optional Parameter
function buildname(firstname: string, lastname?: string): string {
    if(lastname){
        return lastname;
    }
    else{
        return firstname;
    }
}

buildname('Sajid');
// buildname("Sajid", "Ali", "Khan"); // Error
buildname("Sajid", "Rajput");

//============================================================================================

// Example2: Anonymous Function with optional parameter

var buildname1: (firstname: string, lastname?: string) => string = function (firstname, lastname){
    if(lastname){
        return lastname;
    }
    else{
        return firstname;
    }
}