// Prototypal inheritance and prototypal chaining

// ES6 classes are syntactic sugar over prototypal inheritance.
// Prototypal inheritance is a way to create objects that inherit properties and methods from other objects.

// Object literals

const person = {
  name: "John",
  age: 30,
  is_alive: true,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

const student = {
  school: "XYZ High School",
  study() {
    console.log(`${this.name} is studying at ${this.school}.`);
  }
};

student.__proto__ = person; // Set the prototype of student to person
student.name = "Alice"; // Add a name property to student
student.age = 16;
student.is_alive = true;
console.log(student); 
console.log(student.name);
console.log(student.age); 
console.log(student.school); 
student.greet(); // Output: Hello, my name is Alice and I am 16 years old.
student.study(); // Output: Alice is studying at XYZ High School.

// JS new way to create objects using prototypal: getPrototypeOf and setPrototypeOf instead of __proto__

console.log("\nUsing Object.getPrototypeOf and Object.setPrototypeOf:\n");
Object.setPrototypeOf(student, person); // Set the prototype of student to person
console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(student) === student.__proto__); //Are exactly the same
console.log(student.name); // Output: Alice

// Prototypal chaining
console.log("\nPrototypal chaining:\n");
const animal = {
  type: "Animal",
  makeSound() {
    console.log(`${this.type} makes a sound.`);
  }
};
const mammal = {
  __proto__: animal, // Set the prototype of mammal to animal
  type: "Mammal",
  makeSound() {
    console.log(`${this.type} roars.`);
  }
};
const dog = {
  __proto__: mammal, // Set the prototype of dog to mammal
  type: "Dog",
  makeSound() {
    console.log(`${this.type} barks.`);
  }
};

console.log("\nDog prototype chain:\n");
console.log(dog); // Output: { type: 'Dog', makeSound: [Function: makeSound] }
console.log(dog.type); // Output: Dog
console.log(dog.__proto__); // Output: { type: 'Mammal', makeSound: [Function: makeSound] }
console.log(dog.__proto__.__proto__); // Output: { type: 'Animal', makeSound: [Function: makeSound] }
dog.makeSound(); // Output: Dog barks.
console.log("\nCalling makeSound on dog:\n");
dog.makeSound(); // Output: Dog barks.
console.log("\nCalling makeSound on mammal:\n");
mammal.makeSound(); // Output: Mammal roars.
console.log("\nCalling makeSound on animal:\n");
animal.makeSound(); // Output: Animal makes a sound.
console.log("\nUsing Object.getPrototypeOf and Object.setPrototypeOf for prototypal chaining:\n");
const cat = {
  type: "Cat",
  makeSound() {
    console.log(`${this.type} meows.`);
  }
};
Object.setPrototypeOf(cat, mammal); // Set the prototype of cat to mammal
console.log(Object.getPrototypeOf(cat)); // Output: { type: 'Mammal', makeSound: [Function: makeSound] }
console.log(cat.type); // Output: Cat
console.log(cat.__proto__); // Output: { type: 'Mammal', makeSound: [Function: makeSound] }
console.log(cat.__proto__.__proto__); // Output: { type: 'Animal', makeSound: [Function: makeSound] }
try {
  console.log(getElement([1, 2, 3], 5)); // This will throw a RangeError
}
catch (error) {
  if (error instanceof RangeError) {
    console.log("RangeError: " + error.message); // Output: RangeError: Index out of bounds
  } else {
    console.log("An unknown error occurred: " + error.message);
  }
}

// No circular references in prototypal inheritance allowed(animal.__proto__ = animal can't be a dog or a cat)
// The __proto__ value must be an object or null
// An object can only directly inherit from one object, but it can have multiple levels of inheritance through the prototype chain


// Object with getters and setters
console.log("\nObject with getters and setters:\n");
const car ={
  make: "Toyota",
  model: "Camry",
  year: 2020,
  get getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  },
  set setCarInfo(info) {
    const [year, make, model] = info.split(" ");
    this.year = year;
    this.make = make;
    this.model = model;
  }

}
// inheriting getters and setters

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.setCarInfo = "2021 BMW X5";
console.log(luxuryCar.getCarInfo);
console.log(luxuryCar.valueOf());


// getting keys of an object
console.log("\nGetting keys of an object:\n");
console.log(Object.keys(luxuryCar));
// logging through keys
console.log("\nLogging through keys:\n");
Object.keys(luxuryCar).forEach(key => {
  console.log(`${key}: ${luxuryCar[key]}`);
});
// Using for...in loop to iterate over properties
console.log("\nUsing for...in loop to iterate over properties:\n");
for (const key in luxuryCar) {
  if (luxuryCar.hasOwnProperty(key)) {
    console.log(`${key}: ${luxuryCar[key]}`);
  }
}


// Prototypal inheritance with ES6 classes
console.log("\nPrototypal inheritance with ES6 classes:\n");
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  get vehicleInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  set vehicleInfo(info) {
    const [year, make, model] = info.split(" ");
    this.year = year;
    this.make = make;
    this.model = model;
  }
}
class Motorcycle extends Vehicle {
  constructor(make, model, year, type) {
    super(make, model, year);
    this.type = type;
  }

  get motorcycleInfo() {
    return `${this.vehicleInfo} (${this.type})`;
  }
}

const myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2021, "Cruiser");
console.log(myMotorcycle); 
console.log(myMotorcycle.vehicleInfo); 
console.log(myMotorcycle.motorcycleInfo);
