
function getPerson(name,age,address,occupation) {
  return{ 
    //name : name,
    name,
    age,
    address,
    occupation,
    isWorking() {
      console.log("working!!")
    }
  }
}

const person1 = getPerson("Med Aziz yahyaoui",27,"Tunisia","IT")
const person2 = getPerson("Med Aziz nahal",22,"Tunisia","Web developer")
const person3 = getPerson("Bilel nahal",27,"Tunisia","Nurse")

console.log("--------------------------");
console.log("First person :")
console.log(person1);
console.log("--------------------------");
console.log("Second person :")
console.log(person2);
console.log("--------------------------");
console.log("Third person :")
console.log(person3);


