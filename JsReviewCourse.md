# Js Review course

> Yahyaoui Med Aziz | 11052023.

<details>
  <summary>Links to resources:</summary>

  - All related exercises and projects are organized in the same repository and divided into levels.

  > Docs:
  - [Javascript Documentation](https://www.javascripttutorial.net/)
  - [Freecodecamp async-await ](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)
  - [js-functional-concepts-pipe-and-compose](https://dev.to/joelbonetr/js-functional-concepts-pipe-and-compose-1mho)
  - [Jestjs.io/docs](https://jestjs.io/docs/api)

  > Videos:

  - [1- JavaScript Tutorial Full Course ](https://www.youtube.com/watch?v=EerdGm-ehJQ)

  - [2- Advanced Javascript Concepts Dave Gray(PlayList)](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd)

</details>

---

## What is js ?

> JavaScript (JS) is a high-level, interpreted programming language that conforms to the ECMAScript specification.

## **Syntax and basic Js**

### **Variables and Constant**

```js
let num = 10;
let message = " this's a string";
var message2 = " var is the old way to create a variable"; // var doesn't follow the scope rule.(may conflict with another variable has the same naming)
const PI = 3.14; // constant
```

#### **Data types**

> to know a type of a variable:
> `typeof` operator.

##### Primitive datatype:

  ```javascript
  let num = 20;
  let str = "some text";
  console.log(typeof num); // number
  console.log(typeof str); // string
  ```

  > Data types in java script :

  ```javascript
  // String
  let myString = "Hello, world!";

  // Number
  let myNumber = 12345;

  // BigInt
  let myBigInt = 12345678901234567890n;

  // Boolean
  let myBoolean = true;

  // undefined
  let myUndefinedVariable;

  // Null
  let myNullVariable = null;

  // NaN
  let myNotANumberVariable = NaN;

  // Symbol (ES6)
  let mySymbol = Symbol("unique");

  // Const
  const PI = 3.14;
  ```

#### **Symbols (ES6)**

  The `Symbol` data type, introduced in ECMAScript 6 (ES6), is a primitive type used to create unique and immutable values. Symbols are primarily used as unique keys for object properties, helping to avoid naming collisions and enabling the creation of "hidden" or non-enumerable properties.

  ###### **Key Characteristics**

  - **Uniqueness:**  
    Every symbol created with `Symbol()` is guaranteed to be unique, even if they share the same description.
  - **Immutability:**  
    Once created, a symbol's value cannot be changed.
  - **Non-enumerability:**  
    Symbol-keyed properties are not included in standard object property enumerations (like `for...in` or `Object.keys()`).

  ##### **Creating Symbols**

  You can create a symbol using the `Symbol()` function. An optional description can be provided for debugging purposes.

  ```javascript
  const sym1 = Symbol();
  const sym2 = Symbol("myDescription");
  const sym3 = Symbol("myDescription");

  console.log(sym2 === sym3); // Output: false (each symbol is unique)
  ```

  ##### **Using Symbols as Object Property Keys**

  Symbols are often used as keys for object properties to avoid property name conflicts.

  ```javascript
  const mySymbol = Symbol("uniqueKey");
  const obj = {};

  obj[mySymbol] = "hidden value";
  console.log(obj[mySymbol]); // Output: "hidden value"
  ```

  - Symbol-keyed properties are not accessible via dot notation or string-based bracket notation:
    ```javascript
    console.log(obj.mySymbol); // undefined
    console.log(obj["mySymbol"]); // undefined
    ```

  ##### **Accessing Symbol Properties**

  To access symbol properties, you must use the symbol variable itself as the key.

  ```javascript
  console.log(obj[mySymbol]); // Output: "hidden value"
  ```

  ##### **Enumerating Symbol Properties**

  Symbol properties are not included in typical object iteration, but can be accessed using reflection methods:

  ```javascript
  const symbols = Object.getOwnPropertySymbols(obj);
  console.log(symbols); // Output: [Symbol(uniqueKey)]
  console.log(obj[symbols[0]]); // Output: "hidden value"
  ```

  ##### **Use Cases**

  - **Unique Object Property Keys:**  
    Prevents accidental property name collisions in objects, especially in libraries or frameworks.
  - **Simulating Private Properties:**  
    While not truly private, symbol properties are less accessible and not exposed during normal enumeration.
  - **Constants:**  
    Symbols can be used to define unique constants for use in switch statements or configuration.

  ##### **Example: Using Symbols for Constants**

  ```javascript
  const COLOR_RED = Symbol("red");
  const COLOR_BLUE = Symbol("blue");

  function getColorName(color) {
    switch (color) {
      case COLOR_RED:
        return "Red";
      case COLOR_BLUE:
        return "Blue";
      default:
        return "Unknown";
    }
  }

  console.log(getColorName(COLOR_RED)); // Output: "Red"
  ```

  ##### **Important Notes**

  - Symbols are not truly private; they can be discovered using `Object.getOwnPropertySymbols()`.
  - Symbols are not automatically converted to strings; attempting to concatenate them will throw an error.

> Symbols provide a powerful way to create unique, non-colliding property keys and are a valuable addition to JavaScript's type system, especially for library authors and advanced object design.

---

#### Structural datatype:

  ```javascript
  // Array
  let myArray = [1, 2, 3, 4, 5];

  // Map
  let myMap = new Map();
  myMap.set("key1", "value1");
  myMap.set("key2", "value2");

  // Set
  let mySet = new Set([1, 2, 3, 3, 4]);

  // WeakMap
  let myWeakMap = new WeakMap();
  let objKey = {};
  myWeakMap.set(objKey, "some value");

  // Date
  let myDate = new Date();

  // Object
  let myObject = {
    name: "John Doe",
    age: 30,
  };

  // Functions
  function myFunction() {
    return "Hello from function!";
  }
  ```

### **Operators**

- Arithmetic operators `(+,-,*,/,%)`
- Comparison operators `(==,===,!=,!==,>,<,<=,>=)`

> The strict equality operator `(===)` behaves identically to the abstract equality operator `(==)` except no type conversion is done, and the types must be the same to be considered equal.

- Logical operators `(!,&&,||)`

### **If-Statements**

> Stander If statement :

```javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a cold day.");
}
```

> Ternary Operator :

```javascript
let result;
result = true ? "truthy" : "falsy"; // change true with 0

console.log(`The result is = ${result}`);

let x = 10;
x < 5 ? console.log("less than five") : console.log("not less");
```

> There's other shortcut to the If statement called guard and default operators :

---

> The guard operator (&&):

```javascript
true && console.log("print this line");
false && console.log("do not print this line");

const message = false && "Say Hello !";
console.log(message);
```

> The default operator (OR,||):

```javascript
const currency = "USD" || "EUR";
console.log(currency); // USD

const currency2 = Undefined || "EUR";
console.log(currency2); // EUR
```

---

### **Arrays**

In JavaScript, arrays are used to store multiple values in a single variable. They can hold any type of data, including numbers, strings, objects, and even other arrays. Arrays are dynamic, meaning they can grow or shrink in size, and they are zero-indexed, which means the first element is at index 0.

#### Creating Arrays

There are several ways to create arrays in JavaScript:

1. **Using Array Literals**: This is the most common way to create arrays.

   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   ```

2. **Using the `Array` Constructor**:
   ```javascript
   let numbers = new Array(1, 2, 3, 4, 5);
   // Or with a specified length
   let emptyArray = new Array(5); // Creates an array with 5 empty slots
   ```

#### Accessing and Modifying Array Elements

- **Accessing Elements**: Use the bracket notation with the index to access elements.

  ```javascript
  console.log(fruits[0]); // Output: "Apple"
  ```

- **Modifying Elements**: Assign a new value to a specific index.
  ```javascript
  fruits[1] = "Blueberry";
  console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]
  ```

#### Array Properties

- **`length`**: The `length` property returns the number of elements in the array.
  ```javascript
  console.log(fruits.length); // Output: 3
  ```

#### Array Methods

#### 1. **Adding and Removing Elements**

- **`push(element1, ..., elementN)`**: Adds one or more elements to the end of the array and returns the new length.

  ```javascript
  fruits.push("Orange");
  console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Orange"]
  ```

- **`pop()`**: Removes the last element from the array and returns it.

  ```javascript
  let lastFruit = fruits.pop();
  console.log(lastFruit); // Output: "Orange"
  console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]
  ```

- **`unshift(element1, ..., elementN)`**: Adds one or more elements to the beginning of the array and returns the new length.

  ```javascript
  fruits.unshift("Strawberry");
  console.log(fruits); // Output: ["Strawberry", "Apple", "Blueberry", "Cherry"]
  ```

- **`shift()`**: Removes the first element from the array and returns it.
  ```javascript
  let firstFruit = fruits.shift();
  console.log(firstFruit); // Output: "Strawberry"
  console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]
  ```

#### 2. **Finding and Filtering Elements**

- **`indexOf(searchElement, fromIndex)`**: Returns the first index at which a given element can be found, or -1 if it is not present.

  ```javascript
  console.log(fruits.indexOf("Cherry")); // Output: 2
  ```

- **`lastIndexOf(searchElement, fromIndex)`**: Returns the last index of the element in the array, or -1 if it is not present.

  ```javascript
  fruits.push("Cherry");
  console.log(fruits.lastIndexOf("Cherry")); // Output: 3
  ```

- **`includes(searchElement, fromIndex)`**: Returns `true` if the array contains the specified element, `false` otherwise.

  ```javascript
  console.log(fruits.includes("Apple")); // Output: true
  ```

- **`find(callback)`**: Returns the first element in the array that satisfies the provided testing function.

  ```javascript
  let result = fruits.find((fruit) => fruit.startsWith("B"));
  console.log(result); // Output: "Blueberry"
  ```

- **`filter(callback)`**: Creates a new array with all elements that pass the test implemented by the provided function.
  ```javascript
  let filteredFruits = fruits.filter((fruit) => fruit.length > 5);
  console.log(filteredFruits); // Output: ["Blueberry", "Cherry"]
  ```

#### 3. **Transforming Arrays**

- **`map(callback)`**: Creates a new array populated with the results of calling a provided function on every element in the calling array.

  ```javascript
  let lengths = fruits.map((fruit) => fruit.length);
  console.log(lengths); // Output: [5, 9, 6, 6]
  ```

- **`reduce(callback, initialValue)`**: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
  ```javascript
  let totalLength = fruits.reduce(
    (accumulator, fruit) => accumulator + fruit.length,
    0
  );
  console.log(totalLength); // Output: 26
  ```

#### 4. **Combining and Slicing Arrays**

- **`concat(array1, ..., arrayN)`**: Merges two or more arrays into one new array.

  ```javascript
  let moreFruits = ["Pineapple", "Mango"];
  let allFruits = fruits.concat(moreFruits);
  console.log(allFruits); // Output: ["Apple", "Blueberry", "Cherry", "Cherry", "Pineapple", "Mango"]
  ```

- **`slice(start, end)`**: Returns a shallow copy of a portion of an array into a new array object.

  ```javascript
  let someFruits = fruits.slice(1, 3);
  console.log(someFruits); // Output: ["Blueberry", "Cherry"]
  ```

- **`splice(start, deleteCount, item1, ..., itemN)`**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
  ```javascript
  fruits.splice(1, 1, "Kiwi", "Lemon");
  console.log(fruits); // Output: ["Apple", "Kiwi", "Lemon", "Cherry"]
  ```

#### 5. **Sorting and Reversing**

- **`sort(compareFunction)`**: Sorts the elements of an array in place and returns the array.

  ```javascript
  fruits.sort();
  console.log(fruits); // Output: ["Apple", "Cherry", "Kiwi", "Lemon"]
  ```

- **`reverse()`**: Reverses the order of the elements in the array.
  ```javascript
  fruits.reverse();
  console.log(fruits); // Output: ["Lemon", "Kiwi", "Cherry", "Apple"]
  ```

#### 6. **Other Useful Methods**

- **`join(separator)`**: Joins all elements of an array into a string.

  ```javascript
  let fruitString = fruits.join(", ");
  console.log(fruitString); // Output: "Lemon, Kiwi, Cherry, Apple"
  ```

- **`forEach(callback)`**: Executes a provided function once for each array element.

  ```javascript
  fruits.forEach((fruit) => console.log(fruit));
  ```

- **`some(callback)`**: Tests whether at least one element in the array passes the test implemented by the provided function.

  ```javascript
  let hasLongName = fruits.some((fruit) => fruit.length > 5);
  console.log(hasLongName); // Output: true
  ```

- **`every(callback)`**: Tests whether all elements in the array pass the test implemented by the provided function.
  ```javascript
  let allLongNames = fruits.every((fruit) => fruit.length > 3);
  console.log(allLongNames); // Output: true
  ```

Arrays are a fundamental part of JavaScript, offering a wide range of methods to manipulate, transform, and access data efficiently. Understanding and using these methods effectively is crucial for working with data in JavaScript.

### **Loops**

JavaScript provides several types of loops to iterate over arrays, objects, strings, and other iterable structures. Loops are essential for performing repetitive tasks efficiently. Here's an overview of the main types of loops in JavaScript:

#### 1. **`for` Loop**

The `for` loop is the most traditional loop in JavaScript, typically used when the number of iterations is known.

**Syntax:**

```javascript
for (initialization; condition; increment) {
  // code to be executed in each iteration
}
```

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
```

#### 2. **`while` Loop**

The `while` loop continues to execute as long as the specified condition is true. It's useful when the number of iterations is not known beforehand.

**Syntax:**

```javascript
while (condition) {
  // code to be executed
}
```

**Example:**

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### 3. **`do...while` Loop**

The `do...while` loop is similar to the `while` loop, but it guarantees that the code block will be executed at least once, even if the condition is false from the beginning.

**Syntax:**

```javascript
do {
  // code to be executed
} while (condition);
```

**Example:**

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

#### 4. **`for...in` Loop**

The `for...in` loop is used to iterate over the enumerable properties of an object (including inherited properties). It's generally used for objects, but can be used with arrays (though not recommended for arrays due to performance issues and potential confusion with non-numeric properties).

**Syntax:**

```javascript
for (key in object) {
  // code to be executed
}
```

**Example:**

```javascript
let person = { name: "Alice", age: 25, city: "Wonderland" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 25
// city: Wonderland
```

#### 5. **`for...of` Loop**

The `for...of` loop is used to iterate over iterable objects (including arrays, strings, maps, sets, and more). Unlike `for...in`, it iterates over the values of the iterable, not the property names.

**Syntax:**

```javascript
for (value of iterable) {
  // code to be executed
}
```

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
// Output: 1, 2, 3, 4, 5
```

#### 6. **`Array.prototype.forEach()`**

The `forEach()` method executes a provided function once for each array element. It's a more functional approach to looping through arrays and is often used in place of traditional loops.

**Syntax:**

```javascript
array.forEach(callback);
```

**Example:**

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry
```

#### Loop Control Statements

##### **`break` Statement**

The `break` statement terminates the current loop and resumes execution at the next statement after the loop.

**Example:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

##### **`continue` Statement**

The `continue` statement skips the current iteration of the loop and proceeds to the next iteration.

**Example:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

#### Choosing the Right Loop

- Use `for` loops when you know the number of iterations.
- Use `while` loops when the condition to stop the loop is not based on a counter.
- Use `do...while` loops when you need to ensure the loop runs at least once.
- Use `for...in` loops to iterate over object properties.
- Use `for...of` loops to iterate over iterable objects like arrays and strings.
- Use `forEach()` for a functional approach to array iteration, especially when you don't need to break or continue the loop.

Each loop type has its own use case, and understanding these differences can help you write more efficient and readable code.

---

### **Functions**

> Functions are a fundamental concept in JavaScript, allowing you to group code into reusable blocks. Here are various aspects of functions in JavaScript:

```javascript
function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // Call the function
```
#### Function Declarations

A function declaration defines a named function and is hoisted to the top of its scope. This means that the function can be called before its declaration in the code.

##### Syntax

```javascript
function functionName(parameters) {
  // function body
}
```

##### Example

```javascript
console.log(greet()); // Output: Hello, world!

function greet() {
  return "Hello, world!";
}
```

In this example:

- The `greet` function is declared using a function declaration.
- The function can be called before its definition due to hoisting.

##### Key Characteristics

1. **Hoisting**: Function declarations are hoisted, meaning they are available throughout their scope, even before the line of code where they are defined.

2. **Named Functions**: Function declarations have names, which are used for debugging and recursion.

3. **Clear Syntax**: The syntax is straightforward and easily readable.

#### Parameters

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
```

#### Return Values

```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8
```

#### Default Parameters (ES6+)

```javascript
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5)); // Output: 10
console.log(multiply(5, 3)); // Output: 15
```

#### Rest Parameters (ES6+)

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

#### Function Scope

```javascript
function scopeExample() {
  let x = 10;
  if (true) {
    let y = 20; // y is only accessible within this block
    console.log(x + y);
  }
  console.log(x);
  // console.log(y); // This would throw an error
}

scopeExample();
```
---

#### Nested function scope

Functions can be nested within other functions, creating a nested function scope. This nesting creates a hierarchy of scopes, where the inner function has access to variables and functions defined in its own scope, as well as those in the outer (enclosing) function's scope and the global scope. However, the reverse is not true; outer functions cannot access the inner function's scope.

##### Example of Nested Function Scope

```javascript
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    let innerVariable = "I am from the inner function";

    console.log(outerVariable); // Accessing outer function's variable
    console.log(innerVariable); // Accessing inner function's variable
  }

  innerFunction();
  // console.log(innerVariable); // Uncaught ReferenceError: innerVariable is not defined
}

outerFunction();
```

**Key Points:**

1. **Inner Function Access**: The `innerFunction` can access both `outerVariable` and `innerVariable`. This is because `innerFunction` is defined within `outerFunction`, giving it access to the outer function's scope.
2. **Outer Function Access**: The `outerFunction` cannot access `innerVariable` because it is defined within `innerFunction`. Variables are only accessible within the scope they are defined in or any nested (inner) scopes.

##### Scope Chain

When a variable is accessed, JavaScript searches for the variable in the current function's scope. If not found, it moves up to the enclosing function's scope, continuing this process until it reaches the global scope. This process is known as the **scope chain**.

##### Example with Multiple Nesting Levels

```javascript
let globalVar = "I am a global variable";

function outerFunction() {
  let outerVar = "I am an outer function variable";

  function middleFunction() {
    let middleVar = "I am a middle function variable";

    function innerFunction() {
      let innerVar = "I am an inner function variable";

      console.log(globalVar); // Accessible
      console.log(outerVar); // Accessible
      console.log(middleVar); // Accessible
      console.log(innerVar); // Accessible
    }

    innerFunction();

    // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
  }

  middleFunction();
  // console.log(middleVar); // Uncaught ReferenceError: middleVar is not defined
}

outerFunction();
```

In this example:

- `innerFunction` can access variables from its own scope (`innerVar`), its parent (`middleVar`), grandparent (`outerVar`), and the global scope (`globalVar`).
- `middleFunction` can access `outerVar` and `globalVar`, but not `innerVar`.
- `outerFunction` can access `globalVar`, but not `middleVar` or `innerVar`.

##### Conclusion

Nested functions and their scopes are fundamental concepts in JavaScript, enabling powerful features like closures. Understanding how scope and scope chains work is crucial for managing variables and avoiding common pitfalls such as accidental variable shadowing or leaks. The use of closures can lead to more flexible and reusable code, especially in functional programming paradigms.

---

#### Built-in functions for mathematical

JavaScript's `Math` object provides a wide range of built-in functions for mathematical operations. These functions can perform basic arithmetic, trigonometry, logarithms, and more. The `Math` object is static, meaning you cannot create an instance of it, and all properties and methods are accessed directly from the object.

Here are some commonly used functions and properties available in the `Math` object:

##### Properties

- **`Math.PI`**: The constant π (pi), approximately equal to 3.14159.
- **`Math.E`**: Euler's number, the base of natural logarithms, approximately equal to 2.71828.
- **`Math.LN2`**: The natural logarithm of 2, approximately 0.693.
- **`Math.LN10`**: The natural logarithm of 10, approximately 2.302.
- **`Math.LOG2E`**: The base-2 logarithm of E, approximately 1.442.
- **`Math.LOG10E`**: The base-10 logarithm of E, approximately 0.434.
- **`Math.SQRT2`**: The square root of 2, approximately 1.414.
- **`Math.SQRT1_2`**: The square root of 1/2, approximately 0.707.

##### Methods

###### Basic Arithmetic

- **`Math.abs(x)`**: Returns the absolute value of `x`.

  ```javascript
  console.log(Math.abs(-5)); // Output: 5
  ```

- **`Math.round(x)`**: Rounds `x` to the nearest integer.

  ```javascript
  console.log(Math.round(4.7)); // Output: 5
  ```

- **`Math.ceil(x)`**: Rounds `x` up to the next largest integer.

  ```javascript
  console.log(Math.ceil(4.1)); // Output: 5
  ```

- **`Math.floor(x)`**: Rounds `x` down to the next smallest integer.

  ```javascript
  console.log(Math.floor(4.9)); // Output: 4
  ```

- **`Math.trunc(x)`**: Returns the integer part of `x`, removing any fractional digits.

  ```javascript
  console.log(Math.trunc(4.9)); // Output: 4
  ```

- **`Math.sign(x)`**: Returns the sign of `x`, indicating whether it is positive, negative, or zero.
  ```javascript
  console.log(Math.sign(-5)); // Output: -1
  ```

#### Exponential and Logarithmic Functions

- **`Math.exp(x)`**: Returns `e` raised to the power of `x`.

  ```javascript
  console.log(Math.exp(1)); // Output: 2.718281828459045 (approximately Math.E)
  ```

- **`Math.log(x)`**: Returns the natural logarithm (base `e`) of `x`.

  ```javascript
  console.log(Math.log(Math.E)); // Output: 1
  ```

- **`Math.log10(x)`**: Returns the base-10 logarithm of `x`.

  ```javascript
  console.log(Math.log10(1000)); // Output: 3
  ```

- **`Math.log2(x)`**: Returns the base-2 logarithm of `x`.

  ```javascript
  console.log(Math.log2(8)); // Output: 3
  ```

- **`Math.pow(base, exponent)`**: Returns `base` raised to the power of `exponent`.

  ```javascript
  console.log(Math.pow(2, 3)); // Output: 8
  ```

- **`Math.sqrt(x)`**: Returns the square root of `x`.
  ```javascript
  console.log(Math.sqrt(16)); // Output: 4
  ```

###### Trigonometric Functions

- **`Math.sin(x)`**: Returns the sine of `x` (x is in radians).

  ```javascript
  console.log(Math.sin(Math.PI / 2)); // Output: 1
  ```

- **`Math.cos(x)`**: Returns the cosine of `x` (x is in radians).

  ```javascript
  console.log(Math.cos(Math.PI)); // Output: -1
  ```

- **`Math.tan(x)`**: Returns the tangent of `x` (x is in radians).

  ```javascript
  console.log(Math.tan(Math.PI / 4)); // Output: 1
  ```

- **`Math.asin(x)`**: Returns the arcsine of `x` (in radians).

  ```javascript
  console.log(Math.asin(1)); // Output: 1.5707963267948966 (π/2)
  ```

- **`Math.acos(x)`**: Returns the arccosine of `x` (in radians).

  ```javascript
  console.log(Math.acos(1)); // Output: 0
  ```

- **`Math.atan(x)`**: Returns the arctangent of `x` (in radians).

  ```javascript
  console.log(Math.atan(1)); // Output: 0.7853981633974483 (π/4)
  ```

- **`Math.atan2(y, x)`**: Returns the angle in the plane (in radians) between the positive x-axis and the ray to the point `(x, y)`.
  ```javascript
  console.log(Math.atan2(1, 1)); // Output: 0.7853981633974483 (π/4)
  ```

###### Utility Functions

- **`Math.min(...values)`**: Returns the smallest of zero or more numbers.

  ```javascript
  console.log(Math.min(1, 2, 3, -1)); // Output: -1
  ```

- **`Math.max(...values)`**: Returns the largest of zero or more numbers.

  ```javascript
  console.log(Math.max(1, 2, 3, -1)); // Output: 3
  ```

- **`Math.random()`**: Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
  ```javascript
  console.log(Math.random()); // Output: (e.g.,) 0.123456789
  ```

These functions are part of the `Math` object and are used without creating an instance of `Math`. They cover a wide range of mathematical operations, making them very useful for calculations in JavaScript applications.

### **String methods**

JavaScript provides a variety of string methods to manipulate and work with text. These methods are called on string objects or string literals and return a new string or a modified version of the original string. Here are some of the most commonly used JavaScript string methods:

#### **Accessing Characters**

- **`charAt(index)`**: Returns the character at the specified index.

  ```javascript
  const str = "Hello";
  console.log(str.charAt(0)); // Output: "H"
  ```

- **`charCodeAt(index)`**: Returns the Unicode of the character at the specified index.

  ```javascript
  console.log(str.charCodeAt(0)); // Output: 72 (Unicode for "H")
  ```

- **`[index]`**: Returns the character at the specified index (modern browsers support this syntax).
  ```javascript
  console.log(str[0]); // Output: "H"
  ```

#### **String Length**

- **`length`**: Returns the length of the string.
  ```javascript
  console.log(str.length); // Output: 5
  ```

#### **Finding Substrings**

- **`indexOf(searchValue, fromIndex)`**: Returns the index of the first occurrence of `searchValue` in the string, starting the search at `fromIndex`. Returns -1 if not found.

  ```javascript
  console.log(str.indexOf("l")); // Output: 2
  console.log(str.indexOf("l", 3)); // Output: 3
  ```

- **`lastIndexOf(searchValue, fromIndex)`**: Returns the index of the last occurrence of `searchValue` in the string, searching backward from `fromIndex`. Returns -1 if not found.

  ```javascript
  console.log(str.lastIndexOf("l")); // Output: 3
  ```

- **`includes(searchValue, fromIndex)`**: Returns `true` if the string contains `searchValue`, starting the search at `fromIndex`; otherwise, returns `false`.

  ```javascript
  console.log(str.includes("ell")); // Output: true
  console.log(str.includes("z")); // Output: false
  ```

- **`startsWith(searchString, position)`**: Checks if the string starts with `searchString`, optionally starting at `position`.

  ```javascript
  console.log(str.startsWith("He")); // Output: true
  ```

- **`endsWith(searchString, length)`**: Checks if the string ends with `searchString`, optionally considering the first `length` characters.
  ```javascript
  console.log(str.endsWith("lo")); // Output: true
  ```

#### **Extracting Substrings**

- **`slice(start, end)`**: Extracts a part of the string and returns it as a new string, without modifying the original string.

  ```javascript
  console.log(str.slice(1, 4)); // Output: "ell"
  ```

- **`substring(start, end)`**: Similar to `slice`, but `substring` swaps the arguments if `start` is greater than `end`.

  ```javascript
  console.log(str.substring(1, 4)); // Output: "ell"
  console.log(str.substring(4, 1)); // Output: "ell"
  ```

- **`substr(start, length)`**: Extracts `length` characters from `start`. Note that this method is considered deprecated.
  ```javascript
  console.log(str.substr(1, 3)); // Output: "ell"
  ```

#### **Modifying Strings**

- **`toLowerCase()`**: Converts the string to lowercase.

  ```javascript
  console.log(str.toLowerCase()); // Output: "hello"
  ```

- **`toUpperCase()`**: Converts the string to uppercase.

  ```javascript
  console.log(str.toUpperCase()); // Output: "HELLO"
  ```

- **`trim()`**: Removes whitespace from both ends of the string.

  ```javascript
  const strWithSpaces = "  Hello  ";
  console.log(strWithSpaces.trim()); // Output: "Hello"
  ```

- **`trimStart()`**: Removes whitespace from the beginning of the string.

  ```javascript
  console.log(strWithSpaces.trimStart()); // Output: "Hello  "
  ```

- **`trimEnd()`**: Removes whitespace from the end of the string.

  ```javascript
  console.log(strWithSpaces.trimEnd()); // Output: "  Hello"
  ```

- **`replace(searchValue, newValue)`**: Replaces occurrences of `searchValue` with `newValue`. If `searchValue` is a string, only the first occurrence is replaced; if it's a regular expression with the global flag (`g`), all matches are replaced.

  ```javascript
  console.log(str.replace("l", "r")); // Output: "Hero"
  console.log(str.replace(/l/g, "r")); // Output: "Herro"
  ```

- **`replaceAll(searchValue, newValue)`**: Replaces all occurrences of `searchValue` with `newValue`.

  ```javascript
  console.log(str.replaceAll("l", "r")); // Output: "Herro"
  ```

- **`concat(...strings)`**: Concatenates the string with other strings and returns a new string.
  ```javascript
  const greeting = "Hello";
  const name = "World";
  console.log(greeting.concat(", ", name, "!")); // Output: "Hello, World!"
  ```

#### **Splitting Strings**

- **`split(separator, limit)`**: Splits the string into an array of substrings using `separator` as the delimiter. The optional `limit` parameter specifies the maximum number of splits.
  ```javascript
  const sentence = "The quick brown fox";
  const words = sentence.split(" ");
  console.log(words); // Output: ["The", "quick", "brown", "fox"]
  ```

#### **Matching and Searching**

- **`match(regex)`**: Retrieves the result of matching a string against a regular expression.

  ```javascript
  const match = str.match(/l/g);
  console.log(match); // Output: ["l", "l"]
  ```

- **`matchAll(regex)`**: Returns an iterator of all results matching a string against a regular expression, including capturing groups.

  ```javascript
  const matches = str.matchAll(/l/g);
  console.log(Array.from(matches)); // Output: [["l"], ["l"]]
  ```

- **`search(regex)`**: Searches the string for a match against a regular expression and returns the index of the first match or -1 if not found.
  ```javascript
  console.log(str.search(/l/)); // Output: 2
  ```

#### **Checking Content**

- **`localeCompare(compareString, locales, options)`**: Compares two strings in the current locale. Returns a number indicating whether the reference string comes before, after, or is the same as the given string in sort order.
  ```javascript
  console.log("a".localeCompare("b")); // Output: -1
  ```

These methods provide a rich set of tools for manipulating and working with strings in JavaScript. Whether you need to find, replace, split, or transform strings, there's likely a method to help you achieve your goal.

---

### **Objects**

> An object is a collection of properties and each property has its own name associated with a value.

---

> Auto-Boxing
> An object can has a property and methods

```javascript
let person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hi! My name is ${this.name}`);
  },
};
```

--> And other values also have a properties and methods, like strings :

```javascript
let str = "Hello";
let value = str.length; // length iS one of the method of the string
console.log(value); // 5
console.log(str.toUpperCase);
```

--> The string 'hello' is a special object like an object that auto-converts to a string called auto-boxing.

--> Auto-boxing works only with numbers and strings. It doesn't work with 'null' or 'undefined', as that would return an error.

---

> Objects are references :

--> The name of the object actually it reference to body in the object inside the memory like a shortcut.

```javascript
let objA = {};
let objB = objA; // reference
/*Now both objA and objB refer to the same object in memory
ObjB = objA ==> also which is called copy by reference*/
objB.x = 10;
console.log(objA.x); // Output: 10

const obj1 = {
  message: "Hello there !",
};
const obj2 = obj1;
console.log(obj2);

obj1.message = "Good job !";
console.log(obj1);
console.log(obj2);
```

> --> We are able to change the 'message' property even we use 'const', That because the 'obj1' just contain a reference that point to the object. So 'const' prevent us from changing the reference in 'obj1', but doesn't prevent us form reaching into the reference and changing the object that pointing to.

---

> We can't compare object directly:

```javascript
const obj1 = {
  message: "Hello there !",
};
const obj2 = obj1;
console.log(obj2);

obj1.message = "Good job !";

const obj3 = {
  message: "Good job !",
};

console.log(obj1 === obj3); // false
// because they have different references even they have the same value.
console.log(obj1 == obj2); // true
// they point to the same reference in memory.
```

---

> Shortcuts of an object :

```javascript
const obj4 = {
  message: "anything...",
};

// const message = obj4.message;
const { message } = obj4; // This is called destructuring, e.g., { blabla }
console.log(message);

const obj5 = {
  name: "John",
  age: 30,
};

const { name, age } = obj5;
console.log(`${name}, ${age}`);
```

> --> Destructuring : is the easier way to take properties out of an object.

---

> Shorthand property :

```javascript
const obj4 = {
  message: "anything...",
};

const obj6 = {
  //message: message
  message, // --> Shorthand property
};

console.log(obj6);
```

---

> Shorthand method :

```javascript
const obj7 = {
  message,
  method: function Func1() {
    console.log("method");
  },
  method2() {
    // this's the short way to create a method.
    console.log("method2");
  },
};

obj7.method();
obj7.method2();
```

#### Creating Objects Dynamically

Can create and manipulate objects dynamically, adding or removing properties and methods at runtime. This flexibility is a powerful feature of JavaScript's object system. Let's explore some common techniques for working with dynamic objects.

##### Using Object Literals

You can create objects dynamically in JavaScript using object literals, the `Object` constructor, or other functions.

```javascript
const dynamicObject = {
  name: "Alice",
  age: 30,
};

console.log(dynamicObject); // Output: { name: "Alice", age: 30 }
```

##### Using the `Object` Constructor

```javascript
const dynamicObject = new Object();
dynamicObject.name = "Alice";
dynamicObject.age = 30;

console.log(dynamicObject); // Output: { name: "Alice", age: 30 }
```

##### 2. Adding and Modifying Properties

You can add or modify properties of an object at any time.

##### Adding Properties

```javascript
dynamicObject.gender = "female";
console.log(dynamicObject); // Output: { name: "Alice", age: 30, gender: "female" }
```

##### Modifying Properties

```javascript
dynamicObject.age = 31;
console.log(dynamicObject); // Output: { name: "Alice", age: 31, gender: "female" }
```

##### 3. Removing Properties

You can remove properties from an object using the `delete` operator.

```javascript
delete dynamicObject.gender;
console.log(dynamicObject); // Output: { name: "Alice", age: 31 }
```

##### 4. Using Bracket Notation

Bracket notation is useful when property names are dynamic or not valid identifiers.

```javascript
dynamicObject["first name"] = "Alice";
console.log(dynamicObject); // Output: { name: "Alice", age: 31, "first name": "Alice" }

const propertyName = "lastName";
dynamicObject[propertyName] = "Smith";
console.log(dynamicObject); // Output: { name: "Alice", age: 31, "first name": "Alice", lastName: "Smith" }
```

##### 5. Iterating Over Object Properties

You can iterate over the properties of an object using a `for...in` loop or `Object.keys()`.

##### Using `for...in` Loop

```javascript
for (let key in dynamicObject) {
  console.log(`${key}: ${dynamicObject[key]}`);
}
// Output:
// name: Alice
// age: 31
// first name: Alice
// lastName: Smith
```

##### Using `Object.keys()` and `forEach`

```javascript
Object.keys(dynamicObject).forEach((key) => {
  console.log(`${key}: ${dynamicObject[key]}`);
});
// Output:
// name: Alice
// age: 31
// first name: Alice
// lastName: Smith
```

##### 6. Merging Objects

You can merge objects using `Object.assign()` or the spread operator.

###### Using `Object.assign()`

```javascript
const additionalInfo = { city: "New York", country: "USA" };
Object.assign(dynamicObject, additionalInfo);
console.log(dynamicObject); // Output: { name: "Alice", age: 31, "first name": "Alice", lastName: "Smith", city: "New York", country: "USA" }
```

##### Using the Spread Operator

```javascript
const mergedObject = { ...dynamicObject, ...additionalInfo };
console.log(mergedObject); // Output: { name: "Alice", age: 31, "first name": "Alice", lastName: "Smith", city: "New York", country: "USA" }
```

##### 7. Checking for Property Existence

You can check if a property exists in an object using the `in` operator or `hasOwnProperty()` method.

##### Using the `in` Operator

```javascript
console.log("name" in dynamicObject); // Output: true
console.log("address" in dynamicObject); // Output: false
```

##### Using `hasOwnProperty()`

```javascript
console.log(dynamicObject.hasOwnProperty("age")); // Output: true
console.log(dynamicObject.hasOwnProperty("address")); // Output: false
```

These techniques demonstrate the dynamic nature of JavaScript objects, allowing you to create, modify, and manage data structures flexibly.

Cloning objects in JavaScript involves creating a copy of an existing object. There are different ways to clone objects, each with its own advantages and limitations. Here are some common methods:

##### 1. **Shallow Cloning**

Shallow cloning creates a new object with the same properties as the original object. However, if the object contains references to other objects, those references are not copied but shared between the original and the clone.

#### Using Object.assign()

```javascript
const original = { name: "Alice", age: 30 };
const clone = Object.assign({}, original);

console.log(clone); // Output: { name: "Alice", age: 30 }
original.name = "Bob";
console.log(original); // Output: { name: "Bob", age: 30 }
console.log(clone); // Output: { name: "Alice", age: 30 }
```

#### Using Spread Operator

```javascript
const original = { name: "Alice", age: 30 };
const clone = { ...original };

console.log(clone); // Output: { name: "Alice", age: 30 }
original.age = 31;
console.log(original); // Output: { name: "Alice", age: 31 }
console.log(clone); // Output: { name: "Alice", age: 30 }
```

**Note:** Both `Object.assign()` and the spread operator perform shallow copies. If the object contains nested objects, these nested objects are still shared between the original and the clone.

##### 2. **Deep Cloning**

Deep cloning involves creating a complete copy of the object, including all nested objects. This ensures that changes to the clone do not affect the original object and vice versa.

#### Using JSON Methods

This method is simple but has limitations, such as not copying methods, special object types like `Date`, `Set`, `Map`, `undefined`, `Infinity`, `NaN`, and circular references.

```javascript
const original = { name: "Alice", details: { age: 30, city: "New York" } };
const clone = JSON.parse(JSON.stringify(original));

console.log(clone); // Output: { name: "Alice", details: { age: 30, city: "New York" } }
original.details.age = 31;
console.log(original); // Output: { name: "Alice", details: { age: 31, city: "New York" } }
console.log(clone); // Output: { name: "Alice", details: { age: 30, city: "New York" } }
```

#### Using a Custom Function

For a more robust deep clone, you can use a recursive function to handle all types of objects, including arrays and special cases. Here's a simple example:

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const original = {
  name: "Alice",
  details: { age: 30, dateOfBirth: new Date("1990-01-01") },
};
const clone = deepClone(original);

console.log(clone); // Output: { name: "Alice", details: { age: 30, dateOfBirth: Date("1990-01-01") } }
original.details.age = 31;
console.log(original); // Output: { name: "Alice", details: { age: 31, dateOfBirth: Date("1990-01-01") } }
console.log(clone); // Output: { name: "Alice", details: { age: 30, dateOfBirth: Date("1990-01-01") } }
```

##### 3. **Using Libraries**

There are also libraries like Lodash that provide deep cloning utilities. For example:

```javascript
const _ = require("lodash");
const original = { name: "Alice", details: { age: 30 } };
const clone = _.cloneDeep(original);

console.log(clone); // Output: { name: "Alice", details: { age: 30 } }
```

Lodash's `_.cloneDeep` method is a robust solution for deep cloning, handling most edge cases and special types.

##### Conclusion

Choosing between shallow and deep cloning depends on your specific use case. If the object contains only primitive types or you don't mind shared references for nested objects, shallow cloning is sufficient. For more complex objects with nested structures or if you want a complete independent copy, deep cloning is the way to go.

---

### **The Date Object**

The `Date` object in JavaScript is used to work with dates and times. It provides methods for getting and setting the year, month, day, hour, minute, second, and millisecond, as well as for formatting and parsing dates.

#### Creating Date Objects

There are several ways to create a new `Date` object:

1. **Current Date and Time:**

   ```javascript
   let now = new Date();
   console.log(now); // Output: Current date and time
   ```

2. **Specific Date and Time:**
   You can specify the year, month, day, hours, minutes, seconds, and milliseconds:

   ```javascript
   let specificDate = new Date(2023, 6, 26, 10, 30, 0, 0); // July 26, 2023, 10:30:00 AM
   console.log(specificDate);
   ```

   Note: Months are zero-indexed (0 for January, 11 for December).

3. **Milliseconds since Epoch:**
   You can create a date object using the number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix epoch):

   ```javascript
   let dateFromEpoch = new Date(1609459200000); // January 1, 2021, 00:00:00 UTC
   console.log(dateFromEpoch);
   ```

4. **Date String:**
   You can create a date object using a date string:
   ```javascript
   let dateFromString = new Date("2023-07-26T10:30:00");
   console.log(dateFromString);
   ```

#### Methods of the Date Object

The `Date` object has various methods to access and manipulate dates:

#### 1. **Get Methods**

- `getFullYear()`: Returns the year.

  ```javascript
  console.log(now.getFullYear()); // Output: 2023
  ```

- `getMonth()`: Returns the month (0-11).

  ```javascript
  console.log(now.getMonth()); // Output: 6 (July)
  ```

- `getDate()`: Returns the day of the month (1-31).

  ```javascript
  console.log(now.getDate()); // Output: 26
  ```

- `getDay()`: Returns the day of the week (0-6, where 0 is Sunday).

  ```javascript
  console.log(now.getDay()); // Output: 3 (Wednesday)
  ```

- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`: Return the respective time units.

  ```javascript
  console.log(now.getHours()); // Output: (e.g.,) 10
  ```

- `getTime()`: Returns the number of milliseconds since the Unix epoch.

  ```javascript
  console.log(now.getTime()); // Output: (e.g.,) 1690362600000
  ```

- `getTimezoneOffset()`: Returns the time difference between UTC time and local time, in minutes.
  ```javascript
  console.log(now.getTimezoneOffset()); // Output: (e.g.,) -240
  ```

#### 2. **Set Methods**

- `setFullYear(year, [month], [date])`: Sets the full year.

  ```javascript
  now.setFullYear(2025);
  console.log(now.getFullYear()); // Output: 2025
  ```

- `setMonth(month, [date])`: Sets the month (0-11).

  ```javascript
  now.setMonth(11); // December
  console.log(now.getMonth()); // Output: 11
  ```

- `setDate(date)`: Sets the day of the month (1-31).

  ```javascript
  now.setDate(15);
  console.log(now.getDate()); // Output: 15
  ```

- `setHours(hours, [min], [sec], [ms])`: Sets the hours.

  ```javascript
  now.setHours(15);
  console.log(now.getHours()); // Output: 15
  ```

- `setMinutes(minutes, [sec], [ms])`: Sets the minutes.

  ```javascript
  now.setMinutes(45);
  console.log(now.getMinutes()); // Output: 45
  ```

- `setSeconds(seconds, [ms])`: Sets the seconds.

  ```javascript
  now.setSeconds(30);
  console.log(now.getSeconds()); // Output: 30
  ```

- `setMilliseconds(ms)`: Sets the milliseconds.

  ```javascript
  now.setMilliseconds(500);
  console.log(now.getMilliseconds()); // Output: 500
  ```

- `setTime(milliseconds)`: Sets the date and time by adding the specified number of milliseconds since January 1, 1970.
  ```javascript
  now.setTime(1609459200000); // Sets to January 1, 2021, 00:00:00 UTC
  console.log(now);
  ```

#### Formatting Dates

There is no built-in method in JavaScript for custom date formatting. However, you can use methods like `toLocaleDateString()`, `toLocaleTimeString()`, and `toLocaleString()` to get localized representations of dates and times. For custom formatting, you'll typically need to manually format the components.

- **`toLocaleDateString(locales, options)`**: Returns a string with a language-sensitive representation of the date portion of the date.

  ```javascript
  console.log(now.toLocaleDateString("en-US")); // Output: (e.g.,) "7/26/2023"
  ```

- **`toLocaleTimeString(locales, options)`**: Returns a string with a language-sensitive representation of the time portion of the date.

  ```javascript
  console.log(now.toLocaleTimeString("en-US")); // Output: (e.g.,) "10:30:00 AM"
  ```

- **`toLocaleString(locales, options)`**: Returns a string with a language-sensitive representation of the date and time.

  ```javascript
  console.log(now.toLocaleString("en-US")); // Output: (e.g.,) "7/26/2023, 10:30:00 AM"
  ```

- **`toISOString()`**: Returns a string in simplified extended ISO format (ISO 8601).

  ```javascript
  console.log(now.toISOString()); // Output: (e.g.,) "2023-07-26T14:30:00.000Z"
  ```

- **`toUTCString()`**: Returns a string representing the date in UTC format.
  ```javascript
  console.log(now.toUTCString()); // Output: (e.g.,) "Wed, 26 Jul 2023 14:30:00 GMT"
  ```

#### Parsing Dates

JavaScript provides methods to parse date strings into `Date` objects.

- **`Date.parse(dateString)`**: Parses a date string and returns the number of milliseconds since the Unix epoch. If the string cannot be parsed, it returns `NaN`.

  ```javascript
  let ms = Date.parse("July 26, 2023");
  console.log(new Date(ms)); // Output: Wed Jul 26 2023 00:00:00 GMT+0000 (UTC)
  ```

- **`Date.UTC(year, month, day, hour, minute, second, millisecond)`**: Returns the number of milliseconds since the Unix epoch for the given UTC date.
  ```javascript
  let utcDate = new Date(Date.UTC(2023, 6, 26, 14, 30, 0));
  console.log(utcDate); // Output: Wed Jul 26 2023 14:30:00 GMT+0000 (UTC)
  ```

#### Date Arithmetic

You can perform date arithmetic by using the millisecond value obtained from `getTime()` or `Date.now()`. For example, to add one day to a date:

```javascript
let tomorrow = new Date();
tomorrow.setTime(now.getTime() + 24 * 60 * 60 * 1000);
console.log(tomorrow);
```

The `Date` object in JavaScript is versatile and can be used for a wide range of date and time operations. However, for more advanced date manipulation and formatting, you might consider using libraries like [Moment.js](https://momentjs.com/), [date-fns](https://date-fns.org/), or [Luxon](https://moment.github.io/luxon/), which offer more comprehensive features and ease of use.

---

### **Document Object Model (DOM)**

> - DOM is a programming interface for web documents. It represents and manipulates the structure of a document.
> - DOM also has properties and methods.
> - The DOM combines JS and HTML together.
> - We can access elements in our html using javascript.
> - HTML is converted to JS object.

##### Syntax rule for the DOM

> - Method and Properties :

```javascript
console.log(typeof document.body); // object

console.log(document.title); // page title
console.log(document.head); // <head> element
console.log(document.body); // <body> element
```

#### 1. **Accessing Elements**

You can access elements in the DOM using various methods:

- **`getElementById`**: Selects a single element with a specific ID.

  ```javascript
  const element = document.getElementById("myId");
  ```

- **`getElementsByClassName`**: Selects all elements with a specific class name.

  ```javascript
  const elements = document.getElementsByClassName("myClass");
  ```

- **`getElementsByTagName`**: Selects all elements with a specific tag name.

  ```javascript
  const elements = document.getElementsByTagName("div");
  ```

- **`querySelector`**: Selects the first element that matches a CSS selector.

  ```javascript
  const element = document.querySelector(".myClass");
  ```

- **`querySelectorAll`**: Selects all elements that match a CSS selector.
  ```javascript
  const elements = document.querySelectorAll(".myClass");
  ```

#### 2. **Manipulating Content**

- **`textContent`**: Sets or gets the text content of an element.

  ```javascript
  element.textContent = "New text";
  ```

- **`innerHTML`**: Sets or gets the HTML content of an element.
  ```javascript
  element.innerHTML = "<span>New HTML</span>";
  ```

#### 3. **Manipulating Attributes**

- **`setAttribute`**: Sets the value of an attribute.

  ```javascript
  element.setAttribute("src", "image.png");
  ```

- **`getAttribute`**: Gets the value of an attribute.

  ```javascript
  const src = element.getAttribute("src");
  ```

- **`removeAttribute`**: Removes an attribute.
  ```javascript
  element.removeAttribute("src");
  ```

#### 4. **Manipulating Styles**

- **`style`**: Accesses the inline styles of an element.
  ```javascript
  element.style.color = "blue";
  element.style.display = "none";
  ```

#### 5. **Creating and Adding Elements**

- **`createElement`**: Creates a new element.

  ```javascript
  const newDiv = document.createElement("div");
  ```

- **`appendChild`**: Adds a new child element to a parent element.

  ```javascript
  document.body.appendChild(newDiv);
  ```

- **`insertBefore`**: Inserts a new element before an existing one.
  ```javascript
  document.body.insertBefore(newDiv, existingElement);
  ```

#### 6. **Removing Elements**

- **`removeChild`**: Removes a child element from its parent.
  ```javascript
  parentElement.removeChild(childElement);
  ```

#### 7. **Event Handling**

You can add event listeners to elements to respond to user interactions.

- **`addEventListener`**: Adds an event listener to an element.
  ```javascript
  element.addEventListener("click", function () {
    console.log("Element clicked!");
  });
  ```

##### Example: Changing the Background Color

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
    <style>
      .highlight {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p id="paragraph">Click the button to highlight this text.</p>
    <button id="button">Highlight</button>

    <script>
      document.getElementById("button").addEventListener("click", function () {
        document.getElementById("paragraph").classList.toggle("highlight");
      });
    </script>
  </body>
</html>
```

---

### **HTML, CSS, and JavaScript Together**

---

### **JavaScript Regex**

Regular expressions (regex) in JavaScript share many similarities with regular expressions in other programming languages and systems, but there are some differences. These differences mainly arise from language-specific features and the specific implementations of regex engines. Here are some key points:

#### Common Features

1. **Basic Syntax and Operators**: Most of the basic syntax and operators are consistent across different regex engines. This includes:

   - Character classes (e.g., `[a-z]`)
   - Quantifiers (e.g., `*`, `+`, `?`, `{n}`, `{n,m}`)
   - Anchors (e.g., `^` for start of string, `$` for end of string)
   - Grouping and capturing (e.g., `(abc)`)
   - Escaping special characters (e.g., `\.` to match a literal dot)
   - Alternation (e.g., `a|b`)

2. **Common Escape Sequences**: Many escape sequences, such as `\d` for digits, `\w` for word characters, and `\s` for whitespace, are common in many regex engines.

#### Differences

1. **Language-Specific Features**:

   - **JavaScript**: JavaScript's regex implementation is part of the ECMA-262 standard. It has unique features like:

     - Lookbehind assertions were introduced in ES2018 (e.g., `(?<=x)y`).
     - Named capturing groups (e.g., `(?<name>group)`).
     - The `s` (dotAll) flag, which allows the dot (`.`) to match newline characters.
     - Unicode property escapes (e.g., `\p{L}` for letters) with the `u` flag.

   - **Other Languages**: Different languages may have additional or fewer features. For instance:
     - **Perl** and **PCRE**: These have extensive regex features, including complex lookbehind assertions and conditional expressions.
     - **Python**: Python's `re` module has features like verbose mode (`re.VERBOSE`) for more readable patterns and support for complex conditional matching.
     - **POSIX**: POSIX regular expressions, commonly used in Unix/Linux command-line tools, have some different syntax rules and limitations compared to PCRE or JavaScript regex.

2. **Engine-Specific Behaviors**:

   - **Greediness**: The default greediness of quantifiers can sometimes vary, but this is generally consistent across modern regex engines.
   - **Handling of Specific Escapes**: Some characters and escape sequences might behave differently across engines. For example, `\n` represents a newline, but the behavior of `\r` (carriage return) and `\r\n` can vary depending on the platform and language.
   - **Unicode Handling**: Support for Unicode and how characters are matched, especially regarding case-insensitivity, can differ. JavaScript has specific Unicode flags (`u`) and escapes for handling Unicode characters.

3. **Performance Considerations**:
   - The performance of regex operations can differ across languages and implementations, influenced by factors like backtracking, optimizations, and the specific pattern used.

#### Practical Implications

- **Portability**: If you write a regex pattern in one language, it may not work exactly the same way in another language or system without modification, especially for more complex patterns.

- **Tooling**: Some tools and editors offer regex with their unique syntax or features, so always check the specific documentation for the environment you're working in.

- **Testing**: It's good practice to test your regex patterns, especially when moving between different programming environments, to ensure they behave as expected. Tools like online regex testers can help with this.

While the core concepts of regex are broadly consistent, the specific features, syntax, and behaviors can vary between JavaScript and other environments. Always refer to the documentation for the regex engine you are using to understand its specific capabilities and limitations.

#### Cheat sheet for JavaScript Regular Expressions (RegExp)

#### **Character Classes**

- **\d**: Matches any digit (0-9)
- **\w**: Matches any word character (alphanumeric + underscore)
- **\s**: Matches any whitespace character

#### **Assertions**

- **^**: Matches the beginning of a string
- **$**: Matches the end of a string
- **\b**: Matches a word boundary

#### **Groups and Backreferences**

- **(...)**: Capturing group
- **\1, \2, ...**: Backreference to the nth capturing group

#### **Quantifiers**

- **\***: Matches 0 or more times
- **+**: Matches 1 or more times
- **?**: Matches 0 or 1 time
- **{n}**: Matches exactly n times

#### **Example**

```javascript
const regex = /\b\d{3}-\d{2}-\d{4}\b/;
const str = "My number is 123-45-6789.";
const match = str.match(regex);
console.log(match); // Output: ["123-45-6789"]
```

This example matches a Social Security number format in a string. Let me know if you need more details!
To validate an email address using JavaScript and regular expressions (regex), you can use the following code snippet:

```javascript
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Example usage:
const email = "example@example.com";
console.log(validateEmail(email)); // true or false
```

To validate an email address specifically for Gmail or Hotmail using JavaScript and regular expressions (regex), you can use the following code snippet:

```javascript
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/;
  return regex.test(email);
}

// Example usage:
console.log(validateEmail("example@gmail.com")); // true
console.log(validateEmail("example@hotmail.com")); // true
console.log(validateEmail("example@yahoo.com")); // false
```

This regex pattern checks for a valid email format or either `@gmail.com` or `@hotmail.com` and ensures that the username part contains only valid characters.

---

## **Advanced JavaScript**

### **Advanced Functions**

#### Function Expressions

A function expression defines a function inside an expression and assigns it to a variable. Function expressions are not hoisted, so they can only be used after their definition.

```javascript
let sayHello = function () {
  console.log("Hello, World!");
};

sayHello(); // Calling the function
```

In this example, `sayHello` is a variable holding an anonymous function. You must define the function before calling it.

##### Function Declarations vs. Function Expressions

In JavaScript, functions can be defined in two primary ways: through function declarations and function expressions. Both methods allow you to define functions, but they differ in syntax and behavior.

**Function Expressions:**

- Not hoisted; can only be called after their definition.
- Can be anonymous or named.
- Useful for dynamic or functional programming patterns.

```javascript
const greet = function () {
  return "Hello, world!";
};

console.log(greet()); // Output: Hello, world!
```

**Function Declarations:**

- Hoisted; can be called before their definition.
- Use traditional syntax.

```javascript
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

console.log(calculateArea(5)); // Output: 78.53981633974483
```

**Key Differences:**

| Aspect         | Function Declaration | Function Expression |
| -------------- | ------------------- | ------------------ |
| Hoisting       | Yes                 | No                 |
| Syntax         | Traditional         | Assigned to var    |
| Use Case       | General             | Dynamic/Functional |

---

#### Arrow Functions (ES6+)

Arrow functions offer a concise syntax for writing functions and are especially useful for short, single-purpose functions.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

- **Single parameter:** `x => x * x`
- **No parameters:** `() => console.log("Hi!")`
- **No own `this`:** Inherit `this` from the lexical scope.

```javascript
function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
```

**Key Points:**

- Concise syntax, ideal for callbacks and array methods.
- No own `this`, `arguments`, `super`, or `new.target`.
- Cannot be used as constructors.

---

#### Callback Functions

A **callback function** is a function passed as an argument to another function, intended to be invoked after a certain operation completes.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data";
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log("Data received:", result);
});
```

**Error-First Callback Pattern:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const error = null;
    const data = "Some data";
    callback(error, data);
  }, 1000);
}

fetchData((err, result) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Data received:", result);
  }
});
```

#### Callback Hell

Callback hell refers to deeply nested callbacks, making code hard to read and maintain.

```javascript
doTask1((result1) => {
  doTask2(result1, (result2) => {
    doTask3(result2, (result3) => {
      doTask4(result3, (result4) => {
        // ...
      });
    });
  });
});
```

**How to Avoid:**

- Use named functions
- Modularize code
- Prefer Promises or async/await

---

#### Higher-Order Functions

A **higher-order function** is a function that takes one or more functions as arguments, returns a function, or both.

```javascript
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
```

---

#### Factory Functions

Factory functions create and return objects, providing encapsulation and flexibility without using classes or `new`.

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
  };
}

const person1 = createPerson("Alice", 30);
person1.greet();
```

**With Closures:**

```javascript
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}
```

---

#### Constructor Functions

Constructor functions are blueprints for creating objects using the `new` keyword.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("Alice", 30);
person1.greet();
```

**Modern Alternative: ES6 Classes**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

---

#### Closures

A closure is formed when an inner function retains access to its lexical scope, even after the outer function has finished executing.

```javascript
function outerFunction() {
  let outerVar = "I am an outer variable";
  return function innerFunction() {
    console.log(outerVar);
  };
}

let closure = outerFunction();
closure(); // Output: "I am an outer variable"
```

**When to Use Closures:**

- Preserve state (e.g., counters)
- Data encapsulation (private variables)
- Event handlers/callbacks
- Functional helpers (factories, memoization)

---

#### Currying

Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = add(2);
console.log(add2(3)); // Output: 5
```

**Automatic Currying:**

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}
```

**When to Use Currying:**

- Partial application
- Function composition
- Improved readability
- Functional libraries

---

#### Closures vs. Currying: When and Why

| **Closure**                        | **Currying**                          |
| ---------------------------------- | ------------------------------------- |
| Retain state/scope                 | Transform multi-arg to unary functions|
| Used for encapsulation, factories  | Used for partial application, composition|
| Created via nested functions       | Explicitly returns nested functions   |

**Real-World Applications:**

- Closures: React hooks, Redux middleware, event listeners
- Currying: Utility functions, validators, middleware chains

---

By mastering these advanced function patterns—function expressions, arrow functions, callbacks, higher-order functions, factory and constructor functions, closures, and currying—you can write more expressive, modular, and maintainable JavaScript code.

#### Impure and Pure Functions

#### Impure Functions

An **impure function** is a function that produces side effects or relies on external state outside its scope. Side effects can include modifying global variables, changing input parameters, performing I/O operations (like logging to the console or writing to a file), or depending on data that can change outside the function.

**Example of an impure function:**
```javascript
let counter = 0;
function increment() {
  counter++; // modifies external state
  return counter;
}
```
- Here, `increment` changes the value of the external variable `counter`, making it impure.

#### Pure Functions

A **pure function** is a function that, given the same input, will always return the same output and does not produce any side effects. Pure functions do not modify external state or depend on it.

**Example of a pure function:**
```javascript
function add(a, b) {
  return a + b;
}
```
- `add` always returns the same result for the same inputs and does not affect or rely on anything outside its scope.

**Benefits of pure functions:**
- Easier to test and debug
- Predictable and reliable
- Enable functional programming techniques like memoization and composition

---
> Note:
  ```js
// Pure Functions require you to avoid
// mutating the data

// Impure function that mutates the data
const addToScoreHistory = (array, score) => {
array.push(score);
return array;
}
const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));

// This mutates the original array.
// This is considered to be a side-effect.

// Notice: "const" does not make the array immutable

// There is much more to Pure Functions that I
// will discuss in my next tutorial.

// We need to modify our function so it does not
// mutate the original data.
  
```
---

### **"This" keyword**

In JavaScript, the `this` keyword is a fundamental feature that refers to the context in which a function is called. The value of `this` can vary depending on how and where a function is invoked, and understanding how it works is crucial for effective JavaScript programming. Here's an overview of the `this` keyword in different scenarios:

#### 1. **Global Context**

In the global context (outside of any function), `this` refers to the global object, which is `window` in browsers and `global` in Node.js.

```javascript
console.log(this === window); // true (in browser)
```

#### 2. **Function Context**

Inside a regular function, `this` refers to the global object in non-strict mode. In strict mode, `this` is `undefined` if the function is called without a specific context.

**Non-strict mode:**

```javascript
function foo() {
  console.log(this);
}

foo(); // Logs the global object (window in browsers)
```

**Strict mode:**

```javascript
"use strict";

function foo() {
  console.log(this);
}

foo(); // Logs undefined
```

#### 3. **Object Method Context**

When a function is called as a method of an object, `this` refers to the object that the method was called on.

```javascript
let obj = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greet(); // Logs "Hello, Alice"
```

Here, `this` inside `greet` refers to `obj`.

#### 4. **Constructor Function Context**

In constructor functions, `this` refers to the newly created instance of the object.

```javascript
function Person(name) {
  this.name = name;
}

let alice = new Person("Alice");
console.log(alice.name); // Logs "Alice"
```

#### 5. **Arrow Functions**

Arrow functions have a lexical `this` binding, meaning they do not have their own `this`. Instead, `this` inside an arrow function refers to the `this` value from the surrounding (lexical) scope.
- Not recommended when a function needs its own `this` or is used as a method in an object.

```javascript
let obj = {
  name: "Alice",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};

obj.regularFunction(); // Logs "Alice"
obj.arrowFunction(); // Logs undefined (or window.name in non-strict mode)
```

In this example, `arrowFunction` does not have its own `this`, so it uses `this` from the surrounding scope, which is the global scope in this case.

#### 6. **Event Handlers**

In event handlers, `this` refers to the element that received the event.

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // Logs the button element
});
```

#### 7. **Explicit Binding with `call`, `apply`, and `bind`**

You can explicitly set the value of `this` using `call`, `apply`, and `bind` methods.

**Using `call`:**

```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}

let obj = { name: "Alice" };
greet.call(obj); // Logs "Hello, Alice"
```

**Using `apply`:**

```javascript
function introduce(age) {
  console.log(`${this.name} is ${age} years old`);
}

let person = { name: "Bob" };
introduce.apply(person, [30]); // Logs "Bob is 30 years old"
```

**Using `bind`:**

```javascript
function sayHello() {
  console.log(`Hello, ${this.name}`);
}

let obj = { name: "Charlie" };
let sayHelloBound = sayHello.bind(obj);
sayHelloBound(); // Logs "Hello, Charlie"
```

#### 8. **DOM Event Listeners**

In the context of DOM event listeners, `this` refers to the element that is listening for the event:

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // Logs the button element
});
```

In this example, `this` inside the event handler function refers to the button element (`myButton`) that received the click event.

#### Conclusion

The behavior of the `this` keyword can sometimes be confusing, especially for beginners, because it depends heavily on the context of the function call. Understanding how `this` works in different scenarios—such as in the global context, as an object method, within a constructor, or in event handlers—is crucial for writing and debugging JavaScript code effectively. Arrow functions' lexical binding of `this` also offers a unique aspect that can be particularly useful in specific situations, like callback functions.

---

### **Prototype**

In JavaScript, prototypes are a key feature that allows for inheritance and the sharing of properties and methods among objects. Every JavaScript object has an internal property called `[[Prototype]]`, which points to another object or `null`. This prototype object can contain properties and methods that can be shared across all objects inheriting from it.

#### The Prototype Chain

The mechanism by which objects inherit properties and methods from other objects is known as the prototype chain. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it looks at the object's prototype, and then the prototype's prototype, and so on, until it either finds the property/method or reaches the end of the chain (`null`).

#### Example: Object Prototypes

Here’s a simple example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

let person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

In this example:

- `Person` is a constructor function.
- `Person.prototype` is an object that is automatically created when you define a function. It's used to store methods and properties that should be shared among all instances created by that constructor.
- `greet` is added to the `Person.prototype`, making it available to all instances of `Person`.

#### Modifying Prototypes

You can also modify the prototype of an object after it has been created:

```javascript
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

Person.prototype.greet = function () {
  console.log(`Hi! I am ${this.name}.`);
};

person1.greet(); // Output: Hi! I am Alice.
```

In this case, we changed the `greet` method on the `Person.prototype`. All existing and future instances of `Person` will use the new `greet` method because they all refer to the same prototype.

#### Prototype Chain

If an object’s prototype does not have a desired property, JavaScript will continue to look up the chain:

```javascript
let obj = {
  a: 1,
};

console.log(obj.toString()); // Output: [object Object]
```

In this example, `obj` does not have a `toString` method defined, but JavaScript finds `toString` up the prototype chain, in `Object.prototype`.

#### Setting the Prototype

You can set an object's prototype using `Object.create()` or the `__proto__` property (though `__proto__` is deprecated):

##### Using `Object.create()`

```javascript
let personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

let person2 = Object.create(personPrototype);
person2.name = "Bob";
person2.greet(); // Output: Hello, my name is Bob
```

##### Using `__proto__` (Deprecated)

```javascript
let person3 = {};
person3.__proto__ = personPrototype;
person3.name = "Carol";
person3.greet(); // Output: Hello, my name is Carol
```

#### Built-in Prototypes

All built-in JavaScript objects (like `Array`, `Date`, `String`, etc.) have prototypes. For example:

```javascript
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
```

In this chain:

- `arr` is an instance of `Array`, so its prototype is `Array.prototype`.
- `Array.prototype` itself is an object, so its prototype is `Object.prototype`.
- `Object.prototype` is the end of the prototype chain and its prototype is `null`.

#### Conclusion

JavaScript's prototype system is powerful and flexible, allowing for efficient property and method sharing across instances and providing the foundation for inheritance. Understanding prototypes is key to mastering JavaScript, as it underpins the language's object-oriented features and behavior.

---

### **Class**

In JavaScript, classes are a way to define objects and handle inheritance, introduced in ES6 (ECMAScript 2015). They provide a clearer and more concise syntax for creating and managing objects and are often used to model real-world entities.

JavaScript classes are syntactic sugar over the existing prototype-based inheritance. They don't introduce a new object-oriented inheritance model; they just provide a more familiar and convenient syntax.

#### Defining a Class

You can define a class using the `class` keyword. A basic class consists of a constructor method for initializing the object, and methods to define behaviors.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

let person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

#### Class Components

1. **Constructor**

   - The `constructor` method is a special method used for creating and initializing an object created with a class. In the example above, the `constructor` takes `name` and `age` as parameters and sets them as properties of the object.

2. **Methods**

   - Class methods are defined within the class body, and they operate on the class instances. In the example, `greet` is a method of the `Person` class.

3. **Properties**
   - Properties are variables attached to instances of the class. They can be initialized inside the `constructor`.

#### Inheritance

Classes can inherit from other classes using the `extends` keyword. The subclass inherits all properties and methods from the superclass, but can also have additional properties and methods.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the constructor of the parent class (Animal)
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let myDog = new Dog("Rex", "Labrador");
myDog.speak(); // Output: Rex barks.
```

In this example:

- `Animal` is a base class with a `speak` method.
- `Dog` is a subclass that extends `Animal` and overrides the `speak` method. It also calls the parent class's constructor using `super(name)`.

#### Static Methods

Static methods are called on the class itself, not on instances of the class. They are defined using the `static` keyword.

```javascript
class MathUtilities {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtilities.add(2, 3)); // Output: 5
```

In this example, `add` is a static method of the `MathUtilities` class and can be called directly on the class without creating an instance.

#### Getters and Setters

Getters and setters allow you to define methods that are accessed like properties. They are used for accessing and mutating the values of private properties.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

let rect = new Rectangle(10, 20);
console.log(rect.area); // Output: 200
rect.dimensions = { width: 15, height: 25 };
console.log(rect.area); // Output: 375
```

#### Private Fields

As of ECMAScript 2022, you can define private fields in a class using the `#` symbol. Private fields are only accessible within the class and cannot be accessed or modified outside of it.

```javascript
class BankAccount {
  #balance = 0; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

#### Abstract Classes and Polymorphism

JavaScript does not have built-in support for abstract classes, but you can simulate them by throwing errors in base class methods that should be implemented by subclasses.

```javascript
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new TypeError("Cannot construct Shape instances directly");
    }
  }
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
```

This pattern enforces that `Shape` cannot be instantiated directly and that subclasses must implement the `area` method.

#### Conclusion

JavaScript classes provide a clear and concise way to define and manage objects and their relationships. They support inheritance, encapsulation, and abstraction, making it easier to model complex systems. While they offer a familiar syntax similar to other object-oriented languages like Java and C++, it's important to remember that they are built on JavaScript's prototype-based inheritance model.

### **Prototypal Inheritance**

Prototypal inheritance is a core feature of JavaScript that enables objects to inherit properties and methods from other objects. Unlike classical inheritance (as in Java or C++), where classes inherit from other classes, JavaScript objects inherit directly from other objects via prototypes.

#### **Key Concepts**

1. **Prototype Chain**  
  Every JavaScript object has an internal `[[Prototype]]` property (commonly accessed via `__proto__` or set with `Object.create`). This property points to another object, forming a chain. When you access a property or method, JavaScript looks for it on the object itself, then up the prototype chain until it finds it or reaches `null`.

2. **Prototype Object**  
  The object referenced by `[[Prototype]]` is called the prototype. It can contain shared properties and methods that are accessible to all objects inheriting from it.

3. **Inheritance Mechanism**  
  If a property or method isn't found on the object, JavaScript automatically looks up the prototype chain. This allows for efficient sharing of behavior and data.

#### **Basic Example**

```javascript
const animal = {
  eat() {
   console.log("Eating");
  },
};

const dog = Object.create(animal); // dog inherits from animal
dog.bark = function () {
  console.log("Barking");
};

dog.eat();  // Output: Eating (from prototype)
dog.bark(); // Output: Barking (own method)
```

- `dog`'s prototype is `animal`, so `dog` can use `animal`'s methods.
- This is the essence of prototypal inheritance: objects inheriting from other objects.

#### **Constructor Functions and Prototypes**

Constructor functions can establish inheritance by setting up the prototype chain:

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype); // Inherit methods
Dog.prototype.constructor = Dog; // Fix constructor reference

Dog.prototype.bark = function () {
  console.log(`${this.name} is barking`);
};

const myDog = new Dog("Rex", "Labrador");
myDog.eat();  // Output: Rex is eating
myDog.bark(); // Output: Rex is barking
```

- `Dog.prototype` is set to an object created from `Animal.prototype`, so all `Dog` instances inherit from `Animal`.

#### **ES6 Classes (Syntactic Sugar)**

ES6 classes provide a cleaner syntax but still use prototypal inheritance under the hood:

```javascript
class Animal {
  constructor(name) {
   this.name = name;
  }
  eat() {
   console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
   super(name);
   this.breed = breed;
  }
  bark() {
   console.log(`${this.name} is barking`);
  }
}

const myDog = new Dog("Rex", "Labrador");
myDog.eat();  // Output: Rex is eating
myDog.bark(); // Output: Rex is barking
```

- `extends` sets up the prototype chain automatically.
- `super` calls the parent constructor.

#### **Important Rules and Notes**

- **No Circular References:**  
  You cannot set an object's prototype to itself or create circular prototype chains (e.g., `animal.__proto__ = animal` is invalid).
- **Prototype Must Be Object or Null:**  
  The value of `__proto__` (or the prototype argument to `Object.create`) must be an object or `null`.
- **Single Inheritance:**  
  An object can only directly inherit from one prototype, but the chain can be multiple levels deep.
- **Shared Methods:**  
  Methods defined on the prototype are shared by all inheriting objects, saving memory and enabling polymorphism.

#### **Summary Table**

| Feature                | Description                                                      |
|------------------------|------------------------------------------------------------------|
| Prototype Chain        | Objects inherit from other objects via `[[Prototype]]`           |
| Inheritance Mechanism  | Property/method lookup climbs the prototype chain                |
| Constructor Functions  | Set up inheritance by assigning prototypes                       |
| ES6 Classes            | Syntactic sugar for prototype-based inheritance                  |
| No Circular Prototypes | Prototypes must not form cycles                                  |
| Single Prototype       | Each object has at most one direct prototype                     |

Prototypal inheritance is fundamental to JavaScript's object system, enabling flexible, dynamic, and memory-efficient code reuse.

### **JavaScript Function Composition**

Function composition is a functional programming technique where you combine simple functions to build more complex ones. It allows you to create flexible, reusable pipelines for data transformation.

#### 🔧 Common Composition Patterns

##### 1. **Manual Composition**

Combine functions by nesting calls, passing the output of one as the input to the next.

```js
const greet = name => `Hello, ${name}!`;
const exclaim = str => `${str}!!`;

const excitedGreet = name => exclaim(greet(name));
console.log(excitedGreet("Aziz")); // "Hello, Aziz!!"
```

##### 2. **Composing with Utility Functions**

Create reusable `compose` and `pipe` helpers to chain functions together.

```js
// Compose: right-to-left (compose(f, g)(x) === f(g(x)))
const compose = (...fns) =>
  input => fns.reduceRight((acc, fn) => fn(acc), input);

// Pipe: left-to-right (pipe(f, g)(x) === g(f(x)))
const pipe = (...fns) =>
  input => fns.reduce((acc, fn) => fn(acc), input);

// Example usage
const processName = pipe(
  greet,           // "Hello, Ali!"
  exclaim,         // "Hello, Ali!!"
  str => str.toUpperCase() // "HELLO, ALI!!"
);

console.log(processName("Ali")); // "HELLO, ALI!!"
```

##### 3. **Object Composition (Alternative to Inheritance)**

Instead of using classes and inheritance, you can compose objects by merging behaviors (mixins). This approach is more flexible and avoids deep inheritance hierarchies.

```js
const canGreet = state => ({
  greet: () => `Hello, ${state.name}!`
});

const canExclaim = state => ({
  exclaim: () => `${state.greet()}!!`
});

const createPerson = name => {
  const state = { name };
  return Object.assign({}, canGreet(state), canExclaim(state));
};

const person = createPerson("Aziz");
console.log(person.greet());   // "Hello, Aziz!"
console.log(person.exclaim()); // "Hello, Aziz!!"
```

---

**Summary:**  
- Function composition lets you build complex logic from small, reusable functions.
- Use `compose` (right-to-left) or `pipe` (left-to-right) for readable pipelines.
- Prefer object composition over inheritance for flexible, modular code.


### **Error handling: Try and Catch**

In JavaScript, `try...catch` is a block of code used for handling exceptions—errors that occur during the execution of a program. When an error occurs, the normal flow of the code is interrupted, and control is transferred to the `catch` block if present. This mechanism helps in gracefully handling errors, preventing the program from crashing, and providing meaningful error messages or alternative behavior.

#### Syntax

The basic syntax of `try...catch` is as follows:

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always execute, regardless of an error
}
```

- **`try` Block**: Contains the code that may potentially throw an error. If an error occurs, the control immediately shifts to the `catch` block.
- **`catch` Block**: Contains the code that executes if an error is thrown in the `try` block. It has an optional parameter (often named `error` or `err`) that captures the exception object.
- **`finally` Block** (optional): Contains the code that executes after the `try` and `catch` blocks have finished, regardless of whether an error occurred. This is useful for cleanup actions like closing connections or files.

#### Example: Basic Try...Catch

```javascript
try {
  let result = 10 / 0; // Division by zero
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
}
```

In this example:

- The division by zero does not throw an error in JavaScript, but if we had some code that might throw an exception, the `catch` block would handle it.
- If an error occurred, the `catch` block would log an error message to the console.

#### Example: Handling Specific Errors

You can use `catch` to handle specific types of errors by inspecting the `error` object.

```javascript
try {
  JSON.parse("{ invalid JSON }"); // This will throw a SyntaxError
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("There was a syntax error in your JSON.");
  } else {
    console.log("An unknown error occurred: " + error.message);
  }
}
```

In this example:

- If the error thrown is a `SyntaxError` (common when dealing with JSON parsing), a specific message is logged.
- For other types of errors, a generic message is logged.

#### Finally Block

The `finally` block is executed regardless of whether an error occurred in the `try` block or if the error was caught in the `catch` block.

```javascript
try {
  console.log("Executing try block");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Handling the error: " + error.message);
} finally {
  console.log("This will always execute, regardless of an error.");
}
```

Output:

```
Executing try block
Handling the error: Something went wrong!
This will always execute, regardless of an error.
```

#### Re-throwing Errors

You can rethrow an error from the `catch` block if you want the error to propagate after handling specific cases.

```javascript
try {
  let json = '{"name": "John", "age": 30}';
  let user = JSON.parse(json);
  if (!user.email) {
    throw new SyntaxError("Incomplete data: no email");
  }
} catch (error) {
  console.log("Error: " + error.message);
  throw error; // Rethrow the error
}
```

In this example, if the `email` property is missing, a `SyntaxError` is thrown. The `catch` block handles the error and then rethrows it, allowing further handling or propagation.

#### Conclusion

The `try...catch` statement is a powerful tool for error handling in JavaScript, enabling you to manage exceptions and maintain robust, user-friendly applications. By using the `catch` block, you can provide meaningful error messages or alternative behavior, while the `finally` block ensures that necessary cleanup actions are performed. Understanding and using `try...catch` effectively is essential for writing reliable JavaScript code.

#### Part 2

In JavaScript, the concept of exceptions and errors is different from languages like Java, which have specific exception classes such as `IndexOutOfBoundsException`. JavaScript does not have a built-in "index out of bounds" error for arrays, as array bounds checking is not enforced by the language.

#### Array Indexing in JavaScript

In JavaScript:

- If you access an array element with an index that is out of bounds (negative or greater than the array's length), JavaScript does not throw an error. Instead, it returns `undefined`.

#### Example:

```javascript
let arr = [1, 2, 3];
console.log(arr[5]); // undefined (no error)
```

In this example, accessing `arr[5]` does not throw an error, even though the array only has elements at indices 0, 1, and 2.

#### Custom Error Handling

While JavaScript does not automatically throw an error for out-of-bounds array access, you can implement custom error handling to enforce such checks.

#### Example: Custom Error for Index Out of Bounds

```javascript
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
```

In this example, `getElement` checks whether the index is within the valid range of the array. If not, it throws a `RangeError` with a custom message. The `try...catch` block is then used to handle the error.

#### JavaScript Built-in Error Types

JavaScript provides several built-in error types that can be thrown and caught:

- **Error**: A generic error.
- **SyntaxError**: Thrown when parsing code with an invalid syntax.
- **TypeError**: Thrown when a value is not of the expected type.
- **RangeError**: Thrown when a number is outside an allowable range (e.g., invalid array length).
- **ReferenceError**: Thrown when trying to access an undefined variable.
- **EvalError**: Thrown by the `eval()` function in specific circumstances.
- **URIError**: Thrown when a URI handling function (such as `encodeURI()`) is used incorrectly.

##### 1. **Error**

The `Error` object is a generic error that can be used for any purpose.

```javascript
try {
  throw new Error("This is a generic error.");
} catch (error) {
  console.log("Error: " + error.message); // Output: Error: This is a generic error.
}
```

##### 2. **SyntaxError**

A `SyntaxError` occurs when JavaScript encounters tokens or token order that does not conform to the syntax of the language.

```javascript
try {
  eval("var a = ;"); // Missing value after the assignment operator
} catch (error) {
  console.log("SyntaxError: " + error.message); // Output: SyntaxError: Unexpected token ;
}
```

##### 3. **TypeError**

A `TypeError` is thrown when a value is not of the expected type.

```javascript
try {
  null.f(); // Trying to call a method on null
} catch (error) {
  console.log("TypeError: " + error.message); // Output: TypeError: Cannot read property 'f' of null
}
```

##### 4. **RangeError**

A `RangeError` is thrown when a value is not within an allowable range.

```javascript
try {
  let arr = new Array(-1); // Invalid array length
} catch (error) {
  console.log("RangeError: " + error.message); // Output: RangeError: Invalid array length
}
```

##### 5. **ReferenceError**

A `ReferenceError` occurs when a non-existent variable is referenced.

```javascript
try {
  console.log(x); // x is not defined
} catch (error) {
  console.log("ReferenceError: " + error.message); // Output: ReferenceError: x is not defined
}
```

##### 6. **EvalError**

An `EvalError` is related to the `eval()` function. Although not commonly used anymore, it's part of the standard error types.

```javascript
try {
  throw new EvalError("An EvalError occurred.");
} catch (error) {
  console.log("EvalError: " + error.message); // Output: EvalError: An EvalError occurred.
}
```

Note: `EvalError` is rarely used in modern JavaScript, as the use of `eval()` is generally discouraged for security reasons.

##### 7. **URIError**

A `URIError` is thrown when a global URI handling function is used inappropriately.

```javascript
try {
  decodeURIComponent("%"); // Incomplete URI
} catch (error) {
  console.log("URIError: " + error.message); // Output: URIError: URI malformed
}
```

Each of these errors has a specific use case, and catching them allows you to handle errors gracefully, providing meaningful messages and fallback behaviors in your applications.

#### Conclusion

JavaScript does not have built-in exceptions like "index out of bounds" that are automatically thrown for accessing invalid array indices. Instead, it returns `undefined` for such cases. However, you can implement custom error handling to enforce bounds checking and throw appropriate errors when needed. JavaScript provides a set of built-in error types that can be used to represent various kinds of runtime errors, making it easier to handle and debug issues.

---

### **Iterables and iterators protocol**

In JavaScript, iterables and iterators are fundamental concepts that allow you to work with collections of data in a uniform way. They are central to the design of loops, particularly the `for...of` loop, and are used in many JavaScript APIs.

#### Iterables

An object is considered iterable if it implements the iterable protocol. This protocol requires the object to have a method with the key `[Symbol.iterator]`, which is a well-known symbol in JavaScript. The `[Symbol.iterator]` method must return an iterator, which is an object that conforms to the iterator protocol.

##### Example of an Iterable

```javascript
const iterable = {
  *[Symbol.iterator]() {
    // Using generator function syntax
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value); // Output: 1, 2, 3
}
```

In this example:

- The object `iterable` is made iterable by defining a generator function using the `[Symbol.iterator]` method.
- The `for...of` loop is used to iterate over the values returned by the generator.

#### Iterators

An iterator is an object that provides a mechanism to iterate over a collection, one item at a time. An iterator implements the iterator protocol, which means it has a `next()` method that returns an object with two properties:

- `value`: The next value in the iteration sequence.
- `done`: A boolean value indicating whether the iteration has completed (`true`) or not (`false`).

##### Example of an Iterator

```javascript
function makeIterator(array) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const it = makeIterator([1, 2, 3]);

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { done: true }
```

In this example:

- `makeIterator` is a function that returns an iterator object for an array.
- The `next()` method provides each element of the array sequentially and indicates when the iteration is complete.

#### Built-in Iterables

Several built-in objects in JavaScript are iterable by default. These include:

- **Arrays**: `[1, 2, 3]`
- **Strings**: `"hello"`
- **Maps**: `new Map([[key1, value1], [key2, value2]])`
- **Sets**: `new Set([1, 2, 3])`

Each of these has a default iterator method, `[Symbol.iterator]`, which returns an iterator over their elements.

##### Example with Array

```javascript
const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

#### Custom Iterables

You can create custom iterable objects by defining the `[Symbol.iterator]` method.

```javascript
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const num of range) {
  console.log(num); // Output: 1, 2, 3, 4, 5
}
```

In this example:

- The `range` object is iterable because it defines a `[Symbol.iterator]` method.
- The method returns an iterator object that manages the iteration state.

#### Generators as Iterators

Generators are a special kind of function in JavaScript that can be used to implement both iterables and iterators. They allow you to define an iterative algorithm by writing a function whose execution can be paused and resumed.

##### Example with Generator

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

In this example:

- The `numberGenerator` function is a generator, defined with the `function*` syntax.
- Calling `gen.next()` yields values one by one, and `done` becomes `true` when the generator is exhausted.

#### Summary

Iterables and iterators provide a standard way to loop over data structures in JavaScript. They are fundamental to understanding how data can be traversed, especially with the `for...of` loop and various modern APIs like `Map` and `Set`. Understanding these concepts is key to working with collections and asynchronous data in JavaScript.

### **Generators**

JavaScript generators are a special type of function introduced in ES6 (ECMAScript 2015) that allows you to define an iterative algorithm in a more powerful and flexible way. They enable functions to yield multiple values over time, pausing and resuming their execution as needed.

#### Key Concepts of Generators

1. **Generator Functions**: Defined using the `function*` syntax, generator functions can be paused and resumed. They do not execute immediately when called but instead return a generator object.

2. **Yielding Values**: Inside a generator function, the `yield` keyword is used to return values one at a time from the generator.

3. **Generator Objects**: These objects are returned by generator functions and conform to both the iterable and iterator protocols. They have a `next()` method that returns the next yielded value.

4. **Control Flow**: Generators can maintain their state between `yield` calls, allowing for complex iteration patterns and lazy evaluation.

#### Basic Example

```javascript
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

In this example:

- `simpleGenerator` is a generator function that yields values 1, 2, and 3.
- Calling `gen.next()` retrieves each value sequentially. When there are no more values to yield, `done` becomes `true`.

#### Using Generators with `for...of`

Generators are iterable, so you can use them with the `for...of` loop to iterate over their values:

```javascript
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of range(1, 5)) {
  console.log(num); // Output: 1, 2, 3, 4, 5
}
```

In this example:

- The `range` generator function yields numbers from `start` to `end`.
- The `for...of` loop iterates over the values produced by `range`.

#### Generators with `yield*`

The `yield*` expression can be used to delegate to another generator or iterable. This is useful for composing generators.

```javascript
function* innerGenerator() {
  yield 2;
  yield 3;
}

function* outerGenerator() {
  yield 1;
  yield* innerGenerator();
  yield 4;
}

const gen = outerGenerator();

console.log([...gen]); // Output: [1, 2, 3, 4]
```

In this example:

- The `outerGenerator` function uses `yield*` to delegate yielding values to `innerGenerator`.
- The resulting sequence includes values from both generators.

#### Receiving Values into Generators

Generators can also receive values sent to them via the `next()` method. This allows for more complex interactions.

```javascript
function* generator() {
  const input1 = yield "First";
  console.log(input1); // Output: 'Value received: 42'
  const input2 = yield "Second";
  console.log(input2); // Output: 'Value received: 84'
}

const gen = generator();

console.log(gen.next()); // { value: 'First', done: false }
console.log(gen.next(42)); // Output: 42 { value: 'Second', done: false }
console.log(gen.next(84)); // Output: 84 { value: undefined, done: true }
```

In this example:

- The generator yields 'First' and 'Second' sequentially.
- Values sent to the `next()` method are received by the generator at the `yield` expressions.

#### Error Handling in Generators

You can also handle errors within generators using `try...catch` blocks.

```javascript
function* generator() {
  try {
    yield 1;
    yield 2;
    throw new Error("Something went wrong!");
  } catch (e) {
    console.log("Caught error:", e.message); // Output: Caught error: Something went wrong!
  }
}

const gen = generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.throw(new Error("Something went wrong!"))); // { value: undefined, done: true }
```

In this example:

- The generator throws an error after yielding 2.
- The `throw` method on the generator object triggers the error handling inside the generator.

#### Conclusion

JavaScript generators provide a powerful way to work with iterative algorithms, lazy evaluation, and stateful iteration. They allow for more control over the execution of code and can simplify complex scenarios involving iteration and data generation. Understanding generators is key to mastering advanced JavaScript patterns and handling asynchronous operations efficiently.

---

### **Asynchronous JavaScript**

Asynchronous JavaScript is a core concept that enables JavaScript to handle operations that take time to complete—such as network requests, timers, or file reading—without blocking the main thread. This is essential for building responsive, interactive web applications.

> What, Why, and How?

##### What is Asynchronous JavaScript?

Asynchronous JavaScript allows certain tasks to run in the background while the rest of the code continues executing. This means your application can remain responsive to user input and other events, even while waiting for slow operations to finish.

##### Why Use Asynchronous JavaScript?

- **Improved User Experience:** Keeps the UI responsive during long-running operations.
- **Efficient Resource Usage:** Prevents blocking the main thread, allowing other code to run concurrently.
- **Concurrent Operations:** Enables multiple tasks (like fetching data from different APIs) to proceed in parallel.
- **Handles Long-Running Tasks:** Ensures tasks like file I/O or network requests don't freeze the application.

##### How to Implement Asynchronous JavaScript

There are three main approaches:

---

#### 1. **Callbacks**

**Basic Example:**

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greet);
```

**Asynchronous Callback Example:**

```javascript
console.log("Before delay");

setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000);

console.log("After setting delay");
```

**Error-First Callback Pattern:**

```javascript
function loadData(callback) {
  setTimeout(() => {
    let error = null;
    let data = "Sample data";
    // error = new Error("Failed to load data");
    callback(error, data);
  }, 1000);
}

loadData((err, data) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(data);
  }
});
```

**Drawback:**  
Callbacks can lead to deeply nested code ("callback hell"), making it hard to read and maintain.

---

#### 2. **Promises**

A **Promise** represents the eventual result of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.

**Example:**

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data received";
      resolve(data);
      // reject(new Error("Failed to fetch data"));
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Data received
  })
  .catch((error) => {
    console.error(error);
  });
```

**Advantages:**  
- Cleaner syntax for chaining asynchronous operations.
- Centralized error handling with `.catch()`.

---
##### **Promises lifecycle**

```plaintext
            +--------------------+
            |    Promise Created |
            +--------------------+
                    |
                    v
            +--------------------+
            |   Pending State    |  (Initial state)
            +--------------------+
              /         \
             v           v
+----------------+   +----------------+
|  Resolved     |   |  Rejected       |
| (Fulfilled)   |   | (Failed/Error)  |
+----------------+   +----------------+
             \         /
              v       v
        +-------------------+
        |  Settled State    |
        +-------------------+
```

#### Breakdown:
- **Promise Created:** A new promise is instantiated.
- **Pending State:** The promise is neither resolved nor rejected.
- **Resolved (Fulfilled):** The operation is successful, and `.then()` gets executed.
- **Rejected (Failed/Error):** The operation fails, and `.catch()` gets executed.
- **Settled State:** The promise reaches its final state—either resolved or rejected.

---

#### 3. **Async/Await**

`async` and `await` are syntactic sugar over promises, making asynchronous code look and behave more like synchronous code.

**Example:**

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data received";
      resolve(data);
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data); // Output: Data received
  } catch (error) {
    console.error(error);
  }
}

getData();
```

**Advantages:**  
- More readable and maintainable code.
- Easier error handling with `try...catch`.

---

#### Summary Table

| Approach      | Syntax Style   | Error Handling         | Readability      | Use Case                |
|---------------|---------------|-----------------------|------------------|-------------------------|
| Callback      | Nested        | Error-first callback  | Low (callback hell) | Legacy APIs, events     |
| Promise       | Chained       | `.catch()`            | Medium           | Modern async operations |
| Async/Await   | Synchronous-like | `try...catch`       | High             | Most modern code        |

---

**Tip:**  
Use async/await for most new code. Promises are still useful for chaining and parallel operations. Callbacks are common in older APIs and event handling.

---

### **Event Loop and Concurrency**

The JavaScript runtime uses an **event loop** to handle asynchronous operations and concurrency. Understanding this mechanism is crucial for writing non-blocking, efficient code.

##### How the Event Loop Works

Here's a simplified overview:

1. **Call Stack**: Where JavaScript executes functions synchronously, one at a time.
2. **Web APIs**: Browser-provided APIs (like `setTimeout`, DOM events, AJAX) handle asynchronous tasks.
3. **Callback Queue (Task Queue)**: When an async operation completes, its callback is placed here.
4. **Microtask Queue**: Holds microtasks (e.g., resolved Promises, `MutationObserver`). These have higher priority than the callback queue.
5. **Event Loop**: Continuously checks if the call stack is empty. If so, it processes all microtasks, then one task from the callback queue.

##### ASCII Diagram: Event Loop in Action

```
+-------------------+         +-------------------+
|    Call Stack     | <------ |   Event Loop      |
+-------------------+         +-------------------+
      ^                             |
      |                             v
+-------------------+         +-------------------+
|  Callback Queue   | <------ |  Web APIs         |
+-------------------+         +-------------------+
      ^
      |
+-------------------+
| Microtask Queue   |
+-------------------+
```

**Flow:**
- Synchronous code runs on the call stack.
- Async tasks (e.g., `setTimeout`, Promises) are handled by Web APIs.
- When ready, callbacks go to the microtask or callback queue.
- The event loop moves microtasks (first) and then tasks to the call stack when it's empty.

##### Example: Microtasks vs. Macrotasks

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout"); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("Promise"); // Microtask
});

console.log("End");
```

**Output:**
```
Start
End
Promise
Timeout
```
> Microtasks (Promise callbacks) run before macrotasks (`setTimeout`).

---

### **Timeouts and Intervals**

JavaScript provides two main functions for scheduling code execution:

##### `setTimeout()`

- Executes a function once after a specified delay (in milliseconds).

```javascript
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

- Cancel with `clearTimeout(timeoutId)`.

##### `setInterval()`

- Executes a function repeatedly at specified intervals.

```javascript
const intervalId = setInterval(() => {
  console.log("Runs every second");
}, 1000);

// Stop after 5 seconds
setTimeout(() => clearInterval(intervalId), 5000);
```

- Cancel with `clearInterval(intervalId)`.

##### Key Points

- **Timing is approximate**: Delays may be longer if the call stack is busy.
- **Recursive timeouts**: For precise intervals, use `setTimeout` recursively instead of `setInterval` to avoid overlapping calls.

##### Example: Recursive Timeout

```javascript
function repeat() {
  console.log("Repeats every second, precisely");
  setTimeout(repeat, 1000);
}
repeat();
```

---

**Summary Table**

| Function         | Behavior                          | Cancel With         |
|------------------|-----------------------------------|---------------------|
| `setTimeout`     | Runs once after delay             | `clearTimeout`      |
| `setInterval`    | Runs repeatedly at intervals      | `clearInterval`     |

---

Understanding the event loop, microtasks, and timers is essential for mastering asynchronous JavaScript and writing responsive applications.

### **IIFE (Immediately Invoked Function Expression)**

An IIFE is a function that runs as soon as it is defined. It's commonly used to create a private scope for variables, avoiding polluting the global namespace.

**Basic Syntax:**
```js
(function() {
  // code here runs immediately
})();
```
or with arrow functions:
```js
(() => {
  // code here runs immediately
})();
```

**Example: Game Credits Counter**

```js
const credits = ((num) => {
  let credits = num;
  console.log(`Initial credits value: ${credits}`);
  return () => {
    if (credits > 0) {
      credits -= 1;
      console.log(`Playing game, ${credits} credit(s) remaining`);
    } else {
      console.log('Not enough credits');
    }
  };
})(3);

credits(); // Playing game, 2 credit(s) remaining
credits(); // Playing game, 1 credit(s) remaining
credits(); // Playing game, 0 credit(s) remaining
credits(); // Not enough credits
```

**Explanation:**
- The IIFE runs immediately with `num = 3`.
- It returns an inner function that decrements and logs the credits.
- The `credits` variable is private to the IIFE and cannot be accessed directly from outside.

IIFEs are useful for encapsulating logic and maintaining private state in JavaScript.

### **Modules (import / export)**

> Modules allow you to split your code into separate files, each with its own scope. This makes code easier to organize, maintain, and reuse. Modules are a standard feature in modern JavaScript (ES6+), supported natively in browsers and Node.js (with some differences).

#### **Why Use Modules?**

- **Encapsulation:** Variables, functions, and classes defined in a module are not visible outside unless explicitly exported.
- **Reusability:** Share code between files and projects.
- **Maintainability:** Keep code organized and manageable.
- **Avoid Global Scope Pollution:** Each module has its own scope.

---

#### **Exporting from a Module**

You can export variables, functions, or classes from a module so they can be used in other files.

##### **Named Exports**

Export multiple items by name:

```js
// mathUtils.js
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export class Calculator {
  multiply(a, b) {
    return a * b;
  }
}
```

You can also export after declaration:

```js
function subtract(a, b) {
  return a - b;
}
export { subtract };
```

##### **Default Export**

Each module can have one default export:

```js
// logger.js
export default function log(message) {
  console.log(`[LOG]: ${message}`);
}
```

Or with classes/objects:

```js
export default class Logger { /* ... */ }
```

---

#### **Importing in Another Module**

##### **Import Named Exports**

```js
// main.js
import { PI, add, Calculator } from './mathUtils.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
const calc = new Calculator();
console.log(calc.multiply(2, 4)); // 8
```

You can rename imports:

```js
import { add as sum } from './mathUtils.js';
console.log(sum(1, 2)); // 3
```

##### **Import Default Export**

```js
import log from './logger.js';
log('Hello!'); // [LOG]: Hello!
```

##### **Import All Exports as an Object**

```js
import * as math from './mathUtils.js';
console.log(math.PI);
console.log(math.add(1, 2));
```

---

#### **Mixing Default and Named Exports**

```js
// utils.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
export const version = '1.0.0';

// main.js
import greet, { version } from './utils.js';
console.log(greet('Aziz')); // Hello, Aziz!
console.log(version); // 1.0.0
```

---

#### **Module Syntax Rules**

- **File Extension:** Use `.js` or `.mjs` (Node.js) for modules.
- **Top-Level Only:** `import` and `export` must be at the top level, not inside functions or blocks.
- **Strict Mode:** Modules are always in strict mode.
- **Single Scope:** Each module has its own scope.

---

#### **Dynamic Imports**

You can load modules dynamically using `import()` (returns a Promise):

```js
// main.js
button.addEventListener('click', async () => {
  const { add } = await import('./mathUtils.js');
  console.log(add(5, 7));
});
```

---

#### **How Modules Work in Browsers**

- Use `<script type="module" src="main.js"></script>` in HTML.
- Module scripts are deferred by default.
- Module imports are relative to the importing file.

```html
<script type="module" src="main.js"></script>
```

---

#### **How Modules Work in Node.js**

- Use `.mjs` extension or set `"type": "module"` in `package.json`.
- Use full file paths (including `.js`).
- `import`/`export` are not available in CommonJS (`require`/`module.exports`).

---

#### **Common Patterns**

- **Barrel Files:** Create an `index.js` that re-exports from multiple modules for easier imports.
- **Tree Shaking:** Modern bundlers remove unused exports for smaller bundles.

---

#### **Summary Table**

| Feature         | Named Export         | Default Export         | Import All         | Dynamic Import      |
|-----------------|---------------------|-----------------------|--------------------|---------------------|
| Syntax          | `export { foo }`    | `export default foo`  | `import * as x`   | `import('./mod.js')`|
| Import Syntax   | `import { foo }`    | `import foo`          | `import * as x`   | `await import()`    |
| Multiple/Module | Yes                 | Only one              | Yes               | Yes                 |

---

#### **Best Practices**

- Prefer named exports for clarity and easier refactoring.
- Use default export for the main value of a module.
- Keep modules focused and small.
- Avoid circular dependencies.

---

**In summary:**  
Modules are the foundation of modern JavaScript applications. They help you organize, encapsulate, and reuse code efficiently using `export` and `import` statements.


### **🔁 Memoization**

#### 💭 What is Memoization?

> Memoization is an optimization technique that **caches** the results of function calls, so **next time** the function is called with the same arguments, it **returns the cached result instantly** instead of recalculating.

📦 Think of it like:

> "If I’ve done this before, I’ll just give you the answer from memory instead of doing the whole process again."

---

#### 🧠 Why Use It?

* Avoid **repeating expensive calculations**
* Improve **performance** for functions with **repetitive input**
* Especially helpful in:

  * **Recursive functions** (e.g. Fibonacci)
  * **Heavy computations**
  * **Rendering logic** (like in React)

---

#### 🧪 Simple Example (Without Memoization)

```js
function slowSquare(n) {
    console.log("Calculating...");
    return n * n;
}

slowSquare(4); // "Calculating..." → 16
slowSquare(4); // "Calculating..." again → 16
```

It recalculates **every time**, even if the input is the same.

---

#### ⚡ Now Add Memoization

```js
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args); // works for simple args
        if (key in cache) {
            console.log("Using cached result");
            return cache[key];
        }
        console.log("Calculating...");
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Create a memoized version of the slow function
const fastSquare = memoize(slowSquare);

fastSquare(4); // "Calculating..." → 16
fastSquare(4); // "Using cached result" → 16
```

---

#### 🔥 Real Example: Memoized Fibonacci

```js
function memoFib(n, cache = {}) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];

    cache[n] = memoFib(n - 1, cache) + memoFib(n - 2, cache);
    return cache[n];
}

memoFib(40); // FAST compared to normal recursion
```

🧠 Without memoization, `fib(40)` would do **millions** of calls. With memoization, it's blazing fast!

---

#### ⚠️ Watch Out:

* Memoization only works well with **pure functions** (same input = same output).
* Be careful with **object or array inputs** — use `Map()` or hash functions if needed.
* In large apps, **cache invalidation** might be needed (like LRU).

---

#### 🧱 TL;DR

```txt
Memoization:
  ✅ Cache return values of function calls
  ✅ Speeds up repeated computations
  ✅ Best for pure, heavy, recursive, or frequently-called functions

Implementation:
  - Use closure to store cache
  - Key = input args (serialize with JSON.stringify)
  - Check cache before calling original function
```

---

### **Decorators (`@`)**

> TL;DR: Decorators let you **wrap, modify, or enhance classes, methods, or properties** without touching their original code directly.

They’re like stylish wrappers for your code. 💅
Let’s break it down:

---

#### 🧠 What Is a Decorator?

A **decorator** is a special function used to **decorate** (modify/enhance) a class or its methods/properties.

In JavaScript, decorators are still a **stage 3 proposal** (not standard yet), but they’re already supported via **TypeScript**, **Babel**, or **Next.js** with experimental flags.

They look like this:

```js
@decorator
class MyClass {}
```

Or on methods:

```js
class MyClass {
  @log
  greet() {
    return "Hello";
  }
}
```

---

#### ⚙️ How Does It Work?

A decorator is just a **function** that receives the thing it's decorating — the **class**, **method**, or **property** — and can change or extend its behavior.

---

#### 🔹 Example 1: Class Decorator

```js
function sealed(constructor) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Hero {
  constructor(name) {
    this.name = name;
  }
}
```

> This prevents `Hero` from being modified (sealed class).

---

#### 🔹 Example 2: Method Decorator

```js
function log(target, key, descriptor) {
  const original = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Called ${key} with`, args);
    return original.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @log
  add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3); // Logs: Called add with [2, 3]
```

---

#### 🔹 Example 3: Property Decorator

```js
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly
  name = "Aziz";
}

const p = new Person();
p.name = "Yahyaoui"; // ❌ Error in strict mode or silently fails
```

---

#### 📦 Use Cases for Decorators

| Use Case             | Decorator Does...                      |
| -------------------- | -------------------------------------- |
| Logging              | Wraps method to log calls              |
| Authorization        | Checks user permissions before running |
| Memoization          | Caches method result                   |
| Validation           | Validates method input                 |
| Debounce/Throttle    | Limits how often a method runs         |
| Dependency Injection | Injects services in classes            |
| Freezing/Sealing     | Makes class immutable                  |

---

#### ⚠️ Notes:

* Native decorators are not fully in the JS spec yet, but **TypeScript supports them well**.
* You need Babel/TS or modern frameworks (like Angular, NestJS, Next.js with `experimentalDecorators`) to use them.

---

#### 🧱 TL;DR for DeathNote

```txt
JavaScript Decorators (@):
  ✅ Add extra behavior to classes, methods, or properties
  ✅ Clean way to enhance without changing original logic
  ✅ Use with TypeScript or Babel for now (not native JS)

Syntax:
  @decorator
  class MyClass {}

  @decorator
  methodName() {}

Use Cases:
  - Logging, auth, caching, validation, metrics, DI, etc.
```

---

### **Pipe and Compose functions**

> In JavaScript, piping and composing functions are powerful techniques for creating more readable, maintainable, and modular code. They are rooted in functional programming principles and allow you to chain together a series of functions, where the output of one function becomes the input of the next.

#### Function Piping (or Flow)

**Function piping**, also known as **flow**, is very similar to composition but applies functions from **left to right**. This often feels more natural and readable, as it mimics how data "flows" through a series of transformations.


#### 🟦 `pipe()` — **Left to Right**

> Imagine a sandwich being made step by step:

```text
Bread --> Add Cheese --> Add lettuce --> Toast --> Done
```

In code:

```js
pipe(addCheese, addLettuce, toast)(bread)
```

Under the hood:

```js
toast(addLettuce(addCheese(bread)))
```

**Visual Flow:**

```text
          ┌────────────┐
input --> │ addCheese  │
          └────────────┘
               ↓
          ┌────────────┐
          │ addLettuce │
          └────────────┘
               ↓
          ┌────────────┐
          │   toast    │
          └────────────┘
               ↓
             output
```

✅ **Readable like natural English:**

> "Take the bread, then add cheese, then add lettuce, then toast it."

---

#### Implementing a `pipe` (or `flow`) Function

A `pipe` function takes multiple functions as arguments and returns a new function that applies those functions from **left to right**.

```javascript
const pipe = (...fns) => (initialValue) =>
  fns.reduce((acc, fn) => fn(acc), initialValue);

// Example Usage:
const add5 = (num) => {
  console.log(`add5(${num}) -> ${num + 5}`);
  return num + 5;
};
const multiplyBy2 = (num) => {
  console.log(`multiplyBy2(${num}) -> ${num * 2}`);
  return num * 2;
};
const subtract10 = (num) => {
  console.log(`subtract10(${num}) -> ${num - 10}`);
  return num - 10;
};

const pipedFunction = pipe(add5, multiplyBy2, subtract10);

const result = pipedFunction(10);
console.log('Result:', result);

/*
Output:
add5(10) -> 15
multiplyBy2(15) -> 30
subtract10(30) -> 20
Result: 20
*/
```

**How `pipe` works:**

The implementation is almost identical to `compose`, but it uses `reduce` instead of `reduceRight`.

1.  **`fns.reduce((acc, fn) => fn(acc), initialValue)`**:
    * `reduce` iterates over the `fns` array from left to right.
    * `acc` (accumulator) starts with `initialValue`.
    * In each iteration, `fn(acc)` is called, applying the current function `fn` to the accumulated value `acc`.
    * The result of `fn(acc)` becomes the new `acc` for the next iteration.

#### Function Composition

**Function composition** is the act of combining simple functions to build more complex ones. Mathematically, if you have two functions f(x) and g(x), their composition would be h(x) = f(g(x)). In this case, g(x) is executed first, and its result is then passed to f(x).

#### 🟨 `compose()` — **Right to Left**

Same sandwich example, but describing how you’d **build it in reverse** (mathematically elegant):

```js
compose(toast, addLettuce, addCheese)(bread)
```

This is the same as:

```js
toast(addLettuce(addCheese(bread)))
```

**Visual Flow:**

```text
            ┌────────────┐
input <---- │ addCheese  │
            └────────────┘
                   ↑
            ┌────────────┐
            │ addLettuce │
            └────────────┘
                   ↑
            ┌────────────┐
            │   toast    │
            └────────────┘
                   ↑
                output
```

✅ **More math-y, more control:**

> "Compose a final function that **first toasts**, then **adds Lettuce**, then **adds cheese** to any bread you give it."

---

#### Basic Example of Manual Composition

```javascript
const add5 = (num) => num + 5;
const multiplyBy2 = (num) => num * 2;
const subtract10 = (num) => num - 10;

// Manually composing them
const result = subtract10(multiplyBy2(add5(10))); // (10 + 5) * 2 - 10 = 15 * 2 - 10 = 30 - 10 = 20
console.log(result); // 20
```

While this works, it can become difficult to read and manage as the number of functions increases, leading to "callback hell" or deeply nested calls.

#### Implementing a `compose` Function

A `compose` function takes multiple functions as arguments and returns a new function that applies those functions from **right to left**.

```javascript
const compose = (...fns) => (initialValue) =>
  fns.reduceRight((acc, fn) => fn(acc), initialValue);

// Example Usage:
const add5 = (num) => {
  console.log(`add5(${num}) -> ${num + 5}`);
  return num + 5;
};
const multiplyBy2 = (num) => {
  console.log(`multiplyBy2(${num}) -> ${num * 2}`);
  return num * 2;
};
const subtract10 = (num) => {
  console.log(`subtract10(${num}) -> ${num - 10}`);
  return num - 10;
};

const composedFunction = compose(subtract10, multiplyBy2, add5);

const result = composedFunction(10);
console.log('Result:', result);

/*
Output:
add5(10) -> 15
multiplyBy2(15) -> 30
subtract10(30) -> 20
Result: 20
*/
```

**How `compose` works:**

1.  **`...fns`**: Uses the rest parameter syntax to collect all passed functions into an array `fns`.
2.  **`(initialValue) => ...`**: Returns a new function that takes an `initialValue`. This is the value that will be passed through the composed functions.
3.  **`fns.reduceRight((acc, fn) => fn(acc), initialValue)`**:
    * `reduceRight` iterates over the `fns` array from right to left.
    * `acc` (accumulator) starts with `initialValue`.
    * In each iteration, `fn(acc)` is called, meaning the current function `fn` is applied to the accumulated value `acc`.
    * The result of `fn(acc)` becomes the new `acc` for the next iteration.

#### Why Use Pipe and Compose?

1.  **Readability:** They make complex sequences of operations easier to read and understand, as you can see the data transformation flow (especially with `pipe`).
2.  **Modularity:** You break down large problems into smaller, single-purpose functions. Each function does one thing well.
3.  **Reusability:** The small, pure functions used in composition/piping are highly reusable across different parts of your application.
4.  **Maintainability:** Changes to one part of the data transformation pipeline are isolated to the specific function, reducing side effects.
5.  **Testability:** Small, pure functions are easy to test in isolation.
6.  **Declarative Style:** Instead of imperative step-by-step instructions, you declare *what* transformations should occur.

#### Real-World Use Cases

Imagine you're processing a list of users:

```javascript
const users = [
  { name: 'alice', age: 30, isActive: true },
  { name: 'bob', age: 25, isActive: false },
  { name: 'charlie', age: 35, isActive: true },
  { name: 'david', age: 20, isActive: true },
];

const filterActiveUsers = (usersArray) =>
  usersArray.filter((user) => user.isActive);

const mapToNames = (usersArray) =>
  usersArray.map((user) => user.name);

const toUpperCase = (namesArray) =>
  namesArray.map((name) => name.toUpperCase());

const sortAlphabetically = (namesArray) =>
  [...namesArray].sort(); // Create a shallow copy to avoid mutating original

// Using pipe to process users
const processUserNames = pipe(
  filterActiveUsers,
  mapToNames,
  toUpperCase,
  sortAlphabetically
);

const processedNames = processUserNames(users);
console.log(processedNames); // [ 'ALICE', 'CHARLIE', 'DAVID' ]
```

This example clearly demonstrates the flow of data: `users` are first filtered, then mapped to names, then converted to uppercase, and finally sorted.

#### Libraries for Pipe/Compose

Many functional programming libraries provide `compose` and `pipe` utilities out of the box, often with more advanced features like currying.

* **Lodash:** `_.flow()` (pipe) and `_.flowRight()` (compose)
* **Ramda:** `R.pipe()` and `R.compose()`

These libraries often offer optimized and more robust implementations, especially when dealing with functions that take multiple arguments (which typically requires currying for seamless piping/composition).

#### 🔁 Summary

| Concept        | `pipe(f1, f2, f3)(x)`    | `compose(f3, f2, f1)(x)` |
| -------------- | ------------------------ | ------------------------ |
| Order          | Left → Right             | Right → Left             |
| Visual         | Step 1 → Step 2 → Step 3 | Step 3 → Step 2 → Step 1 |
| Readability    | Easy, natural            | More mathematical        |
| Under the Hood | `f3(f2(f1(x)))`          | `f3(f2(f1(x)))`          |

---

#### Conclusion

Function composition and piping are fundamental patterns in functional JavaScript. By embracing them, you can write cleaner, more maintainable, and easier-to-reason-about code that transforms data in a clear, sequential manner. While manual implementation is straightforward for basic cases, considering a utility library can provide more advanced capabilities for complex scenarios.

---

### **Fetching API Data in JavaScript**

Fetching data from external APIs is a core part of modern web development. APIs (Application Programming Interfaces) allow your JavaScript applications to communicate with servers, retrieve data, and send updates—enabling features like dynamic content, user authentication, and integration with third-party services.

JavaScript provides several ways to make HTTP requests, with the modern `fetch()` API being the recommended approach for most use cases. Understanding how to fetch, send, and handle API data is essential for building interactive and data-driven applications.

---

#### Using the `fetch()` API (Recommended)

The `fetch()` API provides a powerful and flexible way to make network requests. It returns a `Promise` that resolves to the `Response` to that request, whether it is successful or not.

#### Basic `fetch()` Example

```javascript
fetch('https://api.example.com/data') // Replace with your API endpoint
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then(data => {
    // Handle the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Error fetching data:', error);
  });
```

#### Explanation of the `fetch()` API

1.  **`fetch(url, options)`**:
    * `url`: The URL of the resource you want to fetch.
    * `options` (optional): An object that allows you to customize the request (e.g., `method`, `headers`, `body`).

2.  **`.then(response => { ... })`**:
    * The first `.then()` block receives the `Response` object.
    * `response.ok`: A boolean indicating if the HTTP status code is in the 200-299 range.
    * `response.status`: The HTTP status code (e.g., 200, 404, 500).
    * `response.json()`: A method that parses the `Response` body as JSON. It also returns a `Promise`, which is why you need another `.then()`. Other methods include `response.text()` (for plain text) and `response.blob()` (for binary data).

3.  **`.then(data => { ... })`**:
    * The second `.then()` block receives the parsed data (in this case, the JavaScript object from the JSON).

4.  **`.catch(error => { ... })`**:
    * This block catches any errors that occur during the fetch operation (e.g., network issues, invalid URL, or errors thrown in the `.then()` blocks).

#### `async/await` with `fetch()` (More Modern and Readable)

`async/await` makes asynchronous code look and behave more like synchronous code, making it easier to read and maintain.

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

#### Explanation of `async/await`

1.  **`async function fetchData() { ... }`**: Defines an asynchronous function.
2.  **`await fetch(...)`**: Pauses the execution of the `fetchData` function until the `fetch()` Promise resolves. The resolved `Response` object is then assigned to `response`.
3.  **`await response.json()`**: Similarly, pauses execution until the `response.json()` Promise resolves, and the parsed data is assigned to `data`.
4.  **`try...catch`**: Handles errors in an `async/await` context. Any error (network, HTTP error, or errors within the `await` operations) will be caught by the `catch` block.

---

#### Sending Data with `fetch()` (POST, PUT, DELETE)

The `fetch()` API is also used for sending data to an API, typically for creating, updating, or deleting resources.

#### Example: POST Request

```javascript
async function postData() {
  const postBody = {
    title: 'My New Post',
    body: 'This is the content of my new post.',
    userId: 1,
  };

  try {
    const response = await fetch('https://api.example.com/posts', { // Replace with your API endpoint
      method: 'POST', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json', // Indicate that you're sending JSON
        // Add any other headers like authorization tokens if required
      },
      body: JSON.stringify(postBody), // Convert the JavaScript object to a JSON string
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Post created:', data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

postData();
```

#### Key `options` for Sending Data

* **`method`**:
    * `'GET'` (default for fetching)
    * `'POST'` (for creating resources)
    * `'PUT'` (for updating existing resources completely)
    * `'PATCH'` (for partial updates)
    * `'DELETE'` (for deleting resources)
* **`headers`**: An object containing HTTP headers.
    * `'Content-Type': 'application/json'` is crucial when sending JSON data so the server knows how to parse the request body.
    * `'Authorization': 'Bearer YOUR_TOKEN'` for authenticated requests.
* **`body`**: The data you want to send.
    * For JSON data, use `JSON.stringify(yourObject)` to convert your JavaScript object into a JSON string.
    * For form data, you might use `new FormData()`.

---

#### Other Methods (Less Common for New Development)

While `fetch()` is the preferred method, it's good to be aware of others:

#### 1. `XMLHttpRequest` (XHR) - The Older Way

This is the original way to make HTTP requests in JavaScript. It's more verbose and less convenient than `fetch()` and is generally not recommended for new projects unless you have to support very old browsers.

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data'); // Replace with your API endpoint

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Request was successful
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    // Request failed
    console.error('Request failed. Status:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('Network error occurred');
};

xhr.send();
```

#### 2. Third-Party Libraries (e.g., Axios)

Libraries like Axios provide a more feature-rich and often simpler API for making HTTP requests, especially in complex applications. They often offer built-in features like request/response interceptors, automatic JSON parsing, and better error handling.

**Using Axios (requires installation: `npm install axios`)**

```javascript
// In your JavaScript file
import axios from 'axios'; // If using modules

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); // Axios automatically parses JSON
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// POST request with Axios
axios.post('https://api.example.com/posts', {
    title: 'My New Post',
    body: 'This is the content of my new post.',
    userId: 1,
  })
  .then(response => {
    console.log('Post created:', response.data);
  })
  .catch(error => {
    console.error('Error creating post:', error);
  });
```

---

#### Important Considerations

* **CORS (Cross-Origin Resource Sharing)**: If you're trying to fetch data from an API on a different domain, port, or protocol than your web page, you might encounter CORS errors. The API server needs to explicitly allow requests from your origin.
* **Error Handling**: Always include robust error handling (`.catch()` or `try...catch`) to deal with network issues, invalid responses, or API errors.
* **Loading States and User Feedback**: For a good user experience, show loading indicators while data is being fetched and provide feedback on success or failure.
* **Asynchronous Nature**: Remember that fetching data is an asynchronous operation. Your code won't wait for the data to arrive before moving on. This is why Promises and `async/await` are crucial.
* **API Keys/Authentication**: Many APIs require authentication (e.g., API keys in headers, OAuth tokens). Make sure to include these if necessary.
* **Rate Limiting**: Be mindful of API rate limits. If you make too many requests too quickly, the API might temporarily block you.
* **Security**: Be careful not to expose sensitive API keys or credentials directly in client-side JavaScript. For server-side APIs, use environment variables.
* **Data Transformation**: Sometimes, the data you receive from an API might not be in the exact format you need. You'll often need to transform or process it before using it in your application.

By understanding these concepts and using the `fetch()` API with `async/await`, you'll be well-equipped to integrate data from external APIs into your JavaScript applications.

---

### **Strict Mode("use strict";)**

> Strict mode was introduced in **ECMAScript 5 (ES5)** as a way to make JavaScript more reliable and secure by catching common coding errors early. By enabling strict mode, developers avoid problematic practices that could lead to unexpected behaviors.

---

#### **How to Enable Strict Mode**  
Strict mode can be applied in two ways:  

#### **1. At the script level**  
Simply add `"use strict";` at the beginning of a JavaScript file. This will apply strict mode to the entire script.  
```javascript
"use strict";  
console.log("Strict mode enabled!");  
```
All subsequent code in this file will follow strict mode rules.  

#### **2. At the function level**  
You can enable strict mode only inside a function:  
```javascript
function myFunction() {
  "use strict";
  let test = "This function runs in strict mode!";
}
```
This ensures that strict mode is applied only within this function, leaving the rest of the script unaffected.

---

#### **Key Features and Restrictions of Strict Mode**  

✅ **Eliminates accidental global variables**  
```javascript
"use strict";
myVar = 5;  // ❌ Error: myVar is not defined
```
Without strict mode, JavaScript would automatically declare `myVar` as a global variable. Strict mode prevents this.

✅ **Restricts the use of `this` in functions**  
In **non-strict mode**, calling a function without context assigns `this` to the global object (`window` in browsers).  
```javascript
function testFunction() {
  console.log(this);  // In non-strict mode: `this` refers to the global object
}
testFunction();
```
In **strict mode**, `this` will be `undefined`.  
```javascript
"use strict";
function testFunction() {
  console.log(this);  // ✅ `this` is undefined in strict mode
}
testFunction();
```

✅ **Prevents assignment to read-only properties**  
```javascript
"use strict";
const obj = Object.freeze({ name: "Aziz" });
obj.name = "Copilot";  // ❌ Error: Cannot modify a read-only property
```
Strict mode protects objects from unintended modifications.

✅ **Disallows duplicate parameter names**  
```javascript
function example(a, a) {  
  return a;  
}
```
🚨 **Error in strict mode!** Duplicate parameters are not allowed.

✅ **Throws errors for octal numeric literals**  
In **non-strict mode**, octal literals (`075`) are valid numbers.  
```javascript
let num = 075;  // Allowed in non-strict mode
```
🚨 **Error in strict mode!** Octal literals are forbidden. Use `0o75` instead.

✅ **Prevents the deletion of non-deletable properties**  
```javascript
"use strict";
delete Object.prototype; // ❌ Error: Cannot delete non-configurable properties
```

✅ **Forbids `with` statements**  
The `with` statement is banned in strict mode since it can create **ambiguity in variable scope**, making debugging harder.  
```javascript
"use strict";
with (document) {  
  console.log(title);  // ❌ Error: `with` is not allowed in strict mode
}
```

---

#### **Strict Mode and Modern JavaScript (ES6+)**  
Strict mode laid the foundation for **ES6 (ECMAScript 2015)**, which introduced new features like `let`, `const`, and **arrow functions** that naturally enforce stricter rules.  
For example:  
```javascript
let myVar = "Hello";  
const myConst = "Strict mode makes JavaScript better!";
```
Using `let` and `const` avoids common pitfalls that strict mode catches.

---

#### **Should You Always Use Strict Mode?**  
YES! Strict mode ensures:
- **Fewer hidden bugs**
- **Better security**
- **More maintainable code**
- **Future-proof JavaScript practices**

Modern JavaScript practices **implicitly follow strict mode**, especially when using **ES6 modules**:  
```javascript
export function myModule() {
  console.log("Modules are strict by default!");
}
```

---

#### **Conclusion**  
Strict mode is a **developer's best friend**. It enforces clean, safe coding practices, prevents common mistakes, and helps JavaScript run more efficiently. If you're serious about mastering JavaScript, **use strict mode by default!** 🚀

---

## **Testing**

### **JEST**



---

### **Cypress**



---


## Notes and Best Practices:

- Value vs Reference:
  ```js
  // Value vs Reference
  // Primitives pass values:
  let x = 2;
  let y = x;
  y += 1;
  console.log(y);
  console.log(x);

  // Structural types use references:
  let xArray = [1, 2, 3];
  let yArray = xArray;
  yArray.push(4);
  console.log(yArray);
  console.log(xArray);|
  ```
  > Review:
    - Primitive vs Structural Data Types
    - Primitives data types pass values
    - Structural data types pass references
    - Primitives data types are immutable
    - Reassignment is not the same as mutable
    - Structural data types contain mutable data
    - Shallow copy vs. Deep copy (clones of data structures)
    - Shallow copies still share references of nested structures
    - which allows for mutation of the original data
    - Object.freeze() creates a shallow freeze
    - Deep copies share no references

  ---

- Do not use innerHTML
    (slower xss) use doc fragments(faster)
    (
    ```js
    const sanitizeInput = (inputValue) => {
    const div = document. createElement('div');
    div.textContent = inputValue;
    return div. innerHTML;} // using regex also will be better

    ```
    )

  ---

- Assignment and Equality Operators

  - `=` (Assignment): Assigns a value to a variable.
    ```js
    let x = 10;
    ```
  - `==` (Loose Equality): Compares values after type coercion.
    ```js
    5 == "5"; // true
    ```
  - `===` (Strict Equality): Compares both value and type, no type conversion.
    ```js
    5 === "5"; // false
    5 === 5;   // true
    ```

    **Best Practice:**  
    Prefer `===` over `==` to avoid unexpected type coercion.

  ---

- forEach is BAD! for Async Await Code

  ---

- STOP Using Switch Statements:
  - using Object
    ```js
    const extension = '/';

    const extensionObj = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.txt': 'text/plain'
    }
    console.log(extensionObj[extension] || 'text/html')
    ```
  + Using Map
    ```js
    const myMap = new Map();
    myMap.set('.css', 'text/css')
    myMap.set('.json', 'application/json')

    console. log(myMap.get(extension) || 'text/html')
    ```

  -  How to check for an empty array in Javascript:
    [check here](https://youtu.be/ULniqxZ8ueI?list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd)

  ---

- Mutable vs Immutable
  ```js
    // Primitives are immutable
    let myName = "Dave";
    myName [0] = "W"; // nope!
    console.log(myName);

    // Reassignment is not the same as mutable
    myName = "David";
    console.log(myName);

    // Structures contain mutable data
    yArray[0] = 9;
    console.log(yArray);
    console.log(xArray);
  ```

  ---

- Composition vs inheritance:

  ### 🧬 **Inheritance (IS-A relationship)**

  Inheritance means you create a class based on another class:

  ```js
  class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Woof!");
    }
  }

  const dog = new Dog();
  dog.speak(); // ✅ inherited
  dog.bark();  // ✅ own method
  ```

  🔴 **Problems with Inheritance**:

  * **Tight coupling**: Child is tightly bound to parent
  * **Rigid structure**: Hard to change hierarchy later
  * **Single Inheritance Limit**: JS classes only inherit from *one* parent
  * **Fragile base class**: Changes to the parent might break the child
  * **Leaky abstraction**: Child might expose unwanted parent behaviors

  ---

  ### ⚙️ **Composition (HAS-A relationship)**

  Composition means you build behavior by combining smaller functions or objects.

  ```js
  const canEat = (state) => ({
    eat: () => console.log(`${state.name} is eating`)
  });

  const canWalk = (state) => ({
    walk: () => console.log(`${state.name} is walking`)
  });

  const canBark = (state) => ({
    bark: () => console.log(`${state.name} is barking`)
  });

  const createDog = (name) => {
    const state = { name };
    return Object.assign({}, canEat(state), canWalk(state), canBark(state));
  };

  const dog = createDog("Charlie");
  dog.eat();   // Charlie is eating
  dog.walk();  // Charlie is walking
  dog.bark();  // Charlie is barking
  ```

  ✅ **Benefits of Composition**:

  * **Reusability**: Mix only the behaviors you need
  * **Flexibility**: Add/remove capabilities easily
  * **Decoupling**: No hierarchy to maintain
  * **Testability**: Each piece is testable independently
  * **Avoid deep inheritance trees**: No confusion, no "diamond problems"

  ---

  ### 📌 Why "Composition Over Inheritance"?

  > Think **LEGO**: Build what you need from small, reusable blocks
  > Not **Russian Dolls**: Where everything is nested and hard to untangle

  **In Real Life:**

  * React prefers composition (props, hooks, HOCs)
  * Functional programming promotes it
  * Libraries like Redux, RxJS, Ramda, Lodash FP — all lean into it

  ---

  ### ✨ When to use which?

  | Situation                   | Go with...  |
  | --------------------------- | ----------- |
  | Needs natural hierarchy     | Inheritance |
  | Dynamic, pluggable behavior | Composition |
  | Game entities, React apps   | Composition |
  | Classical OOP modeling      | Inheritance |

  ---

## **- Projects and Ending**
Will add it later

---

## ToAdd
