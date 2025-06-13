/**
 * composition over inheritance in JavaScript OOP
 * 
 */

console.log("-------------- Inheritance --------------");

class Animal {
  constructor(name, sound, age) {
    this.name = name;
    this.sound = sound;
    this.age = age;
  }
  speak() {
    console.log(`${this.name} makes a sound: ${this.sound}`);
  }

  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
}

class Human{
  constructor(name, sound, age) {
    this.name = name;
    this.sound = sound;
    this.age = age;
  }
  speak() {
    console.log(`${this.name} speaks: ${this.sound}`); // Repetition of properties and methods Not DRY
  }

  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
}

// Example of inheritance with Repetition of properties and methods Not DRY

class Dog extends Animal {
  constructor(name, sound, age) {
    super(name, sound, age);
  }
  bark() {
    console.log(`${this.name} barks: ${this.sound}`);
  }
  speak() {
    console.log(`${this.name} barks: ${this.sound}`);
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
}


// So the solution is to use composition over inheritance to avoid repetition of methods to avoid the DRY principle violation
console.log("-------------- Composition --------------");

// Reusable behavior modules (mixins)
// These functions can be reused across different entities without repeating code 
// and can be combined to create new entities with specific behaviors.

const canSpeak = (state) => ({
  speak: () => console.log(`${state.name} speaks: ${state.sound}`)
});

const canBark = (state) => ({
  bark: () => console.log(`${state.name} barks: ${state.sound}`)
});

const canAge = (state) => ({
  getAge: () => state.age,
  setAge: (age) => state.age = age
});

// Factory functions for creating entities
const createAnimal = (name, sound, age) => {
  const state = { name, sound, age };
  return Object.assign(
    {},
    canSpeak(state),
    canAge(state)
  );
};

const createDog = (name, sound, age) => {
  const state = { name, sound, age };
  return Object.assign(
    {},
    canSpeak(state),
    canBark(state),
    canAge(state)
  );
};

const createHuman = (name, sound, age) => {
  const state = { name, sound, age };
  return Object.assign(
    {},
    canSpeak(state),
    canAge(state)
  );
};

// Usage
const dog = createDog("Buddy", "Woof", 5);
dog.speak(); // Buddy speaks: Woof
dog.bark();  // Buddy barks: Woof
console.log(dog.getAge()); // 5
dog.setAge(6);
console.log(dog.getAge()); // 6

const human = createHuman("Alice", "Hello!", 30);
human.speak(); // Alice speaks: Hello!
console.log(human.getAge()); // 30

// Using spread operator for creating entities
console.log("-------------- Using Spread Operator --------------");

class Enemy {
  constructor(name) {
    this.name = name;
  }
  
  attack() {
    console.log(`${this.name} attacks!`);
  }
}

const swimmingEnemy = ({name}) => ({   // {name} is destructuring the object to get the name property
  swim: () => console.log(`${name} swims in water!`) 
}); // A factory function that returns an object with a swim method

const flyingEnemy = ({name}) => ({
  fly: () => console.log(`${name} flies in the sky!`)
});

const fireEnemy = ({name}) => ({
  burn: () => console.log(`${name} burns everything!`)
});

const frozenEnemy = ({name}) => ({
  freeze: () => console.log(`${name} freezes everything!`)
});



const waterEnemy = ({ name }) => ({
  swim: () => console.log(`${name} swims in water!`)
});

const waterEnemyCreator = (name) => ({
  name,
  ...waterEnemy({ name })
});

const flyingWaterEnemyCreator = (name) => ({
  name,
  ...waterEnemy({ name }),
  ...flyingEnemy({ name })
});

const fireWaterEnemyCreator = (name) => ({
  name,
  ...waterEnemy({ name }),
  ...fireEnemy({ name })
});

const enemy1 = waterEnemyCreator("Aqua");
const enemy2 = flyingWaterEnemyCreator("AeroAqua");
const enemy3 = fireWaterEnemyCreator("FlameAqua");
console.log(enemy1.name); // Aqua
enemy1.swim(); // Aqua swims in water!
console.log(enemy2.name); // AeroAqua
enemy2.swim(); // AeroAqua swims in water!
enemy2.fly(); // AeroAqua flies in the sky!
console.log(enemy3.name); // FlameAqua
enemy3.swim(); // FlameAqua swims in water!
enemy3.burn(); // FlameAqua burns everything!

  