import users from './mods/ClassUser.js';




const usersArr =[{  name: 'Aziz',email: 'aziz@email.com'},
                {  name: 'Jane',email: 'jane@email.xyz'},
                {  name: 'Doe',email: 'Doe@eamil.cv'}];

console.log('Users Array:', usersArr);
const userObjects = usersArr.map((user, index) => new users(index + 1, user.name, user.email));
console.log('User Objects:', userObjects);


