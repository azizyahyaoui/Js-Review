//Declaration

let numbArray = new Array(1,4,5,9,2,3,6,8,7); // using new (constructor)

let reservedArray = new Array(10); // empty array with size :10

let strArray = ["hello", "world","!."]; // Using Array Literals

//access elements and display array

console.log(numbArray);
console.log("--------------------------------------");
console.log(strArray[1]);

console.log("--------------------------------------");
//  Modifying Array Elements

strArray[1] = "JavaScript";
console.log(strArray);

console.log("--------------------------------------");
// Array length
console.log(numbArray.length);
console.log(strArray.length);

// Array Methods : push(element1, ..., elementN) / pop() / unshift(element1, ..., elementN) / shift()

console.log("--------------------------------------");
//Adding and Removing Elements
numbArray.push(10,11,12)
console.log(numbArray);

console.log("--------------------------------------");
// Removes the last element
strArray.pop()
console.log(strArray);

console.log("--------------------------------------");
//Adds one or more elements to the beginning of the array

reservedArray.unshift("Med aziz yahyaoui","Software engineer",27)
console.log(reservedArray);
console.log("update : ");
reservedArray.unshift("id: 1","ref: 54sd5sd4f5q4f")
console.log(reservedArray);

console.log("--------------------------------------");
//Removes the first element
console.log(numbArray);
numbArray.shift()
console.log(numbArray);

/****************************************************************************************************************************/

//Finding and Filtering Elements : indexOf(searchElement, fromIndex) / lastIndexOf(searchElement, fromIndex) / includes(searchElement, fromIndex) / find(callback)/ filter(callback)

console.log("--------------------------------------");
// Returns the first index at which a given element can be found, or -1 if it is not present
console.log(reservedArray.indexOf("Software engineer"));
console.log(reservedArray.indexOf("anything"));

console.log("--------------------------------------");
//Returns the last index of the element in the array, or -1 if it is not present
strArray.push("greeting")
console.log(strArray.lastIndexOf("greeting"));
console.log(strArray.lastIndexOf("world"));

console.log("--------------------------------------");
//Returns `true` if the array contains the specified element, `false` otherwise
console.log(numbArray.includes(5));
console.log(strArray.includes("hello"));

console.log("--------------------------------------");
//Returns the first element in the array that satisfies the provided testing function
let result = reservedArray.find(r => r.startsWith("S"));
console.log(result); 

console.log("--------------------------------------");
//Creates a new array with all elements that pass the test implemented by the provided function

let filtered = reservedArray.filter(rv => rv.length >17);
  console.log(filtered);


/*****************************************************************************************************************************/
// Transforming Arrays:   map(callback)/ reduce(callback, initialValue)/

console.log("--------------------------------------");
//Creates a new array populated with the results of calling a provided function on every element in the calling array
let lengths = strArray.map(st => st.length);
console.log(lengths); 

console.log("--------------------------------------");
//Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let totalLength = strArray.reduce((accumulator, str) => accumulator + str.length, 0);
console.log(totalLength);


/*****************************************************************************************************************************/
// Combining and Slicing Arrays:   concat(array1, ..., arrayN)/ slice(start, end)/ splice(start, deleteCount, item1, ..., itemN)
console.log("--------------------------------------");
//Merges two or more arrays into one new array
let addArray = ["2000$", "1997-04-21"];
let person = reservedArray.concat(addArray);
console.log(person);


console.log("--------------------------------------");
//Returns a shallow copy of a portion of an array into a new array object
let subNumbArray = numbArray.slice(1, 3);
console.log(subNumbArray);

console.log("--------------------------------------");
//Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
strArray.splice(0, 1, "HI");
console.log(strArray);

/*****************************************************************************************************************************/
// Sorting and Reversing: sort(compareFunction)/ reverse()/ 

console.log("--------------------------------------");
//Sorts the elements of an array in place and returns the array
numbArray.sort();
console.log(numbArray)

console.log("--------------------------------------");
//Reverses the order of the elements in the array
let charArray = ['a','b','c','d','e','f']
charArray.reverse();
console.log(charArray);

/*****************************************************************************************************************************/
// Other Useful Methods: join(separator)/ forEach(callback)/ some(callback)/ every(callback)

console.log("--------------------------------------");
//Joins all elements of an array into a string.
let nNumbArray = numbArray.join(", ");
console.log(nNumbArray);

console.log("--------------------------------------");
// Executes a provided function once for each array element
reservedArray.forEach(rv1 => console.log(rv1));

console.log("--------------------------------------");
//Tests whether at least one element in the array passes the test implemented by the provided function
let hasLongName = reservedArray.some(rv2 => rv2.length > 5);
console.log(hasLongName);

console.log("--------------------------------------");
// Tests whether all elements in the array pass the test implemented by the provided function.
let allLongNames = reservedArray.every(rv3 => rv3.length > 3);
console.log(allLongNames);