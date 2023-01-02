let sum = (x: number, y: number) => {
    return x+y;
}

let add1 = (x: number, y: number) => (x+y);

//============================================================================================

let returnStringorNumber: (() => string|number) | number;

returnStringorNumber = 10; // ok
returnStringorNumber = () => "sajid"; // ok
returnStringorNumber = () => 100; // ok
// returnStringorNumber = "hamza"; // not OK