document.title = 'DOM' ;
document.body.innerHTML = '<div><h1>Document Object Model (DOM):</h1></div><di><button>Click Me</button> <button class="JS-Class" >Second button</button></di>';

console.log(typeof document.body);

console.log('-------------- Test some Method : -------------');

console.log(document.title); // page title
console.log(document.head);  // <head> element
console.log(document.body);  // <body> element
console.log(document.body.innerHTML); // HTML element inside thr body

console.log('-------------- querySelector : -------------');

console.log(document.querySelector('button'));
/* Every html element has a property .innerHTML
which returns the HTML content inside the element */
console.log(document.querySelector('button').innerHTML);
//we can change also using it
document.querySelector('button').innerHTML = 'Changed';
//the code above just select the first button to solve that we use classes name. This also Known as class selector like CSS.
console.log(document.querySelector('.JS-Class').innerHTML);
document.querySelector('.JS-Class').innerHTML = 'Changed Also';


//console.log('-------------- querySelectorAll : -------------');