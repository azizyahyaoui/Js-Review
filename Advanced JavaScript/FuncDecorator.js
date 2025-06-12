//Decorators

/* 
* Decorators are a way to modify or enhance the behavior of functions or classes.
  They are often used to add functionality such as logging, caching, or validation without modifying the original function or class.
  Function decorators are a design pattern that allows you to modify or enhance the behavior of functions without changing their original code. In JavaScript, decorators are typically higher-order functions that wrap another function to extend its functionality.

    ## Basic Concept

    A decorator is a function that:
    1. Takes a function as an argument
    2. Returns a new function that enhances or modifies the original function's behavior
    
## Common Use Cases for Decorators

1. **Logging**: Track function calls and results
2. **Memoization**: Cache function results
3. **Validation**: Check input parameters
4. **Timing**: Measure execution time
5. **Retry logic**: Automatically retry failed operations
6. **Rate limiting**: Control how often a function can be called

==> Function decorators provide a clean way to extend functionality while keeping your core logic clean and focused on its primary responsibility.

*/

// Simple function decorator example
function logDecorator(fn) {
  return function(...args) {
    console.log(`Calling function ${fn.name} with arguments:`, args);
    const result = fn(...args);
    console.log(`Function ${fn.name} returned:`, result);
    return result;
  };
}

// Original function
function add(a, b) {
  return a + b;
}

// Decorated function
const decoratedAdd = logDecorator(add);

decoratedAdd(2, 3);
// Logs:
// Calling function add with arguments: [2, 3]
// Function add returned: 5



// Practical Decorator Examples

// 1. Timing Decorator

function timingDecorator(fn) {
  return function(...args) {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`${fn.name} executed in ${end - start}ms`);
    return result;
  };
}

const timedAdd = timingDecorator(add);
timedAdd(2, 3);


// Memoization Decorator

function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Returning cached result');
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const memoizedAdd = memoize(add);
memoizedAdd(2, 3); // Computes
memoizedAdd(2, 3); // Returns cached result


// Validation Decorator

function validateArgs(fn, validator) {
  return function(...args) {
    if (!validator(...args)) {
      throw new Error('Invalid arguments');
    }
    return fn(...args);
  };
}

function isPositiveNumbers(a, b) {
  return a > 0 && b > 0;
}

const validatedAdd = validateArgs(add, isPositiveNumbers);
validatedAdd(2, 3); // Works
validatedAdd(-1, 2); // Throws error


//ES2016+ Class Method Decorators

// JavaScript also supports decorator syntax for class methods (stage 3 proposal, needs transpilation with Babel):

// Class method decorator
function logMethod(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) {
    console.log(`Calling ${name} with`, args);
    const result = original.apply(this, args);
    console.log(`Method ${name} returned`, result);
    return result;
  };
  return descriptor;
}

class Calculator {
  @logMethod
  add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3);


// Decorator Composition

//You can compose multiple decorators together:


function composeDecorators(...decorators) {
  return function(target, name, descriptor) {
    return decorators.reduce((acc, decorator) => {
      return decorator(target, name, acc) || acc;
    }, descriptor);
  };
}

class Calculator {
  @composeDecorators(logMethod, timingDecorator)
  add(a, b) {
    return a + b;
  }
}

