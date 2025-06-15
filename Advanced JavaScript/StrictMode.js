"use Strict";

//Strict mode in Js

/**
 * Strict mode is a way to opt in to a restricted variant of JavaScript.
 * It helps in catching common coding errors and "unsafe" actions such as
 * using undeclared variables, assigning values to read-only properties,
 * and deleting undeletable properties.
 *  It can be applied to entire scripts or individual functions.
 *  Benefits of using strict mode:
 *   - Prevents the use of certain syntax that is considered problematic.
 *  - Throws errors for unsafe actions (e.g., assigning to a read-only property).
 *  - Disallows the use of global variables that are not declared.
 *  - Makes it easier to write secure JavaScript code.
 */

//Using strict mode locally
console.log(
  "---------------------------- Using strict mode locally ----------------------------"
);
function localStrictMode() {
  "use strict";
  // This will throw an error because 'x' is not declared
  // x = 3.14;
  console.log("Local strict mode is active.");
}

localStrictMode();

//Using strict mode globally
console.log(
  "---------------------------- Using strict mode globally ----------------------------"
);
("use strict");
function globalStrictMode() {
  // This will throw an error because 'y' is not declared
  // y = 3.14;
  console.log("Global strict mode is active.");
}
globalStrictMode();

// Silent errors in strict mode
console.log(
  "---------------------------- Silent errors in strict mode ----------------------------"
);
function silentErrors() {
  "use strict";
  let v = 10;
  //delete v; // This will throw an error in strict mode

  // This will throw an error because 'z' is not declared
  //z = 3.14;
  console.log("Silent errors in strict mode are caught.");
}
silentErrors();

// Assigning to read-only properties
console.log(
  "---------------------------- Assigning to read-only properties ----------------------------"
);
function readOnlyProperties() {
  "use strict";
  const obj = Object.freeze({ name: "John" });

  // This will throw an error because 'name' is read-only
  // obj.name = "Doe";

  console.log("Read-only properties cannot be modified in strict mode.");
}

readOnlyProperties(); // TypeError: Cannot assign to read only property 'name' of object '#<Object>'

console.log(
  "---------------------------- Deleting undeletable properties ----------------------------"
);
function undeletableProperties() {
  "use strict";

  // Attempting to delete a property that cannot be deleted
  // This will throw an error in strict mode
  //
  //delete Object.prototype;
  console.log("Undeletable properties cannot be deleted in strict mode.");
}

undeletableProperties(); // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// With  and eval
/**
 * eval() and with are JavaScript features that can be useful in specific situations, but they come with significant drawbacks and are generally discouraged in modern JavaScript development.
 */
console.log(
  "---------------------------- With and eval in strict mode ----------------------------"
);

function withAndEval() {
  "use strict";

  // Using 'with' is not allowed in strict mode
  // This will throw an error
  /*  with (Math) {
    console.log("Using 'with' in strict mode.");
  } */

  // Using 'eval' is allowed, but it behaves differently in strict mode
  eval("var x = 10;"); // This will create a local variable 'x'

  console.log("Eval works in strict mode, but 'with' does not.");
}

withAndEval(); // Eval works in strict mode, but 'with' does not.


// Securing JavaScript code
console.log(
  "---------------------------- Securing JavaScript code ----------------------------"
);

function secureJavaScript() {
  "use strict";

  // Example of a secure function
  function secureFunction() {
    // This function is secure and does not allow unsafe actions
    let secureVar = 42;

    // Attempting to use undeclared variables will throw an error
    // undeclaredVar = 10; // This will throw an error

    console.log("Secure JavaScript code is running safely.");
  }
  secureFunction();
} 
secureJavaScript(); // Secure JavaScript code is running safely.