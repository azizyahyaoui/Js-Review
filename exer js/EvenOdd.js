let numbArray = [1,3,2,5,4,7,6,8,9,10,12,13,11]

function displayEvenNumbers(numbArray) {
  for (let i = 0; i < numbArray.length; i++) {
    if (numbArray[i] % 2 === 0)
      console.log(numbArray[i]);
    
  }
}

function displayOddNumbers(numbArray) {
  for (let i = 0; i < numbArray.length; i++) {
    if (numbArray[i] % 2 != 0)
      console.log(numbArray[i]);
    
  }
}

console.log("Even numbers:");
displayEvenNumbers(numbArray);
console.log("-------------------------------------");
console.log("Odd numbers");
displayOddNumbers(numbArray);