/*
 * Function Expressions in JavaScript
 * ----------------------------------
 * Function expressions allow you to define functions as values. They can be:
 *   - Named or anonymous
 *   - Assigned to variables
 *   - Passed as arguments to other functions
 *   - Returned from other functions
 *
 * Function expressions are fundamental in functional programming and are often used to:
 *   - Create closures (functions that remember their lexical scope)
 *   - Build higher-order functions (functions that take or return other functions)
 *
 * Recursion: Use with Care!
 * -------------------------
 * Pros:
 *   1. Reduces code size
 *   2. Can be more elegant and readable
 *   3. Useful for problems that naturally fit recursive solutions
 *
 * Cons:
 *   1. May impact performance (stack overflows, slower execution)
 *   2. Can be harder to debug and follow logic
 *   3. Readability may suffer if overused or misapplied
 */

//Named Function Expression
console.log("-------------- Named Function Expression --------------");
// Named function expressions are similar to regular function declarations, but they are assigned to a variable. They can be useful for debugging, as the name will appear in stack traces.
// Named function expressions can also be recursive, allowing the function to call itself by name.

const namedFunctionExpression = function myFunction() {
  console.log("This is a named function expression");
};
namedFunctionExpression(); // Call the named function expression
// You can also call it by its name within the function
// myFunction(); // This would work, but it's not recommended to call it this way outside of the function scope.

//Anonymous Function Expression
console.log("-------------- Anonymous Function Expression --------------");
// Anonymous function expressions are functions that do not have a name. They are often used as arguments to other functions or as callbacks.

const anonymousFunctionExpression = function () {
  console.log("This is an anonymous function expression");
};
anonymousFunctionExpression(); // Call the anonymous function expression

// Immediately Invoked Function Expression (IIFE)
console.log(
  "-------------- Immediately Invoked Function Expression (IIFE) --------------"
);
// An IIFE is a function that is executed immediately after it is defined. It is often used to create a private scope and avoid polluting the global namespace.

const iife = (function () {
  console.log("This is an immediately invoked function expression");
})();

// Arrow Functions
console.log("-------------- Arrow Functions --------------");
// Arrow functions are a more concise way to write function expressions. They do not have their own `this` context, which makes them useful for certain situations, such as when you want to preserve the `this` context of the surrounding code.

// Without parameters
const arrowFunctionNoParams = () => {
  console.log("This is an arrow function with no parameters");
};
arrowFunctionNoParams(); // Call the arrow function with no parameters

// With one parameter
const arrowFunctionOneParam = (param) => {
  console.log(`This is an arrow function with one parameter: ${param}`);
};
arrowFunctionOneParam("Hello, Arrow Function!"); // Call the arrow function with one parameter

// With multiple parameters
const arrowFunctionMultipleParams = (param1, param2) => {
  console.log(
    `This is an arrow function with multiple parameters: ${param1}, ${param2}`
  );
};

arrowFunctionMultipleParams("Param1", "Param2"); // Call the arrow function with multiple parameters

// With a single expression (implicit return)
const arrowFunctionImplicitReturn = (param) => param * 2;

// With a block body (explicit return)
const arrowFunctionBlockBody = (param) => {
  const result = param * 2;
  return result;
};
// Call the arrow functions
console.log(
  `Result from arrow function with implicit return: ${arrowFunctionImplicitReturn(
    5
  )}`
);
console.log(
  `Result from arrow function with block body: ${arrowFunctionBlockBody(5)}`
);

// Function Constructor
console.log("-------------- Function Constructor --------------");
// The Function constructor allows you to create a new function dynamically. It takes a variable number of string arguments, where the last argument is the function body and the preceding arguments are the parameter names.
const functionConstructor = new Function(
  "param1",
  "param2",
  `
  console.log("This is a function created with the Function constructor");
  return param1 + param2;
`
);
const result = functionConstructor(5, 10);
console.log(`Result from Function constructor: ${result}`);

// Function as First-Class Citizens
console.log("-------------- Function as First-Class Citizens --------------");
// In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. They can be assigned to variables, passed as arguments to other functions, and returned from functions.
const higherOrderFunction = (callback) => {
  console.log("This is a higher-order function that takes a callback");
  callback();
};
higherOrderFunction(() => {
  console.log(
    "This is a callback function passed to the higher-order function"
  );
});

// Closures
console.log("-------------- Closures --------------");
// Closures are functions that retain access to their lexical scope even when executed outside of that scope. They are created when a function is defined inside another function and can be used to create private variables or encapsulate functionality.

const parentFunctionScope = (value) => {
  // local scope variable in parent function
  const privateVariable = value;
  console.log(`This is a closure with a private variable: ${privateVariable}`);

  // Inner scope child function that forms a closure
  const childFunction = () => {
    console.log(`Accessing private variable from closure: ${privateVariable}`);
  };
  return childFunction;
};
const closureFunction = parentFunctionScope("Hello, Closure!");
closureFunction(); // This will log: Accessing private variable from closure: Hello, Closure!

// Recursion
console.log("-------------- Recursion --------------");
// Recursion is a programming technique where a function calls itself to solve a problem. It is often used to solve problems that can be broken down into smaller sub-problems.
// Any iterator function(function with loop) can be converted to a recursive function.

console.log("-------------- Count to Ten using Recursion --------------");
const countToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  countToTen(num);
};
countToTen();

console.log("-------------- Factorial using Recursion --------------");
const factorial = (n) => {
  if (n <= 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive case
};
console.log(`Factorial of 5: ${factorial(5)}`);

//FibonacciSequence
console.log("-------------- Fibonacci Sequence using Recursion --------------");
//normal Fibonacci sequence starts with 0 and 1, so fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(2) = 1, fibonacci(3) = 2, fibonacci(4) = 3, fibonacci(5) = 5, ...
console.log("-------------- Fibonacci Sequence using Iteration --------------");
const fibonacciSequence = (num, array = [0, 1]) => {
  while (num > 2) {
    const nextNumber = array[array.length - 1] + array[array.length - 2];
    array.push(nextNumber);
    num--;
  }
  return array;
};
console.log(fibonacciSequence(10));

// With recursion, the Fibonacci sequence can be defined as:
console.log("-------------- Fibonacci Sequence using Recursion --------------");
const fibonacci = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextNumber, last] = array.slice(-2);
  return fibonacci(num - 1, [...array, nextNumber + last]);
};

console.log(`Fibonacci of 20: ${fibonacci(20)}`);

// Define the number of the position of the Fibonacci sequence

console.log(
  "-------------- Fibonacci Sequence using Recursion with Position --------------"
);
const fibonacciWithPosition = (position) => {
  if (position <= 0) return 0;
  if (position === 1) return 1;
  return (
    fibonacciWithPosition(position - 1) + fibonacciWithPosition(position - 2)
  );
};

console.log(`Fibonacci at position 10: ${fibonacciWithPosition(10)}`);

// Higher-Order Functions
console.log("-------------- Higher-Order Functions --------------");
// Functions that accept other functions (callbacks)
// Array method examples
const numbers = [1, 2, 3, 4, 5];

// forEach is a higher-order function
numbers.forEach(function (number) {
  console.log(number);
});

// map is a higher-order function
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

// filter is a higher-order function
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});

// Functions that return functions
console.log("-------------- Functions that Return Functions --------------");
// Function that returns a function
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

const triple = multiplyBy(3);
console.log(triple(5)); // 15

// Built-in higher-order functions
console.log("-------------- Built-in Higher-Order Functions --------------");
/* JavaScript provides several built-in higher-order functions, such as:

Array methods: map(), filter(), reduce(), sort(), some(), every()

Timer functions: setTimeout(), setInterval()

Event handlers: addEventListener()
*/
// Example of using map, filter, and reduce
const numbersArray = [1, 2, 3, 4, 5];
// Using map to double the numbers
const doubledArray = numbersArray.map(function (num) {
  return num * 2;
});
console.log(`Doubled Array: ${doubledArray}`);
// Using filter to get even numbers
const evenNumbers = numbersArray.filter(function (num) {
  return num % 2 === 0;
});
console.log(`Even Numbers: ${evenNumbers}`);
// Using reduce to sum the numbers
const sum = numbersArray.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);
console.log(`Sum of Numbers: ${sum}`);

// Higher-order function that creates greeting functions
console.log(
  "-------------- Higher-Order Function that Creates Greeting Functions --------------"
);
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

console.log(sayHello("Alice"));
console.log(sayHi("Bob"));

//Curring Functions
console.log("-------------- Curring Functions --------------");
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

// Example of a curried function
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

console.log(curriedAdd(5)(10));

// Example of a curried function with multiple arguments
console.log(
  "-------------- Curried Function with Multiple Arguments --------------"
);
const curriedMakeIceCream = (flavor) => {
  return (holder) => {
    return (topping) => {
      return `Making ${flavor} ice cream in a ${holder} with ${topping} topping.`;
    };
  };
};

const myIceCream = curriedMakeIceCream("Chocolate")("Cone")("Sprinkles");
console.log(myIceCream);

//shorthand for curried function
console.log("-------------- Shorthand for Curried Function --------------");
const curriedMakeIceCreamShort = (flavor) => (holder) => (topping) =>
  `Making ${flavor} ice cream in a ${holder} with ${topping} topping.`;

console.log(curriedMakeIceCreamShort("Vanilla")("Cup")("Chocolate Chips"));

const regMultiple = (a, b, c) => {
  return a * b * c;
};
console.log(`Regular Function Result: ${regMultiple(2, 3, 4)}`);
// Curried version of the same function
const curriedMultiple = (a) => (b) => (c) => a * b * c;
console.log(`Curried Function Result: ${curriedMultiple(2)(3)(4)}`);

// Partial currying
console.log("-------------- Partial Currying --------------");
const partialCurriedAdd = (a) => (b) => a + b;
const addFive = partialCurriedAdd(5);
console.log(`Partial Curried Add Result: ${addFive(10)}`);

//Real e.g. of currying with DOM manipulation
console.log(
  "-------------- Real Example of Currying with DOM Manipulation --------------"
);
console.log(
  "Uncomment  this example and add it to html file(index.html), that demonstrates how to create a function that generates HTML elements with specific classes and content using currying."
);
/* const createElement = (tag) => (className) => (content) => {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = content;
  return element;
};
const divElement = createElement("div")("my-class")("Hello, World!");
document.body.appendChild(divElement); */
// This will create a <div> element with class "my-class" and text "Hello, World!" and append it to the body of the document.

//-----------------------------------------------------------------------------------------------------------------
//Impure Functions(side-effect) & Pure Functions

console.log("-------------- Impure Functions & Pure Functions --------------");
// A pure function is a function that, given the same input, will always return the same output and does not cause any side effects (e.g., modifying global state, changing input parameters, etc.).

// Example of a Impure function
let globalCounter = 0;
const impureFunction = (increment) => {
  globalCounter += increment; // This modifies a global variable, making it impure
  return globalCounter;
};
console.log(`Impure Function Result: ${impureFunction(5)}`); // Output: 5

// Pure function

/* Pure Functions
* ---------------
* Pure functions are a core concept in functional programming.
* Benefits of pure functions:
*   - Predictable: Same input always produces the same output
        We can replace the function with the output
        This is called "referential transparency"
        A pure function should have at least one parameter.Otherwise, it is the same as a constant because they can only work with their input.
*   - No side effects: Do not modify external state or variables
        Pure functions cannot:
          Access a database, API, file system, storage, etc.
          Modify the DOM Or even log to the console
          That said, clearly "impure" functions are necessary
          but they are harder to test and debug
*   - Easy to test and debug
*   - Reusable and composable
*
* Rules for how to create a pure functions:
*   1. Always return the same result for the same arguments
*   2. Do not cause side effects (no mutation of external state)
*/

// Example of a pure function
const pureFunction = (a, b) => {
  return a + b; // This function always returns the same output for the same input and does not modify any external state
};
console.log(`Pure Function Result: ${pureFunction(5, 10)}`); // Output: 15



// These common Higher Order Functions are Pure Functions:

const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive. filter(elem => elem % 2 !== 0);
console.log(oddToFive);

const doubledOneToFive = oneToFive.map(elem => elem * 2);
console.log(doubledOneToFive);

