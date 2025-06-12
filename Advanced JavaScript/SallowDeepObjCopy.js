//Shallow Deep Object Copy

/*
* This function performs a shallow copy of an object.
* It creates a new object and copies the properties from the source object to the new object.
* If a property is an object, it copies the reference to that object, not the object itself.
* This means that changes to nested objects in the copied object will affect the original object.
* @param {Object} source - The object to copy.
* @returns {Object} - A new object with the same properties as the source object.
 */

//Sallow Object Copy
const gameStatsObject = {
  "score": 20,
  "level": 2,
  "health": 100,
  "player": {
    "name": "Player1",
    "position": {
      "x": 10,
      "y": 20
    }
  }
}

Object.freeze(gameStatsObject);
gameStatsObject.player.position.x = 100; // Even though the object is frozen, we can still modify nested values of the object, the object.freeze() is a shallow freeze.


/**
 * Deep copy of an object is needed to avoid the issue of shallow modifying nested objects.
 * Several libraries and methods can be used to achieve deep copying, such as:
 * lodash, Ramda
 * And there are also a built-in method in JavaScript:
 * JSON.parse(JSON.stringify(object))
 * But doesn't work with Dates, functions, undefined, Infinity, NaN, RegExp, Map, Set, blobs, fileLists, ImageData, and other complex types.
 *  
 */

// Example of deep copy using JSON methods
const deepCopiedGameStatsObject = JSON.parse(JSON.stringify(gameStatsObject));
deepCopiedGameStatsObject.player.position.x = 100; // This will not affect the original object
console.log(gameStatsObject.player.position.x); // Output: 100
console.log(deepCopiedGameStatsObject.player.position.x); // Output: 100
console.log(gameStatsObject === deepCopiedGameStatsObject); // Output: false, they are different objects
console.log(gameStatsObject.player === deepCopiedGameStatsObject.player); // Output: true, they are the same object
console.log(gameStatsObject.player.position === deepCopiedGameStatsObject.player.position); // Output: true, they are the same object
console.log(gameStatsObject.player.position.x === deepCopiedGameStatsObject.player.position.x); // Output: true, they are the same value
console.log(gameStatsObject.player.position.y === deepCopiedGameStatsObject.player.position.y); // Output: true, they are the same value
console.log(gameStatsObject.player.name === deepCopiedGameStatsObject.player.name); // Output: true, they are the same value

// Example of deep using library lodash
const _ = require('lodash');
const deepCopiedGameStatsObjectLodash = _.cloneDeep(gameStatsObject);
deepCopiedGameStatsObjectLodash.player.position.x = 200; // This will not affect the original object
console.log(gameStatsObject.player.position.x); // Output: 100
console.log(deepCopiedGameStatsObjectLodash.player.position.x); // Output: 200
console.log(gameStatsObject === deepCopiedGameStatsObjectLodash); // Output: false, they are different objects