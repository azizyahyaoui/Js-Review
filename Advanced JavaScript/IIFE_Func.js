/* 
=====================
🔁 IIFE (Immediately Invoked Function Expression)
Pronounced "Iffy" - Runs immediately after it's defined.
Reasons:
1. Avoid polluting global scope
2. Create private variables and closures
3. Build modules and namespaces
=====================
*/

// Named IIFE
console.log("-------------- IIFE with a named function --------------");
(function namedFunction() {
  console.log("This is an IIFE with a named function");
})();

// Anonymous arrow function
console.log("-------------- IIFE with an anonymous arrow function --------------");
(() => {
  console.log("This is an IIFE with an anonymous arrow function");
})();

// Anonymous function expression
console.log("-------------- IIFE with an anonymous function expression --------------");
(function () {
  console.log("This is an IIFE with an anonymous function expression");
})();

// IIFE with parameters
console.log("-------------- IIFE with parameters --------------");
((param1, param2) => {
  console.log(`This is an IIFE with parameters: ${param1}, ${param2}`);
})("Hello", "World");

// IIFE with return value
console.log("-------------- IIFE with a return value --------------");
const result = (function () {
  return "This is an IIFE with a return value";
})();
console.log(result);

// IIFE with recursion
console.log("-------------- IIFE with recursion --------------");
(function recursiveFunction(n) {
  if (n <= 0) {
    console.log("Recursion base case reached\n");
    return;
  }
  console.log(`Recursion step: ${n}`);
  recursiveFunction(n - 1);
})(5);

// IIFE with closure
console.log("-------------- IIFE with a closure --------------");
const closureIIFE = (function () {
  let privateVariable = "This is a private variable";
  return function () {
    console.log(`Accessing closure variable: ${privateVariable}`);
  };
})();
closureIIFE();

// Module Pattern
console.log("-------------- IIFE Reason 3.1: The Module Pattern --------------");
const CounterModule = (function () {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    value: () => count,
  };
})();
CounterModule.increment();
CounterModule.increment();
console.log(CounterModule.value()); // 2
CounterModule.decrement();
console.log(CounterModule.value()); // 1

// Revealing Module Pattern
console.log("-------------- IIFE Reason 3.2: The Revealing Pattern --------------");
const RevealingModule = (function () {
  let privateData = "secret";
  function privateMethod() {
    return `Private: ${privateData}`;
  }
  function publicMethod() {
    return privateMethod();
  }
  return {
    show: publicMethod,
  };
})();
console.log(RevealingModule.show());

// Injecting a Namespace (browser safe version)
console.log("-------------- IIFE Reason 3.3: Injecting a Namespace --------------");
(function (ns) {
  ns.sayHello = function (name) {
    console.log(`Hello, ${name}!`);
  };
})(typeof window !== "undefined" ? (window.MyApp = window.MyApp || {}) : {});

if (typeof MyApp !== "undefined") {
  MyApp.sayHello("World"); // Hello, World!
}

// Extra: Modern Module with Arrow IIFE
console.log("-------------- IIFE Reason 3: Modern Module Pattern --------------");
const Score = (() => {
  let count = 0;
  return {
    current: () => count,
    increment: () => count++,
    reset: () => {
      count = 0;
    },
  };
})();
Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.reset();
console.log(Score.current());

// Injecting a Namespace (modern, globalThis safe)
console.log("-------------- Injecting a Namespace: globalThis safe --------------");
((namespace) => {
  namespace.count = 0;
  namespace.current = function () {
    return `App count is ${this.count}.`;
  };
  namespace.increment = function () {
    this.count++;
  };
  namespace.reset = function () {
    this.count = 0;
  };
})(typeof globalThis !== "undefined" ? (globalThis.App = globalThis.App || {}) : {});

App.increment();
console.log(App.current());
