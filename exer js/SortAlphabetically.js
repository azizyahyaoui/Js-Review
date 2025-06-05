let employees = [
  {id: 1,name: "Med aziz",lastName: "Yahyaoui", age: 27},
  {id: 3,name: "Bilel",lastName: "Nahal",age: 27},
  {id: 5,name: "Aziz",lastName: "Nahal",age: 22},
  {id: 2,name: "Chiheb",lastName: "Yahyaoui",age: 24 },
  {id: 4,name: "Ghofrane",lastName: "Yahyaoui",age:21 }
];

// Sorting by name (the best practice for the case sensitivity is to convert names to lowercase or the same case, cause the compiler compers using the ASCII code))
employees.sort((a,b) =>{
  const lowercaseA = a.name.toLowerCase();
  const lowercaseB= b.name.toLowerCase();

  if (lowercaseA < lowercaseB) return -1;
  else if (lowercaseA > lowercaseB) return 1;
  else
  return 0;

});


console.log(employees);