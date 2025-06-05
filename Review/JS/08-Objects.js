
const products = {
//property: value   ==> the property-value pair
  name: 'socks',
  price: 599
};

console.log('-------------- access the value of the properties with dot notation --------------');
console.log(typeof(products));
console.log(products);
console.log(products.name); // access the value of the 'name' property with dot notation
console.log(products.price);

// set the value of the name 
products.name = "cotton socks";
console.log(products);

// add new property
products.color = "red";
console.log(products);

// delete a property
delete products.price;
console.log(products);

console.log('-------------- access the value of the properties with bracket notation --------------');

const products2 ={
  name: 'shirt',
    size: 'large',
    color: 'blue',
    price: 149,
    'stock-quantity': 30,
    rating: {   // nested object(or inner object)
      stars:4.5,
      reviewCount: 87
    }
}


console.log(typeof(products2));
console.log(products2['size']); //accessing the value using bracket notation
//change the value of an existing property
products2['size'] = 'medium';
console.log(products2);
//add a new property to the object
products2['brand'] = 'Levi\'s';
console.log(products2);
//remove a property from the object
delete products2['color'];
console.log(products2);

//why we use bracket notation
//products2.delivery-time = '48 hours'; 
//==> this wrong can't work using dot notation
products2['delivery-time']= '48 hours';
console.log(products2);

//console.log(products.delivery-time); this also wrong
console.log(products2['delivery-time']);
console.log(products2['stock-quantity']);

//access inner object value
console.log(products2.rating.stars);

//access inner object value using bracket notation
console.log(products2['rating']['reviewCount']);

console.log('-------------- Function inside an object : --------------');
let person={
  firstName:'Yahyaoui',
  lastName:'Med Aziz',
  age:99,
  fun : function getFullName(){ // the function inside an obj also called a method.
    return `${person.firstName} ${person.lastName}`;
  },
  greetings(){
    console.log(`Hello! My Name is ${person.fun()}, I am ${person.age} years old.`);
    }
};
console.log( person.fun());
person.greetings();


console.log('-------------- Objects & JSON : --------------');

products3={
  name:"T-shirt",
  size:"small",
  color:"red" ,
  price:10.50,
  deliveryTime: "2 days",
  stockQuantity: 7,
  rating:{
    stars:4.6,
    reviewCount:100
    },
  fun : function () {return `Anything`;} // JSON doesn't support functions

};
// convert an obj to JSON syntax

let convToJSON = JSON.stringify(products3);
console.log(convToJSON);
console.log(typeof convToJSON);

//convert from JSON to object 

let products3Copy = JSON.parse(convToJSON);
console.log(products3Copy);

console.log('-------------- Local Storage: --------------');
localStorage.setItem("message",'hello');
// local storage don't support objects, it support just strings
console.log(localStorage.getItem("message"));

//remove item from local storage
//localStorage.removeItem("message");
console.log(localStorage.getItem("message"));
//When we delete an item from local storage it return null as value 

console.log('-------------- Auto-boxing: --------------');

console.log('hello'.length);
console.log('hello'.toUpperCase);

console.log('-------- Object are references : ---------');
let objA = {};
let objB = objA; // reference 
/*Now both objA and objB refer to the same object in memory
ObjB = objA ==> also called copy by reference */
objB.x = 10;
console.log(objA.x); // Output: 10

const obj1 = {
  message : "Hello there !"
};


const obj2 = obj1; 
console.log(obj2);

obj1.message ='Good job !';
console.log(obj1);
console.log(obj2);

console.log("------------- compare object :---------------");

const obj3 ={
  message : 'Good job !'
};

console.log(obj1 === obj3); // false 
// because they have deferent references even they have the same value.
console.log(obj1 == obj2 ); // true
// they point to the same reference in memory.

console.log("----------- Shortcuts of an object :-----------");

const obj4 ={
  message: 'anything...'
};

// const message = obj4.message;
const {message} = obj4; // this called destructuring '{blabla}'
console.log(message);

const obj5 ={
  name:'John',
  age:30,
};

const {name, age }= obj5 ;
console.log(`${name}, ${age}`);

//-----------  Shorthand property -----------

const obj6 ={
  // message: message
  message
};
console.log(obj6);

//-----------  Shorthand Method -----------

const obj7 ={
  message,
  method : function Func1() {
    console.log('method');
  },
  method2 (){  // this's the short way to create a method.
    console.log('method2');
  }
};

obj7.method();
obj7.method2();

