import { log } from "console";

// Example1: Named Function with REST parameter
function eventSponsor(head: string, ...guest: string[]): string {
  return head + " " + guest.join(" ");
}

console.log(
  eventSponsor("Sajid", "Hamza", "Zain", "Talha", "Abubakar", "Waleed")
);

//============================================================================================

// Example2: REST parameters with anonymous function
let functionSponsor: (head: string, ...guest: string[]) => string = function (
  head,
  ...guest
) {
  return head + " " + guest.join(" ");
};

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list

//============================================================================================

export {};
