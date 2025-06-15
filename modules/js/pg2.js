import { sumNumb as add } from './mods/helper.js';



console.log('Using SumNumb function:');
console.log(add());
console.log(add(10));
console.log(add(1, 2, 3, 4));

const five = add(2, 3);
console.log(five);
