//Pipe (or Flow) and Compose functions

/*
 * Piping or flowing functions allows you to create a sequence of function calls where the output of one function is the
 *input to the next.
 * Composing functions allows you to combine multiple functions into a single function.
 * Pipe and Compose functions using curring function
 *
 * Bonus Joke from ChatGPt:
 *   "pipe and compose are like twins—just one wears their clothes backwards."
 *   "Pipe, Compose — Same soul, different flow."
 *    Left to right, or right to left —
 *    Either way, your logic breathes.
 *
 */

// Old way of piping functions
console.log(
  "-----------------------------Old way of Chaining or piping functions-----------------------------------"
);

const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy10 = (x) => x * 10;

const result = multiplyBy10(subtract1(add2(5)));
console.log(`Result -> ${result}.`);

// Piping functions
console.log(
  "-----------------------------Piping functions-----------------------------------"
);
// f1 --> f2 --> f.. --> fn

/* const pipe = (...fnsArray) =>{
  return (initialVal) => {
    return fnsArray.reduce((acc, fn)=> fn(acc),initialVal)
  }
} */

const pipe =
  (...fnsArray) =>
  (initialVal) =>
    fnsArray.reduce((acc, fn) => fn(acc), initialVal);
/*(...fnsArray) => Uses the rest parameter syntax to collect all passed functions into an array fns
  (initialVal) => Returns a new function that takes an initialVal. This is the value that will be passed through the composed
  fns.reduce((acc, fn) => fn(acc), initialVal)
    reduce iterates over the fns array from left to right .
    acc (accumulator) starts with initialValue.
    In each iteration, fn(acc) is called, meaning the current function fn is applied to the accumulated value acc.
    The result of fn(acc) becomes the new acc for the next iteration.
*/

const pipedResult = pipe(add2, subtract1, multiplyBy10)(5);
console.log(`Using Pipe, The Result -> ${pipedResult}`);

// Compose functions
console.log(
  "-----------------------------Compose functions----------------------------------"
);

// fn --> f.. --> f2 --> f1

const compose =
  (...fnsArray) =>
  (initialVal) =>
    fnsArray.reduceRight((acc, fn) => fn(acc), initialVal);

const compResult = compose(multiplyBy10, subtract1, add2)(5);
console.log(`Using Compose, The Result -> ${compResult} `);

// Examples:
console.log(
  "----------------------------- Examples ----------------------------------"
);

const users = [
  {name: "Aziz", age: 27 , isAuth: true},
  {name: "Bilel", age: 27 , isAuth: true },
  {name: "Ali", age: 24, isAuth: false },
  {name: "Med", age: 26 , isAuth: false },
  {name: "Chedli", age: 27 , isAuth: true },
  {name: "Tarek", age: 27 , isAuth: true },
]

const filterActiveUsers = (usersArray) => 
  usersArray.filter((user) => user.isAuth);

const mapToNames = (usersArray) =>
  usersArray.map((user) => user.name);

const toUpperCase = (userNames) =>
  userNames.map((name) => name.toUpperCase());

const sortAlphabetically = (namesArray) =>
[...namesArray].sort(); // This create a shallow copy to avoid mutating original and safe

const usersPipe = (...fns) => (initialVal) => fns.reduce((acc,fn) => fn(acc),initialVal)
const processUsers = usersPipe(
  filterActiveUsers,
  mapToNames,
  toUpperCase,
  sortAlphabetically
); //done

const processedUsers = processUsers(users)

console.log(`All Authenticated users are :\n ${processedUsers}`)
