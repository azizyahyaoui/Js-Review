function myFunction() {
  console.log('this a function');
}

myFunction();

console.log('-----------------------------------------');

function sum ( parm1 , parm2){
  
  return parm1 + parm2;
}
let parm1 = 50;
let parm2 = 30;

let result = sum(parm1,parm2);

console.log(`the result of ${parm1} + ${parm2} is ${result}`);
console.log('-----------------------------------------');

/* Default value*/

function calcTax(cost , taxPercent = 0.1) {
  console.log( cost * taxPercent);
}

calcTax(2000 , 0.2);
calcTax(5000);