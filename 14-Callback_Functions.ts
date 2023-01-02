// Example 1
function callback(text: string) {
  console.log(`Text: ${text}`);
}

function callingFunction(
  initialText: string,
  callback: (text: string) => void
) {
  callback(initialText);
}

callingFunction("Hello! World", callback);

//============================================================================================

// Example 2

const nickname: string[] = ["Sajid", "Hamza", "Zain", "Talha", "Abubakar"];

function allNickNames(callback: (index: number) => string) {
  for (let counter = 0; counter < nickname.length; counter++) {
    console.log(callback(counter));
  }
}

function getNameAt(index: number): string {
  return nickname[index];
}

allNickNames(getNameAt);
