function callback(text:string) {
    console.log(`Text: ${text}`)
}

function callingFunction (initialText: string, callback: (text:string)=>void) {
    callback(initialText);
}

console.log(callingFunction("Hello! World", callback));