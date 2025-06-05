/*

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always execute, regardless of an error
}

*/


console.log("\n---------------------------------Division by zero error--------------------------------------\n");
try {
  let result = 10 / 0; 
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
}


console.log("\n------Display a custom message when encountering division by zero-----------------------------\n");

try {
  let divisor = 0;
  if (divisor === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  let result = 10 / divisor;
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
}

console.log("\n------Use `catch` to handle specific types of errors by inspecting the `error` object------\n");

try {
  JSON.parse("{ invalid JSON }"); // This will throw a SyntaxError
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("There was a syntax error in your JSON.");
  } else {
    console.log("An unknown error occurred: " + error.message);
  }
}


console.log("\n------------------Adding finally block------------------\n");

try {
  console.log("Executing try block");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Handling the error: " + error.message);
} finally {
  console.log("This will always execute, regardless of an error.");
}

console.log("\n------------------Built-in Error Types------------------\n");

/*
- Error: A generic error.
- SyntaxError: Thrown when parsing code with an invalid syntax.
- TypeError: Thrown when a value is not of the expected type.
- RangeError: Thrown when a number is outside an allowable range (e.g., invalid array length).
- ReferenceError: Thrown when trying to access an undefined variable.
- EvalError: Thrown by the `eval()` function in specific circumstances.
- URIError: Thrown when a URI handling function (such as `encodeURI()`) is used incorrectly. 
*/

try {
  eval('var a = ;'); // Missing value after the assignment operator
} catch (error) {
  console.log("SyntaxError: " + error.message); // Output: SyntaxError: Unexpected token ;
}

console.log("\n------------------Custom Error Handling------------------\n");


function getElement(arr, index) {
  if (index < 0 || index >= arr.length) {
    throw new RangeError("Index out of bounds");
  }
  return arr[index];
}

try {
  let arr = [1, 2, 3];
  console.log(getElement(arr, 5)); // This will throw an error
} catch (error) {
  console.log(error.message); // Output: "Index out of bounds"
}

console.log("\n------------\n");