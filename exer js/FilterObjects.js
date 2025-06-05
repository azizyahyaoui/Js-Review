let persons = [
  {id: 1, fillName:"Med aziz yahyaoui",age: 27, occupation: "Web developer"},
  {id: 2 , fillName:"Chiheb Yahyaoui",age: 24, occupation:"Chef"},
  {id: 3 , fillName:"Ghofrane Yahyaoui",age: 22 , occupation:"Student"},
  {id: 4 , fillName:"Bilel Nahal",age: 27 , occupation:"Nurse"},
  {id: 5 , fillName:"Aziz Nahal",age: 22 , occupation:"Student"},
  {id: 6 , fillName:"Chedli janhani",age: 27, occupation:"Web developer"},
  {id: 7 , fillName:"Yassin janhani",age: 22 , occupation:"Web developer"},
  {id: 8 , fillName:"Youssef Backouch",age: 31 , occupation:"Web developer"},
  {id: 8 , fillName:"Hossem Aloui",age: 30, occupation:"Insurance"}
]


console.log("-------------------------------------------------------------------------\n");
console.log("All persons: ");
console.log(persons);
console.log("-------------------------------------------------------------------------\n");
console.log("All web developer persons: ");
let devPeople = persons.filter( p => p.occupation === "Web developer");
console.log(devPeople);
console.log("-------------------------------------------------------------------------");
